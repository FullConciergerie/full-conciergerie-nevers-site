import Link from 'next/link';

export const metadata = {
  title: 'Nos services — Full Conciergerie Nevers',
  description:
    "Découvrez tous nos services de conciergerie : ménage, accueil voyageurs, optimisation des tarifs, photos pro, linge, petites interventions.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
      <p className="font-cursive text-xl text-brand-600">Nos services</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-brand-900 sm:text-5xl">
        Des services Full Options.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-brand-800/80">
        Notre prestation s&apos;adapte à votre logement et à vos besoins. Que
        vous cherchiez une gestion 100% déléguée ou un coup de main ponctuel,
        nous avons la formule qui vous convient.
      </p>

      <div className="mt-14 space-y-12">
        <ServiceSection
          title="Ménage professionnel"
          intro="Une équipe de prestataires expérimentés assure le ménage entre chaque voyageur. Standard hôtelier : draps changés, salle de bain impeccable, cuisine récurée, sols nickel."
          items={[
            'Ménage complet entre chaque réservation',
            'Préparation du linge (lits faits, serviettes pliées)',
            'Vérification des consommables (savon, papier, café)',
            'Photo-rapport après chaque mission pour traçabilité',
          ]}
        />

        <ServiceSection
          title="Accueil voyageurs"
          intro="Nous gérons toute la communication avec vos voyageurs : avant, pendant, après. Vous ne décrochez plus jamais le téléphone."
          items={[
            'Réponse 7j/7 aux questions des voyageurs',
            'Instructions d\'arrivée envoyées automatiquement la veille',
            'Boîte à clés ou remise en main propre selon le logement',
            'Suivi du séjour et gestion des éventuels imprévus',
          ]}
        />

        <ServiceSection
          title="Optimisation des tarifs"
          intro="Analyse de la concurrence locale et ajustement des prix selon la saison, les événements, et la demande. Objectif : maximiser vos revenus sans sacrifier le taux de remplissage."
          items={[
            'Étude tarifaire du marché nivernais',
            'Ajustement dynamique des tarifs selon la saison',
            'Gestion des promotions de dernière minute',
            'Rapport mensuel de revenus',
          ]}
        />

        <ServiceSection
          title="Photos professionnelles"
          intro="Un logement bien présenté se loue plus souvent et plus cher. Nous prenons des photos haute qualité, retouchées avec soin, qui mettent en valeur ce qui fait la signature de votre bien."
          items={[
            'Shooting photo complet (toutes les pièces)',
            'Retouche professionnelle (lumière, couleurs)',
            'Mise en ligne sur Airbnb, Booking, et autres plateformes',
            'Mise à jour annuelle ou sur demande',
          ]}
        />

        <ServiceSection
          title="Linge & blanchisserie"
          intro="Service de blanchisserie géré intégralement en interne pour maîtriser les coûts et garantir une qualité hôtelière constante. Le linge tourne, vous n'avez rien à faire."
          items={[
            'Récupération du linge sale après chaque départ',
            'Lavage et repassage à la qualité hôtelière',
            'Livraison du linge propre le lendemain',
            'Gestion de stock pour ne jamais être en rupture',
          ]}
        />

        <ServiceSection
          title="Petites interventions"
          intro="Espaces verts, dépannage électrique ou plomberie, livraison d'extras voyageurs (petits-déjeuners, paniers gourmands, location de vélos)… Notre réseau local s'occupe de tout."
          items={[
            'Entretien des espaces verts (tonte, taille)',
            'Petits dépannages (ampoule, robinet qui fuit, etc.)',
            'Service de petits-déjeuners et extras voyageurs',
            'Coordination avec des artisans pour les travaux plus lourds',
          ]}
        />
      </div>

      <div className="mt-16 rounded-3xl border border-brand-200 bg-sand-100 p-8 text-center sm:p-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
          Vous voulez en savoir plus ?
        </h2>
        <p className="mt-3 text-brand-800/80">
          Chaque logement est différent. Parlons ensemble de votre projet pour
          construire la prestation qui vous correspond.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-brand-600"
        >
          Demander un devis gratuit
        </Link>
      </div>
    </div>
  );
}

function ServiceSection({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <section className="grid gap-6 border-b border-brand-100 pb-12 last:border-0 lg:grid-cols-3">
      <div>
        <h2 className="font-serif text-2xl font-medium text-brand-900">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-2">
        <p className="text-lg leading-relaxed text-brand-800/85">{intro}</p>
        <ul className="mt-5 space-y-2 text-brand-800/85">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 text-brand-600">
                ✦
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
