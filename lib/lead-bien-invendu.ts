import { isSpam } from '@/lib/anti-spam';
import { saveContactWithTag } from '@/lib/systemeio';

/**
 * Lead « bien invendu » (calculateur + guide), partagé par :
 * - la page full-nevers-conciergerie.fr/bien-invendu (server action) ;
 * - la page tdconseils.fr/bien-invendu (POST /api/lead/bien-invendu).
 *
 * 1. Notification par e-mail (Resend) à contact@full-nevers-conciergerie.fr.
 * 2. Enregistrement du contact dans systeme.io avec une étiquette par source,
 *    si SYSTEMEIO_API_KEY est défini (sinon l'e-mail suffit, rien ne casse).
 */

export type LeadSource = 'fullnevers' | 'tdconseils';
export type LeadResult = { success: true; guideUrl: string } | { error: string };

export const GUIDE_URL = 'https://full-nevers-conciergerie.fr/guides/guide-bien-invendu.pdf';

const TAGS: Record<LeadSource, string> = {
  fullnevers: 'bien-invendu-fullnevers',
  tdconseils: 'bien-invendu-tdconseils',
};
const SITES: Record<LeadSource, string> = {
  fullnevers: 'full-nevers-conciergerie.fr/bien-invendu',
  tdconseils: 'tdconseils.fr/bien-invendu',
};

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? 'Full Conciergerie Nevers <noreply@fullconciergerie.fr>';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'contact@full-nevers-conciergerie.fr';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const num = (v: FormDataEntryValue | null) => {
  const n = parseFloat(String(v ?? '').replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) && n >= 0 ? Math.round(n) : null;
};

export async function handleLead(formData: FormData, source: LeadSource): Promise<LeadResult> {
  const firstName = String(formData.get('firstName') ?? '').trim().slice(0, 80);
  const email = String(formData.get('email') ?? '').trim().slice(0, 160);
  const postcode = String(formData.get('postcode') ?? '').trim();

  // Robot : on fait comme si tout allait bien, sans rien transmettre
  if (isSpam({ formData, name: firstName, email })) return { success: true, guideUrl: GUIDE_URL };

  if (!firstName) return { error: 'Indique ton prénom.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { error: 'Cette adresse e-mail semble incomplète. Vérifie-la.' };
  }
  if (!/^\d{5}$/.test(postcode)) return { error: 'Le code postal doit avoir 5 chiffres.' };

  const charges = num(formData.get('charges'));
  const net = num(formData.get('net'));
  const prix = num(formData.get('prix'));
  const nuits = num(formData.get('nuits'));

  const saved = await saveContactWithTag(email, TAGS[source], [
    { slug: 'first_name', value: firstName },
    { slug: 'postcode', value: postcode },
  ]);

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const html = `
      <div style="font-family:-apple-system,system-ui,sans-serif;max-width:600px;margin:0 auto;color:#1C1917">
        <h2 style="color:#0F2625">Nouveau propriétaire : bien invendu</h2>
        <p>Demande du guide depuis <strong>${esc(SITES[source])}</strong>.</p>
        <ul style="line-height:1.8">
          <li><strong>Prénom :</strong> ${esc(firstName)}</li>
          <li><strong>E-mail :</strong> ${esc(email)}</li>
          <li><strong>Code postal du bien :</strong> ${esc(postcode)}</li>
        </ul>
        ${
          charges !== null || net !== null
            ? `<h3 style="color:#0F2625">Sa simulation</h3><ul style="line-height:1.8">
                ${charges !== null ? `<li>Charges actuelles : ${charges} € / mois</li>` : ''}
                ${prix !== null ? `<li>Prix par nuit saisi : ${prix} €</li>` : ''}
                ${nuits !== null ? `<li>Nuits louées par mois : ${nuits}</li>` : ''}
                ${net !== null ? `<li>Revenu net estimé : ${net} € / mois</li>` : ''}
              </ul>`
            : ''
        }
        <p style="color:#78716C;font-size:13px">${
          saved ? `Contact enregistré dans systeme.io (étiquette ${TAGS[source]}).` : 'Contact non enregistré dans systeme.io : à ajouter à la main.'
        } Réponds directement à cet e-mail pour lui écrire.</p>
      </div>`;
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          reply_to: email,
          subject: `Bien invendu : ${firstName} (${postcode}) via ${source === 'tdconseils' ? 'tdconseils.fr' : 'Full Nevers'}`,
          html,
        }),
      });
      if (!res.ok) console.error('[lead-bien-invendu] Resend', res.status, await res.text());
    } catch (err) {
      console.error('[lead-bien-invendu] Resend', err);
    }
  } else {
    console.error('[lead-bien-invendu] RESEND_API_KEY not set');
  }

  return { success: true, guideUrl: GUIDE_URL };
}
