import type { Metadata } from 'next';
import { SeoLanding } from '../components/SeoLanding';

export const metadata: Metadata = {
  title: 'Conciergerie Airbnb à Nevers : gestion complète de votre location',
  description:
    "Conciergerie Airbnb à Nevers et dans la Nièvre : annonces, accueil des voyageurs, ménage, linge lavé dans nos propres laveries. Une quarantaine de logements gérés, plus de 1 000 avis voyageurs.",
  alternates: { canonical: '/conciergerie-airbnb-nevers' },
  openGraph: {
    title: 'Conciergerie Airbnb à Nevers — Full Conciergerie - Nevers',
    description: 'Confiez votre Airbnb à une équipe locale : accueil, ménage, linge, annonces. Estimation gratuite.',
    url: '/conciergerie-airbnb-nevers',
  },
};

export default function Page() {
  return (
    <SeoLanding
      slug="conciergerie-airbnb-nevers"
      breadcrumb="Conciergerie Airbnb à Nevers"
      eyebrow="Conciergerie Airbnb · Nevers & Nièvre"
      h1="Conciergerie Airbnb à Nevers :"
      h1Em="on gère, vous encaissez."
      intro="Full Conciergerie - Nevers s'occupe de votre location courte durée sur Airbnb et Booking, de l'annonce au départ du dernier voyageur. Une équipe basée à Nevers, une quarantaine de logements gérés, plus de 1 000 avis voyageurs, et deux laveries à nous pour que le linge soit toujours impeccable."
      serviceName="Conciergerie Airbnb à Nevers"
      serviceDescription="Gestion complète de locations courte durée Airbnb et Booking à Nevers et dans la Nièvre : annonces, calendrier, accueil des voyageurs, ménage, linge et suivi du logement."
      sections={[
        {
          title: 'Ce que fait une conciergerie Airbnb pour vous',
          body: "Louer son logement sur Airbnb à Nevers rapporte, mais demande une présence quotidienne : répondre aux voyageurs, organiser les arrivées, faire le ménage entre deux séjours, laver le linge, réagir en cas de problème. Notre conciergerie prend tout en charge, vous gardez la main sur vos dates et vos revenus.",
          items: [
            { label: 'Création et optimisation de vos annonces', detail: 'Photos, textes, publication sur Airbnb et Booking, calendriers synchronisés pour éviter les doubles réservations.' },
            { label: 'Communication avec les voyageurs', detail: 'Réponses aux messages, instructions d’arrivée, livret d’accueil numérique envoyé avant le séjour.' },
            { label: 'Accueil et départs', detail: 'Accueil possible jusqu’à 23 h, puis boîte à clés sécurisée avec code temporaire pour les arrivées tardives.' },
            { label: 'Ménage hôtelier et linge', detail: 'Ménage après chaque départ et linge lavé dans nos propres laveries à Nevers, sans dépendre d’une blanchisserie extérieure.' },
            { label: 'Suivi du logement', detail: 'État des lieux photo après chaque départ, réassort des consommables, petites interventions.' },
          ],
        },
        {
          title: 'Pourquoi une conciergerie locale à Nevers',
          body: "Nous ne sommes pas une plateforme nationale : nos équipes sont à Nevers, connaissent les quartiers, les copropriétés et les voyageurs qui viennent dans la Nièvre (déplacements professionnels, Circuit de Nevers Magny-Cours, familles, tourisme sur la Loire).",
          items: [
            { label: 'Une équipe sur place 7j/7', detail: 'Bureau au 23 faubourg de Lyon, joignable de 9 h à 23 h, tous les jours.' },
            { label: 'Nos propres laveries', detail: 'Café Laverie et Laverie Dupont lavent le linge de nos logements : qualité constante et pas de rupture en haute saison.' },
            { label: 'Une application de suivi', detail: 'Chaque mission (ménage, check-in, intervention) est tracée avec photos : vous voyez ce qui a été fait, et quand.' },
          ],
        },
        {
          title: 'Comment ça démarre',
          body: "Entre cinq et sept jours ouvrés entre la signature et la mise en ligne : le temps de visiter le logement, faire les photos, rédiger les annonces et installer le livret d'accueil.",
          items: [
            { label: '1. Estimation gratuite', detail: 'Vous nous décrivez votre logement, on vous répond sous 48 h avec une estimation de revenus.' },
            { label: '2. Visite et mise en place', detail: 'Photos, annonces, équipement, linge : on prépare tout.' },
            { label: '3. Premières réservations', detail: 'Vous suivez les réservations et les missions, on s’occupe du reste.' },
          ],
        },
      ]}
      faq={[
        { q: 'Combien coûte une conciergerie Airbnb à Nevers ?', a: "Nous nous rémunérons uniquement sur les nuitées effectivement réalisées, sans abonnement ni frais cachés : si votre logement ne se loue pas, nous ne facturons rien. Le pourcentage dépend de votre logement et vous est confirmé après la visite." },
        { q: 'Faut-il s’engager sur une durée ?', a: "Non. Il n'y a pas d'engagement minimum : vous pouvez arrêter à tout moment avec un préavis d'un mois." },
        { q: 'Puis-je continuer à utiliser mon logement ?', a: "Oui. Prévenez-nous par téléphone, WhatsApp ou email et nous bloquons vos dates sur les plateformes, sans préavis minimum ni pénalité." },
        { q: 'Que se passe-t-il en cas de dégradation ?', a: "Un état des lieux photo est fait après chaque départ. En cas de dégradation, nous déclenchons la garantie Airbnb ou Booking dans les 24 h et suivons le dossier jusqu'au remboursement." },
        { q: 'Quelles communes couvrez-vous ?', a: "Nevers et son agglomération, et plus largement la Nièvre. Contactez-nous pour vérifier votre secteur." },
      ]}
      links={[
        { href: '/menage-airbnb-nevers', label: 'Ménage Airbnb à Nevers' },
        { href: '/services', label: 'Tous nos services' },
        { href: '/a-propos', label: 'Notre équipe' },
      ]}
    />
  );
}
