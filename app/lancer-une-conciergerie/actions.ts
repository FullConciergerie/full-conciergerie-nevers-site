'use server';

export type EntrepreneurResult = { success: true } | { error: string };

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ??
  'Full Conciergerie Nevers <noreply@fullconciergerie.com>';
const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? 'contact@full-nevers-conciergerie.fr';

/**
 * Server action — candidature entrepreneur (lancer sa conciergerie).
 *
 * Email récapitulatif envoyé à contact@full-nevers-conciergerie.fr,
 * sujet préfixé "🚀" pour différencier des prestataires (🤝) et clients (📩).
 */
export async function submitEntrepreneurForm(
  formData: FormData,
): Promise<EntrepreneurResult> {
  const firstName = String(formData.get('firstName') ?? '').trim();
  const lastName = String(formData.get('lastName') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const city = String(formData.get('city') ?? '').trim();
  const currentRole = String(formData.get('currentRole') ?? '').trim();
  const experience = String(formData.get('experience') ?? '').trim();
  const investment = String(formData.get('investment') ?? '').trim();
  const timeline = String(formData.get('timeline') ?? '').trim();
  const motivation = String(formData.get('motivation') ?? '').trim();

  if (!firstName || !lastName || !email || !phone || !city) {
    return {
      error:
        'Merci de remplir au moins votre nom, prénom, email, téléphone et ville envisagée.',
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Adresse email invalide.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[entrepreneur-form] RESEND_API_KEY not set');
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

  const subject = `🚀 Nouveau candidat entrepreneur — ${firstName} ${lastName} (${city})`;
  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2e4c35;">Nouveau candidat — Lancement de conciergerie</h2>
      <p>Un·e entrepreneur·e souhaite lancer sa propre conciergerie avec
      votre accompagnement, via le site
      <strong>full-nevers-conciergerie.fr/lancer-une-conciergerie</strong>.</p>

      <h3 style="margin-top: 24px; color: #2e4c35;">Coordonnées</h3>
      <ul style="line-height: 1.8;">
        <li><strong>Nom :</strong> ${safeHtml(firstName)} ${safeHtml(lastName)}</li>
        <li><strong>Email :</strong> <a href="mailto:${safeHtml(email)}">${safeHtml(email)}</a></li>
        <li><strong>Téléphone :</strong> <a href="tel:${safeHtml(phone)}">${safeHtml(phone)}</a></li>
        <li><strong>Ville / zone envisagée :</strong> ${safeHtml(city)}</li>
      </ul>

      <h3 style="margin-top: 24px; color: #2e4c35;">Profil</h3>
      <ul style="line-height: 1.8;">
        ${currentRole ? `<li><strong>Situation actuelle :</strong> ${safeHtml(currentRole)}</li>` : ''}
        ${investment ? `<li><strong>Capacité d'investissement :</strong> ${safeHtml(investment)}</li>` : ''}
        ${timeline ? `<li><strong>Horizon de lancement :</strong> ${safeHtml(timeline)}</li>` : ''}
      </ul>

      ${
        experience
          ? `<h3 style="margin-top: 24px; color: #2e4c35;">Expérience pertinente</h3>
             <div style="padding: 16px; background: #f5f0e6; border-left: 4px solid #2e4c35; border-radius: 4px;">${safeHtml(experience)}</div>`
          : ''
      }

      ${
        motivation
          ? `<h3 style="margin-top: 24px; color: #2e4c35;">Motivation / projet</h3>
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
      console.error('[entrepreneur-form] Resend error', res.status, text);
      return {
        error:
          "L'envoi a échoué. Réessayez ou contactez-nous au 03 76 15 02 29.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error('[entrepreneur-form] fetch error', err);
    return {
      error:
        "L'envoi a échoué. Réessayez ou contactez-nous au 03 76 15 02 29.",
    };
  }
}
