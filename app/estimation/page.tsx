import type { Metadata } from 'next';
import { EstimationFrame } from './estimation-frame';

export const metadata: Metadata = {
  title: 'Estimation gratuite de vos revenus locatifs',
  description:
    "Estimation gratuite et personnalisée des revenus de votre logement en location courte durée à Nevers et dans la Nièvre. Réponse sous 48 h par Full Conciergerie.",
  alternates: { canonical: '/estimation' },
  openGraph: {
    title: 'Estimation gratuite — Full Conciergerie Nevers',
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
  return <EstimationFrame />;
}
