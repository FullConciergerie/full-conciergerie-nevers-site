import { isSpam } from '@/lib/anti-spam';
import { saveContactWithTag } from '@/lib/systemeio';

/**
 * Lead « Lancer sa conciergerie : les 5 erreurs » (guide PDF).
 * Formulaire de tdconseils.fr/lancer-sa-conciergerie → POST /api/lead/lancer-conciergerie.
 * 1. Contact enregistré dans systeme.io (étiquette lancer-conciergerie-tdconseils).
 * 2. Notification par e-mail (Resend) à contact@full-nevers-conciergerie.fr.
 */

export type LeadResult = { success: true; guideUrl: string } | { error: string };

export const GUIDE_URL = 'https://full-nevers-conciergerie.fr/guides/guide-lancer-conciergerie.pdf';
const TAG = 'lancer-conciergerie-tdconseils';

const SITUATIONS: Record<string, string> = {
  projet: "J'ai un projet, je n'ai pas encore démarré",
  demarrage: 'Je viens de démarrer (moins de 5 logements)',
  activite: "J'ai déjà une activité et je veux la structurer",
};

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? 'Full Conciergerie Nevers <noreply@fullconciergerie.fr>';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'contact@full-nevers-conciergerie.fr';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function handleLancerConciergerie(formData: FormData): Promise<LeadResult> {
  const firstName = String(formData.get('firstName') ?? '').trim().slice(0, 80);
  const email = String(formData.get('email') ?? '').trim().slice(0, 160);
  const city = String(formData.get('city') ?? '').trim().slice(0, 80);
  const situationKey = String(formData.get('situation') ?? '');
  const situation = SITUATIONS[situationKey] ?? '';

  if (isSpam({ formData, name: firstName, email })) return { success: true, guideUrl: GUIDE_URL };

  if (!firstName) return { error: 'Indiquez votre prénom.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { error: 'Cette adresse e-mail semble incomplète. Vérifiez-la.' };
  }

  const saved = await saveContactWithTag(email, TAG, [{ slug: 'first_name', value: firstName }]);

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const html = `
      <div style="font-family:-apple-system,system-ui,sans-serif;max-width:600px;margin:0 auto;color:#1C1917">
        <h2 style="color:#0F2625">Nouveau contact : lancer sa conciergerie</h2>
        <p>Demande du guide « 5 erreurs » depuis <strong>tdconseils.fr/lancer-sa-conciergerie</strong>.</p>
        <ul style="line-height:1.8">
          <li><strong>Prénom :</strong> ${esc(firstName)}</li>
          <li><strong>E-mail :</strong> ${esc(email)}</li>
          ${city ? `<li><strong>Ville :</strong> ${esc(city)}</li>` : ''}
          ${situation ? `<li><strong>Situation :</strong> ${esc(situation)}</li>` : ''}
        </ul>
        <p style="color:#78716C;font-size:13px">${
          saved ? `Contact enregistré dans systeme.io (étiquette ${TAG}).` : 'Contact non enregistré dans systeme.io : à ajouter à la main.'
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
          subject: `Lancer sa conciergerie : ${firstName}${city ? ` (${city})` : ''} via tdconseils.fr`,
          html,
        }),
      });
      if (!res.ok) console.error('[lead-lancer-conciergerie] Resend', res.status, await res.text());
    } catch (err) {
      console.error('[lead-lancer-conciergerie] Resend', err);
    }
  }

  return { success: true, guideUrl: GUIDE_URL };
}
