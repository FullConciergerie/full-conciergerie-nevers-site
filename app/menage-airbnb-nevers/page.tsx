import type { Metadata } from 'next';
import { SeoLanding } from '../components/SeoLanding';

export const metadata: Metadata = {
  title: 'Ménage Airbnb à Nevers : ménage et linge entre deux voyageurs',
  description:
    "Ménage Airbnb à Nevers pour propriétaires qui gèrent eux-mêmes leur location : ménage hôtelier entre deux séjours, linge lavé dans nos laveries, rapport photo à chaque passage. Sans abonnement.",
  alternates: { canonical: '/menage-airbnb-nevers' },
  openGraph: {
    title: 'Ménage Airbnb à Nevers — Full Conciergerie - Nevers',
    description: 'Ménage entre deux voyageurs, linge lavé et rapport photo. Vous gérez votre annonce, on s’occupe du ménage.',
    url: '/menage-airbnb-nevers',
  },
};

export default function Page() {
  return (
    <SeoLanding
      slug="menage-airbnb-nevers"
      breadcrumb="Ménage Airbnb à Nevers"
      eyebrow="Ménage location courte durée · Nevers"
      h1="Ménage Airbnb à Nevers :"
      h1Em="votre logement prêt à chaque arrivée."
      intro="Vous gérez vous-même votre annonce Airbnb ou Booking à Nevers, mais le ménage entre deux voyageurs vous prend du temps ? Nos prestataires font le ménage, changent le linge et vous envoient un rapport photo. Vous commandez uniquement les missions dont vous avez besoin."
      serviceName="Ménage Airbnb à Nevers"
      serviceDescription="Ménage de locations courte durée (Airbnb, Booking) à Nevers : ménage hôtelier entre deux séjours, changement et lavage du linge, rapport photo."
      sections={[
        {
          title: 'Un ménage pensé pour la location courte durée',
          body: "Entre deux voyageurs, le ménage ne se limite pas à passer l'aspirateur : un seul cheveu ou une serviette douteuse suffit à faire perdre une étoile. Nos prestataires suivent une check-list de ménage hôtelier, pièce par pièce.",
          items: [
            { label: 'Ménage complet entre deux séjours', detail: 'Chambres, salle de bain, cuisine, sols, poubelles, vérification des équipements.' },
            { label: 'Changement du linge', detail: 'Draps et serviettes changés à chaque départ, lits faits prêts pour les voyageurs.' },
            { label: 'Rapport photo à chaque mission', detail: 'Vous recevez les photos du logement une fois le ménage terminé, et une alerte en cas d’anomalie.' },
            { label: 'Réassort', detail: 'Signalement des consommables à racheter (papier, savon, café…), ou réassort sur demande.' },
          ],
        },
        {
          title: 'Le linge lavé dans nos propres laveries',
          body: "Nous exploitons deux laveries à Nevers, Café Laverie et Laverie Dupont. Le linge de vos logements y est lavé, séché et plié : pas d'attente, pas de linge perdu chez un sous-traitant.",
          items: [
            { label: 'Lavage, séchage, pliage', detail: 'Votre linge revient propre et plié, prêt pour le prochain ménage.' },
            { label: 'Location de linge possible', detail: 'Pas encore équipé ? Nous pouvons fournir le linge de lit et de bain.' },
          ],
        },
        {
          title: 'Comment commander un ménage',
          body: "Tout passe par notre application : vous créez votre logement, vous indiquez vos départs, et un prestataire de notre équipe prend la mission.",
          items: [
            { label: '1. Créez votre espace', detail: 'Votre logement, son accès, vos consignes : une seule fois.' },
            { label: '2. Commandez vos ménages', detail: 'À la demande, ou automatiquement à chaque départ voyageur.' },
            { label: '3. Recevez le rapport', detail: 'Photos et compte rendu dès que le logement est prêt.' },
          ],
        },
      ]}
      faq={[
        { q: 'Faut-il confier toute la gestion pour avoir le ménage ?', a: "Non. Vous pouvez garder la gestion de votre annonce et ne nous confier que le ménage et le linge, à la mission. Si un jour vous voulez tout déléguer, nous proposons aussi la gestion complète." },
        { q: 'Qui fait le ménage ?', a: "Des prestataires de l'équipe Full Conciergerie - Nevers, formés au ménage de location courte durée et suivis mission par mission dans notre application." },
        { q: 'Comment je sais que le ménage est bien fait ?', a: "Chaque mission se termine par un rapport photo que vous recevez directement, avec une alerte en cas de problème constaté dans le logement." },
        { q: 'Où êtes-vous situés ?', a: "Au 23 faubourg de Lyon à Nevers, au fond de la Laverie Dupont. Nous intervenons à Nevers et dans la Nièvre." },
      ]}
      links={[
        { href: '/conciergerie-airbnb-nevers', label: 'Conciergerie Airbnb à Nevers' },
        { href: '/devenir-prestataire', label: 'Devenir prestataire ménage' },
        { href: '/services', label: 'Tous nos services' },
      ]}
    />
  );
}
