import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos services',
  description:
    "Découvrez tous nos services de conciergerie à Nevers : accueil voyageurs 7j/7, optimisation des tarifs, ménage hôtelier, photos pro, blanchisserie en interne, petites interventions.",
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Nos services — Full Conciergerie Nevers',
    description:
      'Une gestion complète de votre Airbnb à Nevers : accueil, optimisation, ménage, photos pro, linge.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
      {/* ──────── Hero ──────── */}
      <p className="font-cursive text-xl text-brand-600">Nos services</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-brand-900 sm:text-5xl">
        Vous touchez vos revenus.{' '}
        <span className="italic text-brand-700">
          Nous gérons tout le reste.
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-800/80">
        Une prestation 100% locale, adaptée à votre logement. De la première
        photo jusqu&apos;au dernier départ voyageur, chaque étape est prise en
        charge par notre équipe nivernaise.
      </p>

      {/* ──────── 3 promesses chiffrées ──────── */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <Stat
          number="+15 à 30%"
          label="de revenus en moyenne grâce à l'optimisation tarifaire"
        />
        <Stat
          number="4,9/5"
          label="note moyenne sur les commentaires plateformes"
        />
        <Stat
          number="< 2h"
          label="de délai de réponse aux voyageurs, 7j/7"
        />
      </div>

      {/* ──────── Services détaillés (réordonnés par impact) ──────── */}
      <div className="mt-20 space-y-12">
        <ServiceSection
          title="Accueil voyageurs"
          tagline="Vous ne décrochez plus jamais le téléphone."
          intro="Toute la communication voyageur, de la première question avant réservation jusqu'aux dernières instructions de départ. Nous parlons en votre nom, dans le ton de votre marque."
          items={[
            {
              benefit: 'Communication 7j/7 dans 4 langues',
              detail: 'Français, anglais, espagnol, allemand — sans plages horaires.',
            },
            {
              benefit: 'Instructions d\'arrivée 100% automatisées',
              detail: 'Envoyées la veille du check-in avec photos et code WiFi.',
            },
            {
              benefit: 'Check-in flexible',
              detail: 'Boîte à clés sécurisée ou remise en main propre selon vos préférences.',
            },
            {
              benefit: 'Suivi proactif du séjour',
              detail: 'Message de bienvenue, check à mi-séjour, gestion des imprévus.',
            },
          ]}
        />

        <ServiceSection
          title="Optimisation tarifaire"
          tagline="Les bons prix au bon moment, automatiquement."
          intro="Analyse du marché nivernais et ajustement des tarifs en continu : saisonnalité, événements locaux (Magny-Cours, Pèlerinage de Sainte-Bernadette, salons), jours fériés, dernières disponibilités."
          items={[
            {
              benefit: 'Tarification dynamique mise à jour quotidiennement',
              detail: 'Basée sur la demande réelle et la concurrence locale.',
            },
            {
              benefit: 'Calendrier des événements locaux intégré',
              detail: 'Vos prix montent automatiquement les jours forts.',
            },
            {
              benefit: 'Promotions dernière minute intelligentes',
              detail: 'Plutôt que de laisser un week-end vide, on baisse de 10-15%.',
            },
            {
              benefit: 'Rapport mensuel détaillé',
              detail: 'Revenus, taux d\'occupation, comparatif marché — en clair.',
            },
          ]}
        />

        <ServiceSection
          title="Ménage hôtelier"
          tagline="Comme dans un 4 étoiles. Vraiment."
          intro="Notre équipe interne et nos prestataires de confiance assurent un ménage irréprochable entre chaque voyageur. Standard hôtelier strict, vérifié par photo-rapport."
          items={[
            {
              benefit: 'Ménage complet en moins de 3h',
              detail: 'Sols, sanitaires, cuisine, dépoussiérage, aération.',
            },
            {
              benefit: 'Lits faits, linge propre, salle de bain dressée',
              detail: 'Le voyageur trouve un logement prêt-à-vivre.',
            },
            {
              benefit: 'Vérification des consommables à chaque passage',
              detail: 'Savon, papier, café, sel, huile — rien ne manque.',
            },
            {
              benefit: 'Photo-rapport après chaque mission',
              detail: 'Traçabilité totale, partage instantané avec vous.',
            },
          ]}
        />

        <ServiceSection
          title="Linge & blanchisserie en interne"
          tagline="Pas de sous-traitance. Coûts maîtrisés."
          intro="Service de blanchisserie géré intégralement dans nos locaux. Là où nos concurrents sous-traitent (et marges en cascade), nous internalisons. Vous payez le juste prix, la qualité reste constante."
          items={[
            {
              benefit: 'Récupération du linge sale après chaque départ',
              detail: 'Inclus dans le forfait ménage, sans surcoût caché.',
            },
            {
              benefit: 'Lavage à 60°C + repassage hôtelier',
              detail: 'Draps, serviettes, peignoirs — pliage uniforme.',
            },
            {
              benefit: 'Livraison du linge propre le lendemain',
              detail: 'Pas de stress pour le check-in suivant.',
            },
            {
              benefit: 'Gestion du stock à votre place',
              detail: 'On vous prévient quand il faut renouveler.',
            },
          ]}
        />

        <ServiceSection
          title="Photos professionnelles"
          tagline="Un beau logement bien photographié se loue 30% plus cher."
          intro="Shooting photo HDR + retouche professionnelle. Mise en valeur de chaque pièce, mise en ligne sur toutes vos plateformes. Mise à jour annuelle pour rester au goût du jour."
          items={[
            {
              benefit: 'Shooting complet (toutes les pièces)',
              detail: 'Reflex full-frame, trépied, éclairage si besoin.',
            },
            {
              benefit: 'Retouche professionnelle',
              detail: 'Balance des blancs, exposition, perspective — finition magazine.',
            },
            {
              benefit: 'Mise en ligne sur Airbnb, Booking & autres',
              detail: 'Avec descriptions optimisées pour la recherche.',
            },
            {
              benefit: 'Mise à jour annuelle incluse',
              detail: 'Vos photos restent fraîches, votre logement aussi.',
            },
          ]}
        />

        <ServiceSection
          title="Petites interventions"
          tagline="Un partenaire pour chaque besoin du logement."
          intro="Notre réseau local couvre tout ce qui peut arriver : un robinet qui fuit, un voyageur qui veut un panier petit-déjeuner, une haie à tailler avant le printemps. Vous nous appelez, on s'occupe du reste."
          items={[
            {
              benefit: 'Petits dépannages (plomberie, électricité, serrurerie)',
              detail: 'Intervention en moins de 24h sur les urgences.',
            },
            {
              benefit: 'Entretien des espaces verts',
              detail: 'Tonte, taille, arrosage — fréquence à votre choix.',
            },
            {
              benefit: 'Extras voyageurs sur demande',
              detail: 'Petits-déjeuners, paniers locaux, location de vélos.',
            },
            {
              benefit: 'Coordination de travaux plus lourds',
              detail: 'Devis multi-artisans, suivi de chantier en votre absence.',
            },
          ]}
        />
      </div>

      {/* ──────── Ce qui est toujours inclus ──────── */}
      <div className="mt-20 rounded-3xl border border-brand-200 bg-sand-50 p-8 sm:p-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
          Toujours inclus, sans surcoût
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Inclusion title="Assurance dégâts voyageurs" />
          <Inclusion title="Rapport mensuel détaillé" />
          <Inclusion title="Accès permanent au planning" />
          <Inclusion title="Aucun engagement de durée" />
        </div>
      </div>

      {/* ──────── CTA finale ──────── */}
      <div className="mt-16 rounded-3xl bg-brand-700 p-8 text-center text-sand-50 sm:p-12">
        <p className="font-cursive text-2xl text-sand-200">
          Une question ? Un logement à confier ?
        </p>
        <h2 className="mt-2 font-serif text-2xl font-medium sm:text-3xl">
          Devis gratuit, réponse sous 24h, sans engagement.
        </h2>
        <p className="mt-3 text-sand-100/85">
          Chaque logement est différent. Parlons-en autour d&apos;un café à
          Nevers, ou par téléphone si vous préférez.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-sand-50 px-6 py-3 text-sm font-medium text-brand-700 hover:bg-sand-100"
          >
            Demander un devis
          </Link>
          <a
            href="tel:+33376150229"
            className="rounded-full border-2 border-sand-50 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-sand-50 hover:text-brand-700"
          >
            03 76 15 02 29
          </a>
        </div>
      </div>
    </div>
  );
}

/* ───────── helpers ───────── */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-sand-50 p-6 text-center">
      <p className="font-serif text-3xl font-medium text-brand-700 sm:text-4xl">
        {number}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-brand-800/80">{label}</p>
    </div>
  );
}

function Inclusion({ title }: { title: string }) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs text-sand-50"
      >
        ✓
      </span>
      <span className="text-sm font-medium text-brand-900">{title}</span>
    </div>
  );
}

function ServiceSection({
  title,
  tagline,
  intro,
  items,
}: {
  title: string;
  tagline: string;
  intro: string;
  items: { benefit: string; detail: string }[];
}) {
  return (
    <section className="grid gap-8 border-b border-brand-100 pb-12 last:border-0 lg:grid-cols-3">
      {/* Colonne titre */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 font-cursive text-lg text-brand-600">{tagline}</p>
      </div>

      {/* Colonne contenu */}
      <div className="lg:col-span-2">
        <p className="text-lg leading-relaxed text-brand-800/85">{intro}</p>
        <ul className="mt-6 space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-700"
              />
              <div>
                <p className="font-medium text-brand-900">{item.benefit}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-brand-800/70">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
