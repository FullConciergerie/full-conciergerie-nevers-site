import type { Metadata } from 'next';
import { SeoLanding } from './SeoLanding';
import { villeBySlug, type Ville } from './villes';

/** Métadonnées d'une page ville /conciergerie-airbnb-<slug>. */
export function villeMetadata(slug: string): Metadata {
  const v = villeBySlug(slug)!;
  const path = `/conciergerie-airbnb-${v.slug}`;
  return {
    title: `Conciergerie Airbnb ${v.a}`,
    description: v.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `Conciergerie Airbnb ${v.a} — Full Conciergerie - Nevers`,
      description: v.metaDescription,
      url: path,
    },
  };
}

function lingeItem(v: Ville) {
  return v.proche
    ? { label: 'Ménage hôtelier et linge', detail: `Ménage après chaque départ et linge lavé dans nos propres laveries à Nevers, à ${v.trajet} ${v.de}.` }
    : { label: 'Ménage et linge repassé', detail: 'Ménage après chaque départ par un prestataire local sélectionné, linge repassé qualité blanchisserie professionnelle.' };
}

export function VillePage({ slug }: { slug: string }) {
  const v = villeBySlug(slug)!;
  const voisines = v.voisines
    .map((s) => villeBySlug(s))
    .filter((x): x is Ville => Boolean(x));

  return (
    <SeoLanding
      slug={`conciergerie-airbnb-${v.slug}`}
      breadcrumb={`Conciergerie Airbnb ${v.a}`}
      eyebrow={`Conciergerie Airbnb · ${v.nom} (${v.departement})`}
      h1={`Conciergerie Airbnb ${v.a} :`}
      h1Em={v.h1Em}
      intro={v.intro}
      serviceName={`Conciergerie Airbnb ${v.a}`}
      serviceDescription={`Gestion complète de locations courte durée Airbnb et Booking ${v.a} (${v.departement}) : annonces, calendrier, accueil des voyageurs, ménage, linge et suivi du logement.`}
      areaServed={[
        { '@type': 'City', name: v.nom },
        { '@type': 'AdministrativeArea', name: v.departement },
      ]}
      ctaPlace={v.a}
      sections={[
        { title: v.marche.titre, body: v.marche.texte, items: v.marche.points },
        {
          title: 'Ce que nous prenons en charge',
          body: `Vous gardez la main sur vos dates et vos revenus, nous nous occupons du quotidien de votre location ${v.a}, à ${v.trajet} de notre bureau de Nevers.`,
          items: [
            { label: 'Annonces Airbnb et Booking', detail: 'Photos, textes, prix ajustés à la saison, calendriers synchronisés pour éviter les doubles réservations.' },
            { label: 'Communication avec les voyageurs', detail: 'Réponses aux messages 7j/7 de 9 h à 23 h, instructions d’arrivée, livret d’accueil numérique.' },
            { label: 'Arrivées autonomes', detail: 'Boîte à clés sécurisée et consignes claires : les voyageurs arrivent à l’heure qui leur convient.' },
            lingeItem(v),
            { label: 'Suivi dans notre application', detail: 'Rapport photo horodaté après chaque ménage, réassort des consommables, signalement des petites réparations.' },
          ],
        },
        {
          title: 'Comment ça démarre',
          body: "Entre cinq et sept jours ouvrés entre la signature et la mise en ligne : le temps de visiter le logement, faire les photos, rédiger les annonces et installer le livret d'accueil.",
          items: [
            { label: '1. Estimation gratuite', detail: 'Vous nous décrivez votre logement, on vous répond sous 48 h avec une estimation de revenus.' },
            { label: '2. Visite et mise en place', detail: 'Photos, annonces, équipement, linge : on prépare tout.' },
            { label: '3. Premières réservations', detail: 'Vous suivez les réservations et les ménages, on s’occupe du reste.' },
          ],
        },
      ]}
      faq={[
        ...v.faqLocale,
        { q: `Combien coûte une conciergerie Airbnb ${v.a} ?`, a: "Nous nous rémunérons uniquement sur les nuitées effectivement réalisées, sans abonnement ni frais cachés : si votre logement ne se loue pas, nous ne facturons rien. Le pourcentage dépend de votre logement et vous est confirmé après la visite." },
        { q: 'Faut-il s’engager sur une durée ?', a: "Non. Il n'y a pas d'engagement minimum : vous pouvez arrêter à tout moment avec un préavis d'un mois." },
        { q: 'Puis-je continuer à utiliser mon logement ?', a: "Oui. Prévenez-nous par téléphone, WhatsApp ou email et nous bloquons vos dates sur les plateformes, sans préavis minimum ni pénalité." },
      ]}
      links={[
        { href: '/conciergerie-airbnb-nevers', label: 'Conciergerie Airbnb à Nevers' },
        ...voisines.map((n) => ({ href: `/conciergerie-airbnb-${n.slug}`, label: `Conciergerie Airbnb ${n.a}` })),
        { href: '/services', label: 'Tous nos services' },
      ]}
    />
  );
}
