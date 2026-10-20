import type { Metadata } from 'next';
import { Calculateur } from './calculateur';
import './bien-invendu.css';

export const metadata: Metadata = {
  title: 'Ton bien ne se vend pas ? Fais-le rapporter en attendant',
  description:
    "Bien en vente depuis des mois ? Calcule en deux minutes ce que la location courte durée pourrait couvrir de tes charges pendant la vente, et reçois le guide gratuit.",
  alternates: { canonical: '/bien-invendu' },
  openGraph: {
    title: 'Ton bien ne se vend pas ? Fais-le rapporter en attendant',
    description: 'Le calculateur et le guide gratuit pour faire rapporter un bien en vente.',
    url: '/bien-invendu',
  },
};

export default function BienInvenduPage() {
  return (
    <div className="bi">
      <div className="bi-wrap">
        <section className="bi-hero">
          <p className="bi-surtitre">Guide propriétaire</p>
          <h1>Ton bien ne se vend pas ? Fais-le rapporter en attendant</h1>
          <p className="bi-chapo">
            Chaque mois sans acheteur te coûte du crédit, des charges et des taxes. En deux minutes, vois ce que la location
            courte durée pourrait couvrir pendant la vente, avec tes propres chiffres.
          </p>
        </section>

        <Calculateur />

        <section className="bi-preuve">
          <div>
            <p className="bi-citation">
              « Des propriétaires n&apos;arrivaient pas à vendre leur maison de maître. On l&apos;a louée en courte durée pendant
              la mise en vente, et c&apos;est pendant cette période que l&apos;acquéreur s&apos;est présenté. »
            </p>
            <p className="bi-signe">Delil Torgursul, fondateur de Full Nevers Conciergerie</p>
          </div>
          <ul className="bi-chiffres">
            <li><b>40</b><span>logements gérés en location courte durée</span></li>
            <li><b>1 000+</b><span>avis voyageurs sur Airbnb</span></li>
            <li><b>0</b><span>abonnement, zéro engagement</span></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
