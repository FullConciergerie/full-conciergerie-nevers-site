import type { Metadata } from 'next';
import { EstimationFrame } from './estimation-frame';

export const metadata: Metadata = {
  title: 'Estimation gratuite de vos revenus locatifs',
  description:
    "Estimation gratuite et personnalisée des revenus de votre logement en location courte durée à Nevers et dans la Nièvre. Réponse sous 48 h par Full Conciergerie.",
  alternates: { canonical: '/estimation' },
  openGraph: {
    title: 'Estimation gratuite — Full Conciergerie - Nevers',
    description:
      'Combien pourrait vous rapporter votre logement en location courte durée ? Estimation gratuite sous 48 h.',
    url: '/estimation',
  },
};

/**
 * Page d'estimation : intègre le formulaire systeme.io (tunnel « Propriétaires »)
 * pour garder les automatisations (emails, alertes, tags) gérées dans systeme.io.
 * La page systeme.io masque son propre en-tête et pied de page quand elle est intégrée.
 */
export default function EstimationPage() {
  return (
    <>
      <section className="bg-charbon" style={{ padding: '120px 24px 32px', textAlign: 'center' }}>
        <h1 className="serif" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.1, margin: '0 auto', maxWidth: 820, color: 'var(--ivoire, #f5f1e8)' }}>
          Combien peut rapporter votre logement en location courte durée à Nevers&nbsp;?
        </h1>
        <p style={{ margin: '18px auto 0', maxWidth: 680, lineHeight: 1.6, opacity: 0.85, color: 'var(--ivoire, #f5f1e8)' }}>
          Full Conciergerie - Nevers gère une quarantaine de logements en location courte durée à Nevers
          et dans la Nièvre, avec plus de 1&nbsp;000 avis voyageurs. À partir de l&apos;emplacement, de la
          surface et du nombre de couchages, nous estimons gratuitement les revenus que votre appartement
          ou votre maison peut générer sur Airbnb et Booking, ainsi que les frais à prévoir (ménage, linge,
          accueil des voyageurs). Réponse personnalisée sous 48&nbsp;h, sans engagement.
        </p>
      </section>
      <EstimationFrame />
    </>
  );
}
