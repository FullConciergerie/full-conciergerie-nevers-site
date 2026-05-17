'use server';

export type ContactResult = { success: true } | { error: string };

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ??
  'Full Conciergerie Nevers <noreply@fullconciergerie.com>';
const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? 'contact@full-nevers-conciergerie.fr';

/**
 * Server action — réception du formulaire de contact.
 *
 * Envoie l'email à `contact@full-nevers-conciergerie.fr` via Resend.
 * Requiert l'env var RESEND_API_KEY (à configurer sur Vercel).
 */
export async function submitContactForm(
  formData: FormData,
): Promise<ContactResult> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const logements = String(formData.get('logements') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return { error: 'Merci de remplir le nom, l\'email et le message.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Adresse email invalide.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact-form] RESEND_API_KEY not set');
    return {
      error:
        'L\'envoi est temporairement indisponible. Contactez-nous au 03 76 15 02 29.',
    };
  }

  const safeHtml = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

  const subject = `📩 Nouveau contact site — ${name}`;
  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2e4c35;">Nouveau message via le site</h2>
      <p>Vous avez reçu un message via le formulaire de contact de
      <strong>full-nevers-conciergerie.fr</strong> :</p>
      <ul style="line-height: 1.8;">
        <li><strong>Nom :</strong> ${safeHtml(name)}</li>
        <li><strong>Email :</strong> <a href="mailto:${safeHtml(email)}">${safeHtml(email)}</a></li>
        ${phone ? `<li><strong>Téléphone :</strong> <a href="tel:${safeHtml(phone)}">${safeHtml(phone)}</a></li>` : ''}
        ${logements ? `<li><strong>Logements à confier :</strong> ${safeHtml(logements)}</li>` : ''}
      </ul>
      <p style="margin-top: 20px;"><strong>Message :</strong></p>
      <div style="padding: 16px; background: #f5f0e6; border-left: 4px solid #2e4c35; border-radius: 4px;">
        ${safeHtml(message)}
      </div>
      <p style="margin-top: 24px; color: #57534e; font-size: 13px;">
        Réponds directement à cet email pour répondre à ${safeHtml(name)}.
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
      console.error('[contact-form] Resend error', res.status, text);
      return {
        error:
          'L\'envoi a échoué. Réessayez ou contactez-nous au 03 76 15 02 29.',
      };
    }

    return { success: true };
  } catch (err) {
    console.error('[contact-form] fetch error', err);
    return {
      error:
        'L\'envoi a échoué. Réessayez ou contactez-nous au 03 76 15 02 29.',
    };
  }
}
