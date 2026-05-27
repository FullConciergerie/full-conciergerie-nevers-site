'use server';

export type PrestataireResult = { success: true } | { error: string };

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ??
  'Full Conciergerie Nevers <noreply@fullconciergerie.fr>';
const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? 'contact@full-nevers-conciergerie.fr';

/**
 * Server action — candidature prestataire.
 *
 * Envoie un email récapitulatif à contact@full-nevers-conciergerie.fr
 * pour que Delil puisse contacter le candidat.
 */
export async function submitPrestataireForm(
  formData: FormData,
): Promise<PrestataireResult> {
  const firstName = String(formData.get('firstName') ?? '').trim();
  const lastName = String(formData.get('lastName') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const postalCode = String(formData.get('postalCode') ?? '').trim();
  const profiles = formData.getAll('profiles').map((v) => String(v));
  const status = String(formData.get('status') ?? '').trim();
  const availability = String(formData.get('availability') ?? '').trim();
  const vehicle = String(formData.get('vehicle') ?? '').trim();
  const referrer = String(formData.get('referrer') ?? '').trim();
  const experience = String(formData.get('experience') ?? '').trim();
  const motivation = String(formData.get('motivation') ?? '').trim();

  // Validations minimales
  if (!firstName || !lastName || !email || !phone) {
    return {
      error:
        'Merci de remplir au moins votre nom, prénom, email et téléphone.',
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Adresse email invalide.' };
  }
  if (profiles.length === 0) {
    return { error: 'Sélectionnez au moins un type de mission.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[prestataire-form] RESEND_API_KEY not set');
    return {
      error:
        "L'envoi est temporairement indisponible. Contactez-nous au 03 76 15 02 29.",
    };
  }

  const safeHtml = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

  const subject = `🤝 Nouvelle candidature prestataire — ${firstName} ${lastName}`;
  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2e4c35;">Nouvelle candidature prestataire</h2>
      <p>Un nouveau prestataire vient de postuler via le site
      <strong>full-nevers-conciergerie.fr/devenir-prestataire</strong> :</p>

      <h3 style="margin-top: 24px; color: #2e4c35;">Coordonnées</h3>
      <ul style="line-height: 1.8;">
        <li><strong>Nom :</strong> ${safeHtml(firstName)} ${safeHtml(lastName)}</li>
        <li><strong>Email :</strong> <a href="mailto:${safeHtml(email)}">${safeHtml(email)}</a></li>
        <li><strong>Téléphone :</strong> <a href="tel:${safeHtml(phone)}">${safeHtml(phone)}</a></li>
        ${postalCode ? `<li><strong>Code postal :</strong> ${safeHtml(postalCode)}</li>` : ''}
      </ul>

      <h3 style="margin-top: 24px; color: #2e4c35;">Profil</h3>
      <ul style="line-height: 1.8;">
        <li><strong>Missions souhaitées :</strong> ${profiles.map((p) => safeHtml(p)).join(', ')}</li>
        ${status ? `<li><strong>Statut actuel :</strong> ${safeHtml(status)}</li>` : ''}
        ${availability ? `<li><strong>Disponibilités :</strong> ${safeHtml(availability)}</li>` : ''}
        ${vehicle ? `<li><strong>Véhicule :</strong> ${safeHtml(vehicle)}</li>` : ''}
      </ul>

      ${
        referrer
          ? `<div style="margin-top: 24px; padding: 16px; background: #fdf4d8; border-left: 4px solid #c8a464; border-radius: 4px;">
              <strong style="color: #2e4c35;">🎁 Parrainage</strong> — Recommandé·e par : <strong>${safeHtml(referrer)}</strong>
              <br/><span style="font-size: 13px; color: #57534e;">→ Verser 50 € à ${safeHtml(referrer)} si ${safeHtml(firstName)} valide sa première mission.</span>
            </div>`
          : ''
      }

      ${
        experience
          ? `<h3 style="margin-top: 24px; color: #2e4c35;">Expérience</h3>
             <div style="padding: 16px; background: #f5f0e6; border-left: 4px solid #2e4c35; border-radius: 4px;">${safeHtml(experience)}</div>`
          : ''
      }

      ${
        motivation
          ? `<h3 style="margin-top: 24px; color: #2e4c35;">Motivation</h3>
             <div style="padding: 16px; background: #f5f0e6; border-left: 4px solid #2e4c35; border-radius: 4px;">${safeHtml(motivation)}</div>`
          : ''
      }

      <p style="margin-top: 24px; color: #57534e; font-size: 13px;">
        Réponds directement à cet email pour contacter ${safeHtml(firstName)}.
      </p>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('[prestataire-form] Resend error', res.status, text);
      return {
        error:
          "L'envoi a échoué. Réessayez ou contactez-nous au 03 76 15 02 29.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error('[prestataire-form] fetch error', err);
    return {
      error:
        "L'envoi a échoué. Réessayez ou contactez-nous au 03 76 15 02 29.",
    };
  }
}
