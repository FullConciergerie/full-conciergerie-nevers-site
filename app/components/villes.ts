/**
 * Villes autour de Nevers (environ 1 h) ayant chacune leur page
 * /conciergerie-airbnb-<slug>. Chaque fiche porte un contenu propre à la ville
 * (marché, voyageurs, atouts) : Google pénalise les pages où seul le nom change.
 *
 * `proche` = moins de 30 min de Nevers : linge lavé dans nos laveries.
 * Au-delà : linge repassé, qualité blanchisserie professionnelle (sans détail
 * sur l'organisation logistique).
 */
export type Ville = {
  slug: string;
  nom: string;
  /** « à La Charité-sur-Loire », « au lac des Settons » */
  a: string;
  /** « de La Charité-sur-Loire », « du lac des Settons » */
  de: string;
  departement: string;
  trajet: string;
  proche: boolean;
  metaDescription: string;
  h1Em: string;
  intro: string;
  marche: { titre: string; texte: string; points: { label: string; detail: string }[] };
  faqLocale: { q: string; a: string }[];
  voisines: string[];
};

export const villes: Ville[] = [
  {
    slug: 'la-charite-sur-loire',
    nom: 'La Charité-sur-Loire',
    a: 'à La Charité-sur-Loire',
    de: 'de La Charité-sur-Loire',
    departement: 'Nièvre',
    trajet: 'environ 25 minutes',
    proche: true,
    metaDescription:
      "Conciergerie Airbnb à La Charité-sur-Loire : annonces, accueil des voyageurs, ménage et linge lavé dans nos laveries à Nevers. Équipe locale, sans engagement.",
    h1Em: 'votre location entre de bonnes mains.',
    intro:
      "Ville du livre, prieuré inscrit au patrimoine mondial au titre des chemins de Saint-Jacques, pont de pierre sur la Loire : La Charité-sur-Loire attire des visiteurs toute l'année. Full Conciergerie - Nevers gère votre location courte durée à 25 minutes de son bureau, avec la même équipe et le même linge que pour nos logements nivernais.",
    marche: {
      titre: 'Qui loue à La Charité-sur-Loire',
      texte:
        "La clientèle est variée : touristes culturels venus pour le prieuré et les bouquinistes, cyclistes de La Loire à Vélo qui font étape pour une ou deux nuits, pèlerins de Compostelle, familles en week-end. Une demande régulière, avec des séjours courts qui demandent une rotation de ménage soignée.",
      points: [
        { label: 'Étapes vélo et pèlerins', detail: "Séjours d'une ou deux nuits : arrivées autonomes par boîte à clés et ménage entre chaque voyageur, même en semaine." },
        { label: 'Week-ends culturels', detail: 'Annonces qui mettent en avant le centre historique, la Loire et le prieuré pour capter les réservations du vendredi et du samedi.' },
        { label: 'Linge de nos laveries', detail: 'La Charité est assez proche de Nevers pour que le linge soit lavé dans nos propres laveries, comme pour nos logements nivernais.' },
      ],
    },
    faqLocale: [
      { q: 'Intervenez-vous vraiment à La Charité-sur-Loire depuis Nevers ?', a: "Oui, la ville est à environ 25 minutes de notre bureau par l'autoroute. Le ménage, le linge et les interventions sont organisés comme à Nevers." },
      { q: "Un logement à La Charité se loue-t-il hors saison ?", a: "La saison vélo et les week-ends culturels portent l'été et les beaux jours ; l'hiver, la demande vient surtout des déplacements professionnels et des étapes sur l'axe Paris–Nevers. Un bon calendrier tarifaire lisse ces écarts." },
    ],
    voisines: ['pouilly-sur-loire', 'cosne-cours-sur-loire', 'sancerre'],
  },
  {
    slug: 'magny-cours',
    nom: 'Magny-Cours',
    a: 'à Magny-Cours',
    de: 'de Magny-Cours',
    departement: 'Nièvre',
    trajet: 'environ 20 minutes',
    proche: true,
    metaDescription:
      "Conciergerie Airbnb à Magny-Cours, près du circuit : gestion des pics de réservations, accueil des équipes et spectateurs, ménage et linge lavé dans nos laveries.",
    h1Em: 'tirez parti des week-ends de course.',
    intro:
      "Le Circuit de Nevers Magny-Cours remplit les hébergements des environs à chaque grand rendez-vous : courses, essais, journées de pilotage, salons. Full Conciergerie - Nevers gère votre logement à 20 minutes de son bureau pour que vous profitiez de ces pics sans vous épuiser à enchaîner les rotations.",
    marche: {
      titre: 'Une demande rythmée par le circuit',
      texte:
        "Pilotes, mécaniciens, équipes techniques, spectateurs, entreprises en séminaire : les voyageurs de Magny-Cours réservent en groupe, souvent plusieurs nuits autour d'un événement. Le reste de l'année, la technopole et les déplacements professionnels assurent une demande de fond.",
      points: [
        { label: 'Tarifs ajustés aux événements', detail: 'Le prix des nuits suit le calendrier du circuit : plus haut les week-ends de course, ajusté le reste du temps pour garder un bon taux de remplissage.' },
        { label: 'Groupes et équipes', detail: 'Arrivées tardives et départs matinaux : boîte à clés sécurisée et consignes claires dans le livret d’accueil numérique.' },
        { label: 'Rotations rapprochées', detail: 'Ménage et linge enchaînés entre deux équipes, avec le linge lavé dans nos laveries à Nevers.' },
      ],
    },
    faqLocale: [
      { q: 'Peut-on louer uniquement pendant les événements du circuit ?', a: "Oui. Vous choisissez les dates ouvertes à la location ; nous bloquons le reste du calendrier sur les plateformes. Beaucoup de propriétaires ouvrent les grands week-ends et gardent le logement le reste du temps." },
      { q: 'Gérez-vous les groupes de plusieurs voyageurs ?', a: "Oui. Les équipes et spectateurs voyagent souvent à plusieurs : nous précisons dans l'annonce le nombre de couchages, les règles de la maison et le stationnement disponible." },
    ],
    voisines: ['decize', 'la-charite-sur-loire', 'moulins'],
  },
  {
    slug: 'decize',
    nom: 'Decize',
    a: 'à Decize',
    de: 'de Decize',
    departement: 'Nièvre',
    trajet: 'environ 35 minutes',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Decize : annonces, accueil des voyageurs, ménage par des prestataires locaux suivis, linge repassé qualité blanchisserie professionnelle.",
    h1Em: 'entre Loire et canal du Nivernais.',
    intro:
      "Bâtie sur une île de la Loire, Decize est le point de départ du canal du Nivernais. Plaisanciers, cyclistes, familles et salariés en déplacement y cherchent un logement pour quelques nuits. Full Conciergerie - Nevers prend en charge votre location, de l'annonce au rapport de ménage.",
    marche: {
      titre: 'Les voyageurs de Decize',
      texte:
        "Le tourisme fluvial et les itinéraires vélo le long de la Loire et du canal amènent une clientèle d'avril à octobre. Hors saison, les déplacements professionnels vers Decize et le sud de la Nièvre prennent le relais.",
      points: [
        { label: 'Tourisme fluvial et vélo', detail: 'Annonces pensées pour les plaisanciers et cyclistes : local pour les vélos, proximité du port, arrivée autonome.' },
        { label: 'Salariés en mission', detail: 'Séjours de plusieurs nuits en semaine : logements équipés pour travailler, wifi fiable, tarifs dégressifs.' },
        { label: 'Ménage suivi à distance', detail: 'Un prestataire local fait le ménage, et vous recevez le rapport photo horodaté après chaque passage.' },
      ],
    },
    faqLocale: [
      { q: 'Qui fait le ménage à Decize ?', a: "Un prestataire local sélectionné par nos soins. Chaque passage est tracé dans notre application avec photos, et notre équipe à Nevers intervient en cas de besoin." },
      { q: 'La saison est-elle courte à Decize ?', a: "La haute saison suit le tourisme fluvial, d'avril à octobre. Le reste de l'année, les séjours professionnels assurent une partie du remplissage." },
    ],
    voisines: ['magny-cours', 'saint-honore-les-bains', 'bourbon-lancy'],
  },
  {
    slug: 'pouilly-sur-loire',
    nom: 'Pouilly-sur-Loire',
    a: 'à Pouilly-sur-Loire',
    de: 'de Pouilly-sur-Loire',
    departement: 'Nièvre',
    trajet: 'environ 40 minutes',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Pouilly-sur-Loire : location courte durée au cœur du vignoble du Pouilly-Fumé, accueil, ménage suivi, linge repassé qualité professionnelle.",
    h1Em: 'au cœur du vignoble du Pouilly-Fumé.',
    intro:
      "Pouilly-sur-Loire attire les amateurs de vin, les cyclistes de La Loire à Vélo et les visiteurs du vignoble voisin de Sancerre. Une clientèle exigeante, qui réserve des logements soignés pour un week-end ou quelques jours. Full Conciergerie - Nevers gère votre location pour qu'elle soit à la hauteur.",
    marche: {
      titre: 'Une clientèle œnotouristique',
      texte:
        "Visites de caves, dégustations, balades le long de la Loire : les voyageurs de Pouilly viennent souvent en couple ou entre amis, de Paris ou de l'étranger, et attendent un accueil irréprochable. Peu de logements de la commune sont gérés professionnellement.",
      points: [
        { label: 'Annonces haut de gamme', detail: 'Photos et textes qui valorisent le cadre, la vue, la proximité des domaines viticoles.' },
        { label: "Livret d'accueil complet", detail: 'Caves, restaurants, itinéraires vélo et bons plans locaux, accessibles depuis le téléphone du voyageur.' },
        { label: 'Linge repassé', detail: 'Draps et serviettes repassés, qualité blanchisserie professionnelle, pour une impression d’hôtel dès l’arrivée.' },
      ],
    },
    faqLocale: [
      { q: 'Quelle clientèle pour un logement à Pouilly-sur-Loire ?', a: "Surtout des amateurs de vin et des cyclistes, en couple ou entre amis, sur des séjours de deux à quatre nuits. Ils sont attentifs à la propreté, au linge et aux recommandations locales." },
      { q: 'Proposez-vous des services aux voyageurs ?', a: "Oui. Le livret d'accueil numérique permet aux voyageurs de commander des services de partenaires locaux (petit-déjeuner, location de vélos, véhicule), et vous touchez une part sur chaque service vendu." },
    ],
    voisines: ['sancerre', 'la-charite-sur-loire', 'cosne-cours-sur-loire'],
  },
  {
    slug: 'cosne-cours-sur-loire',
    nom: 'Cosne-Cours-sur-Loire',
    a: 'à Cosne-Cours-sur-Loire',
    de: 'de Cosne-Cours-sur-Loire',
    departement: 'Nièvre',
    trajet: 'environ 45 minutes',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Cosne-Cours-sur-Loire : gestion complète de votre location, ménage suivi par photos, linge repassé qualité blanchisserie professionnelle.",
    h1Em: 'sur la Loire, entre Sancerre et Pouilly.',
    intro:
      "Sous-préfecture de la Nièvre sur l'axe Paris–Nevers, Cosne-Cours-sur-Loire profite à la fois des déplacements professionnels et du tourisme du vignoble, Sancerre et Pouilly étant à quelques minutes. Full Conciergerie - Nevers gère votre location sans que vous ayez à vous déplacer.",
    marche: {
      titre: 'Une double demande, pro et touristique',
      texte:
        "En semaine, des salariés et techniciens en mission cherchent un logement pratique et équipé. Le week-end et l'été, les visiteurs du vignoble et les cyclistes de La Loire à Vélo prennent le relais. Ce mélange permet un remplissage régulier toute l'année.",
      points: [
        { label: 'Séjours professionnels', detail: 'Facture, wifi fiable, espace de travail et arrivée autonome : ce que recherchent les voyageurs d’affaires.' },
        { label: 'Week-ends vignoble', detail: 'Annonces qui mettent en avant la proximité de Sancerre et Pouilly pour capter la clientèle touristique.' },
        { label: 'Suivi à distance', detail: 'Chaque ménage est tracé avec photos dans notre application : vous voyez ce qui a été fait, et quand.' },
      ],
    },
    faqLocale: [
      { q: 'Est-ce rentable de louer en courte durée à Cosne ?', a: "La demande professionnelle en semaine et touristique le week-end permet de bons taux de remplissage. Demandez une estimation gratuite : nous vous répondons sous 48 h avec des chiffres adaptés à votre logement." },
      { q: 'Qui intervient en cas de problème ?', a: "Notre équipe est joignable 7j/7 de 9 h à 23 h. Selon le problème, nous guidons le voyageur à distance ou envoyons un prestataire local." },
    ],
    voisines: ['pouilly-sur-loire', 'sancerre', 'la-charite-sur-loire'],
  },
  {
    slug: 'sancerre',
    nom: 'Sancerre',
    a: 'à Sancerre',
    de: 'de Sancerre',
    departement: 'Cher',
    trajet: 'environ 50 minutes',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Sancerre : location courte durée pour une clientèle œnotouristique exigeante, accueil soigné, ménage suivi, linge repassé qualité professionnelle.",
    h1Em: 'une location à la hauteur du vignoble.',
    intro:
      "Village perché au-dessus de la Loire, appellation connue dans le monde entier, crottin de Chavignol : Sancerre attire une clientèle française et internationale qui vient pour le vin et la gastronomie. Full Conciergerie - Nevers gère votre location pour offrir un accueil digne de cette réputation.",
    marche: {
      titre: 'Une clientèle qui attend le meilleur',
      texte:
        "Les visiteurs de Sancerre réservent tôt, paient un bon prix et laissent des avis détaillés. La qualité de l'accueil, du linge et des recommandations locales fait la différence entre un logement moyen et un logement qui se remplit en priorité.",
      points: [
        { label: 'Positionnement premium', detail: 'Annonces, photos et tarifs pensés pour une clientèle aisée, avec des prix qui suivent la saison des vendanges et des fêtes du vin.' },
        { label: 'Voyageurs étrangers', detail: 'Échanges et livret d’accueil disponibles en plusieurs langues.' },
        { label: 'Linge repassé', detail: 'Linge repassé, qualité blanchisserie professionnelle, pour un niveau hôtelier.' },
      ],
    },
    faqLocale: [
      { q: 'Gérez-vous des logements haut de gamme à Sancerre ?', a: "Oui, c'est le cœur de la demande à Sancerre. Nous adaptons l'annonce, l'accueil et les services proposés au standing de votre logement." },
      { q: 'Les voyageurs peuvent-ils réserver des services sur place ?', a: "Oui, depuis le livret d'accueil numérique : petit-déjeuner, location de vélos ou de véhicule, auprès de partenaires locaux. Vous percevez une part sur chaque service vendu." },
    ],
    voisines: ['pouilly-sur-loire', 'cosne-cours-sur-loire', 'bourges'],
  },
  {
    slug: 'moulins',
    nom: 'Moulins',
    a: 'à Moulins',
    de: 'de Moulins',
    departement: 'Allier',
    trajet: 'environ 50 minutes',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Moulins (Allier) : gestion complète de votre location courte durée, ménage suivi par photos, linge repassé qualité blanchisserie professionnelle.",
    h1Em: 'une préfecture qui voyage toute l’année.',
    intro:
      "Préfecture de l'Allier, Moulins combine une demande professionnelle stable et un vrai attrait culturel : Centre national du costume de scène, cathédrale et son célèbre triptyque, centre historique. Full Conciergerie - Nevers gère votre location courte durée à moins d'une heure de son bureau.",
    marche: {
      titre: 'Les voyageurs de Moulins',
      texte:
        "Administrations, hôpital, entreprises : Moulins reçoit chaque semaine des salariés en mission, des stagiaires et des intervenants. Les week-ends et les vacances, les visiteurs culturels et les familles complètent la demande.",
      points: [
        { label: 'Moyens séjours', detail: 'Missions de plusieurs semaines : tarifs dégressifs et logements équipés pour y vivre, pas seulement y dormir.' },
        { label: 'Visiteurs culturels', detail: 'Annonces qui mettent en avant le costume de scène, la cathédrale et le centre ancien.' },
        { label: 'Ménage suivi', detail: 'Prestataire local, rapport photo horodaté après chaque passage, réassort des consommables.' },
      ],
    },
    faqLocale: [
      { q: 'Gérez-vous les locations de plusieurs semaines à Moulins ?', a: "Oui. Les missions professionnelles longues sont fréquentes à Moulins : nous ajustons les tarifs à la semaine ou au mois et adaptons la fréquence du ménage." },
      { q: "Moulins est dans l'Allier, est-ce un problème ?", a: "Non. La ville est à moins d'une heure de notre bureau à Nevers, et le suivi se fait dans notre application, avec les mêmes standards que pour nos logements nivernais." },
    ],
    voisines: ['magny-cours', 'bourbon-lancy', 'decize'],
  },
  {
    slug: 'saint-honore-les-bains',
    nom: 'Saint-Honoré-les-Bains',
    a: 'à Saint-Honoré-les-Bains',
    de: 'de Saint-Honoré-les-Bains',
    departement: 'Nièvre',
    trajet: 'environ 1 heure',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Saint-Honoré-les-Bains : location aux curistes pour trois semaines, accueil, ménage suivi, linge repassé qualité blanchisserie professionnelle.",
    h1Em: 'louez aux curistes, en toute sérénité.',
    intro:
      "Station thermale aux portes du Morvan, Saint-Honoré-les-Bains accueille chaque saison des curistes pour des séjours de trois semaines. Une clientèle fidèle, calme et prévisible. Full Conciergerie - Nevers gère votre logement pour ces séjours comme pour les vacanciers du Morvan.",
    marche: {
      titre: 'Le moyen séjour thermal',
      texte:
        "Une cure dure en général trois semaines : moins de rotations, des voyageurs soigneux qui reviennent souvent d'une année sur l'autre. Hors saison thermale, les randonneurs et familles du Morvan prennent le relais.",
      points: [
        { label: 'Séjours de trois semaines', detail: 'Tarifs adaptés aux cures, ménage et change du linge planifiés pendant le séjour si vous le souhaitez.' },
        { label: 'Curistes fidèles', detail: 'Nous gardons le contact avec les voyageurs satisfaits pour faciliter les réservations des années suivantes.' },
        { label: 'Linge repassé', detail: 'Linge repassé, qualité blanchisserie professionnelle, changé selon la durée du séjour.' },
      ],
    },
    faqLocale: [
      { q: 'Peut-on louer à des curistes sur Airbnb ?', a: "Oui. Beaucoup de curistes réservent désormais sur Airbnb et Booking. Nous fixons des tarifs à la semaine pour la durée d'une cure et mettons en avant la proximité des thermes." },
      { q: 'Faut-il faire le ménage pendant le séjour ?', a: "C'est au choix. Pour une cure de trois semaines, un passage intermédiaire avec change du linge est souvent apprécié ; nous l'organisons et vous le facturons de façon transparente." },
    ],
    voisines: ['lac-des-settons', 'decize', 'bourbon-lancy'],
  },
  {
    slug: 'bourges',
    nom: 'Bourges',
    a: 'à Bourges',
    de: 'de Bourges',
    departement: 'Cher',
    trajet: 'environ 1 heure',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Bourges : gestion complète de votre location courte durée, demande pro et touristique, ménage suivi par photos, linge repassé qualité professionnelle.",
    h1Em: 'un grand marché, une gestion de proximité.',
    intro:
      "Cathédrale inscrite au patrimoine mondial, marais, palais Jacques-Cœur, Printemps de Bourges : la préfecture du Cher attire des visiteurs toute l'année, et ses entreprises font venir de nombreux salariés en mission. Full Conciergerie - Nevers gère votre location pour en tirer le meilleur.",
    marche: {
      titre: 'Un marché à double moteur',
      texte:
        "Bourges est le plus grand marché autour de Nevers : industrie, défense, administrations et enseignement supérieur génèrent une forte demande en semaine, tandis que le patrimoine et les festivals remplissent les week-ends et le printemps.",
      points: [
        { label: 'Voyageurs d’affaires', detail: 'Séjours en semaine et missions longues : arrivée autonome, wifi fiable, facture sur demande.' },
        { label: 'Pics de festival', detail: 'Tarifs ajustés pendant le Printemps de Bourges et les grands événements de la ville.' },
        { label: 'Standards constants', detail: 'Ménage par des prestataires locaux, rapport photo horodaté, linge repassé qualité blanchisserie professionnelle.' },
      ],
    },
    faqLocale: [
      { q: 'Pourquoi une conciergerie de Nevers pour un logement à Bourges ?', a: "Parce que notre organisation repose sur des prestataires locaux suivis dans notre application et une équipe joignable 7j/7. Vous bénéficiez de l'expérience d'une quarantaine de logements gérés et de plus de 1 000 avis voyageurs sur Airbnb." },
      { q: 'La concurrence est-elle forte à Bourges ?', a: "Plus qu'à Nevers, oui. C'est pourquoi l'annonce, les photos, le prix et la réactivité aux messages comptent : ce sont eux qui font remonter un logement dans les résultats." },
    ],
    voisines: ['saint-amand-montrond', 'sancerre', 'moulins'],
  },
  {
    slug: 'saint-amand-montrond',
    nom: 'Saint-Amand-Montrond',
    a: 'à Saint-Amand-Montrond',
    de: 'de Saint-Amand-Montrond',
    departement: 'Cher',
    trajet: 'environ 1 heure',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Saint-Amand-Montrond : gestion de votre location courte durée, accueil autonome, ménage suivi, linge repassé qualité blanchisserie professionnelle.",
    h1Em: 'au sud du Berry, près de Noirlac.',
    intro:
      "Cité de l'or, canal de Berry, abbaye de Noirlac à quelques minutes : Saint-Amand-Montrond est une étape appréciée du sud du Cher, avec encore peu de logements gérés professionnellement. Full Conciergerie - Nevers prend en charge votre location de bout en bout.",
    marche: {
      titre: 'Un marché encore peu travaillé',
      texte:
        "Touristes en route vers le sud, visiteurs de l'abbaye de Noirlac et des châteaux du Berry, salariés en mission : la demande existe, mais l'offre bien tenue reste rare. Un logement soigné et bien présenté s'y démarque vite.",
      points: [
        { label: 'Se démarquer facilement', detail: 'Annonce optimisée et avis soignés : dans un marché peu concurrentiel, un logement bien géré prend rapidement la tête des résultats.' },
        { label: 'Étapes et circuits', detail: 'Mise en avant de Noirlac, du canal de Berry et des châteaux de la route Jacques-Cœur.' },
        { label: 'Gestion à distance', detail: 'Prestataire local pour le ménage, suivi photo dans notre application, équipe joignable 7j/7.' },
      ],
    },
    faqLocale: [
      { q: 'Y a-t-il de la demande à Saint-Amand-Montrond ?', a: "Oui, portée par le tourisme du Berry et les déplacements professionnels. L'offre bien gérée étant rare, un logement bien présenté se remplit plus facilement qu'en grande ville." },
      { q: 'Comment se passe le ménage si vous êtes basés à Nevers ?', a: "Un prestataire local fait le ménage après chaque départ. Vous recevez un rapport photo horodaté, et notre équipe suit chaque mission dans l'application." },
    ],
    voisines: ['bourges', 'moulins', 'sancerre'],
  },
  {
    slug: 'clamecy',
    nom: 'Clamecy',
    a: 'à Clamecy',
    de: 'de Clamecy',
    departement: 'Nièvre',
    trajet: 'environ 1 h 10',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Clamecy : location courte durée sur le canal du Nivernais, accueil autonome, ménage suivi, linge repassé qualité blanchisserie professionnelle.",
    h1Em: 'au fil du canal du Nivernais.',
    intro:
      "Ancienne capitale du flottage du bois, Clamecy s'étire le long de l'Yonne et du canal du Nivernais, entre collégiale et ruelles médiévales. Plaisanciers, cyclistes et visiteurs en route vers Vézelay y font étape. Full Conciergerie - Nevers gère votre location pour les accueillir.",
    marche: {
      titre: 'Une étape sur le canal',
      texte:
        "La saison est portée par le tourisme fluvial et le vélo le long du canal, d'avril à octobre, et par la proximité de Vézelay. Les voyageurs restent souvent une ou deux nuits avant de reprendre la route ou le bateau.",
      points: [
        { label: 'Courts séjours', detail: 'Arrivée autonome par boîte à clés et ménage entre chaque voyageur, y compris pour une seule nuit.' },
        { label: 'Clientèle fluviale et vélo', detail: 'Annonces qui mettent en avant le canal, le stationnement des vélos et les commerces proches.' },
        { label: 'Suivi photo', detail: 'Chaque ménage est tracé dans notre application avec photos horodatées.' },
      ],
    },
    faqLocale: [
      { q: 'Un logement à Clamecy peut-il se louer à la nuit ?', a: "Oui, c'est même le cas le plus fréquent avec les plaisanciers et cyclistes. Nous organisons le ménage pour enchaîner les courts séjours." },
      { q: 'Clamecy est loin de Nevers, comment intervenez-vous ?', a: "Avec des prestataires locaux sélectionnés et suivis dans notre application, et une équipe joignable 7j/7 de 9 h à 23 h pour les voyageurs." },
    ],
    voisines: ['vezelay', 'lac-des-settons', 'cosne-cours-sur-loire'],
  },
  {
    slug: 'bourbon-lancy',
    nom: 'Bourbon-Lancy',
    a: 'à Bourbon-Lancy',
    de: 'de Bourbon-Lancy',
    departement: 'Saône-et-Loire',
    trajet: 'environ 1 h 15',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Bourbon-Lancy : location aux curistes et vacanciers, séjours de trois semaines, ménage suivi, linge repassé qualité blanchisserie professionnelle.",
    h1Em: 'une station thermale sur la Loire.',
    intro:
      "Station thermale dominant la Loire, avec sa vieille ville et son plan d'eau, Bourbon-Lancy reçoit chaque année des curistes pour trois semaines et des vacanciers l'été. Full Conciergerie - Nevers gère votre location pour ces deux clientèles.",
    marche: {
      titre: 'Curistes et vacanciers',
      texte:
        "La saison thermale apporte des séjours longs et réguliers, avec des voyageurs soigneux. L'été, les familles et les cyclistes de la Loire complètent le calendrier. Un logement de plain-pied, calme et bien équipé est particulièrement recherché.",
      points: [
        { label: 'Tarifs de cure', detail: 'Prix à la semaine pour trois semaines de cure, et tarifs à la nuit pour l’été.' },
        { label: 'Accueil adapté', detail: 'Consignes claires, accès facile, livret d’accueil lisible sur téléphone avec les commerces et services proches.' },
        { label: 'Linge repassé', detail: 'Linge repassé, qualité blanchisserie professionnelle, changé selon la durée du séjour.' },
      ],
    },
    faqLocale: [
      { q: 'Les curistes réservent-ils sur Airbnb ?', a: "De plus en plus, oui, en plus des locations classiques. Nous rendons votre logement visible sur Airbnb et Booking avec des tarifs adaptés à la durée d'une cure." },
      { q: "Bourbon-Lancy est en Saône-et-Loire, est-ce couvert ?", a: "Oui. La ville est à environ 1 h 15 de Nevers ; le ménage est confié à des prestataires locaux suivis dans notre application." },
    ],
    voisines: ['saint-honore-les-bains', 'decize', 'moulins'],
  },
  {
    slug: 'lac-des-settons',
    nom: 'Lac des Settons',
    a: 'au lac des Settons',
    de: 'du lac des Settons',
    departement: 'Nièvre',
    trajet: 'environ 1 h 20',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb au lac des Settons et dans le Morvan : gestion de votre gîte ou maison de vacances, ménage suivi, linge repassé qualité blanchisserie professionnelle.",
    h1Em: 'votre maison du Morvan, sans contrainte.',
    intro:
      "Au cœur du Parc naturel régional du Morvan, le lac des Settons attire baigneurs, randonneurs, pêcheurs et familles, surtout l'été. Maisons de vacances et gîtes y sont très demandés. Full Conciergerie - Nevers gère votre logement même quand vous êtes loin.",
    marche: {
      titre: 'Une forte saison estivale',
      texte:
        "Juillet et août se réservent longtemps à l'avance, souvent à la semaine. Les ponts de printemps, l'automne et les fêtes de fin d'année offrent des séjours plus courts. Le bon prix au bon moment fait une grande différence sur l'année.",
      points: [
        { label: 'Locations à la semaine', detail: 'Calendrier et tarifs pensés pour l’été (arrivées le samedi, séjours de 7 nuits), plus souples le reste de l’année.' },
        { label: 'Maisons et grands logements', detail: 'Accueil des familles et groupes : couchages bien décrits, équipements, règles de la maison.' },
        { label: 'Suivi à distance', detail: 'Ménage par un prestataire local, rapport photo horodaté, linge repassé qualité blanchisserie professionnelle.' },
      ],
    },
    faqLocale: [
      { q: 'Gérez-vous les maisons secondaires dans le Morvan ?', a: "Oui. Beaucoup de propriétaires y ont une maison de famille qu'ils occupent quelques semaines par an : nous la louons le reste du temps et bloquons vos dates à la demande." },
      { q: "Que se passe-t-il hors saison ?", a: "La demande baisse mais ne s'arrête pas : week-ends nature, randonnée, fêtes de fin d'année. Nous ajustons les prix pour garder des réservations." },
    ],
    voisines: ['saint-honore-les-bains', 'vezelay', 'clamecy'],
  },
  {
    slug: 'vezelay',
    nom: 'Vézelay',
    a: 'à Vézelay',
    de: 'de Vézelay',
    departement: 'Yonne',
    trajet: 'environ 1 h 20',
    proche: false,
    metaDescription:
      "Conciergerie Airbnb à Vézelay : location courte durée pour pèlerins et visiteurs de la basilique, accueil autonome, ménage suivi, linge repassé qualité professionnelle.",
    h1Em: 'accueillir les visiteurs de la colline éternelle.',
    intro:
      "Basilique inscrite au patrimoine mondial, point de départ d'une voie vers Compostelle, vignoble et paysages du Morvan : Vézelay accueille des visiteurs du monde entier. Full Conciergerie - Nevers gère votre location pour leur offrir un accueil à la hauteur du lieu.",
    marche: {
      titre: 'Pèlerins, visiteurs et amateurs de patrimoine',
      texte:
        "La clientèle est internationale et répartie sur une grande partie de l'année : pèlerins au départ du chemin, touristes culturels, amateurs de randonnée et de vin. Les séjours sont souvent courts, ce qui demande un ménage réactif.",
      points: [
        { label: 'Voyageurs internationaux', detail: 'Échanges et livret d’accueil disponibles en plusieurs langues.' },
        { label: 'Courts séjours', detail: 'Arrivée autonome et ménage entre chaque voyageur, même pour une nuit.' },
        { label: 'Linge repassé', detail: 'Linge repassé, qualité blanchisserie professionnelle, pour une première impression soignée.' },
      ],
    },
    faqLocale: [
      { q: 'Vézelay est dans l’Yonne, intervenez-vous ?', a: "Oui. Le village est à environ 1 h 20 de Nevers ; le ménage est confié à des prestataires locaux suivis dans notre application, et notre équipe reste joignable 7j/7." },
      { q: 'Quelle saison à Vézelay ?', a: "Du printemps à l'automne pour l'essentiel, avec une clientèle de pèlerins et de visiteurs culturels qui étale la demande sur une bonne partie de l'année." },
    ],
    voisines: ['clamecy', 'lac-des-settons', 'saint-honore-les-bains'],
  },
];

export const villeBySlug = (slug: string) => villes.find((v) => v.slug === slug);
