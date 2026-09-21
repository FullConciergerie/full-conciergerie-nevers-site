import type { Metadata } from 'next';
import Link from 'next/link';

const SLUG = 'conciergerie-airbnb-c-est-quoi';
const URL = `https://full-nevers-conciergerie.fr/blog/${SLUG}`;
const TITLE = 'Conciergerie Airbnb : c’est quoi et comment ça marche ?';
const DESCRIPTION =
  "Annonces, voyageurs, ménage, linge, suivi du logement : ce que fait concrètement une conciergerie Airbnb, comment on démarre, et comment choisir la bonne à Nevers.";
const PUBLISHED = '2026-09-22';

export const metadata: Metadata = {
  title: 'Conciergerie Airbnb : c’est quoi et comment ça marche ?',
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: 'article', title: TITLE, description: DESCRIPTION, url: `/blog/${SLUG}`, publishedTime: PUBLISHED },
};

const faq = [
  {
    q: 'C’est quoi une conciergerie Airbnb ?',
    a: "C'est une entreprise qui gère votre location courte durée à votre place : annonces sur Airbnb et Booking, échanges avec les voyageurs, arrivées et départs, ménage, linge et suivi du logement. Vous restez propriétaire et vous encaissez les revenus, la conciergerie se rémunère en général par une commission.",
  },
  {
    q: 'Quelle différence entre une conciergerie et une agence immobilière ?',
    a: "L'agence gère surtout de la location longue durée : un locataire, un bail, un loyer mensuel. La conciergerie gère des séjours courts, avec des voyageurs différents chaque semaine : c'est un travail quotidien de terrain (ménage, linge, accueil, messages).",
  },
  {
    q: 'Peut-on prendre seulement le ménage ou le linge ?',
    a: "Oui. Beaucoup de propriétaires gèrent eux-mêmes leurs annonces et leurs voyageurs, et nous confient seulement le ménage et le linge entre deux séjours. Chez Full Conciergerie - Nevers, c'est possible à la mission, sans abonnement.",
  },
  {
    q: 'Combien de temps pour démarrer avec une conciergerie ?',
    a: "Chez nous, il faut compter 5 à 7 jours entre la visite du logement et la mise en ligne des annonces, le temps de faire les photos, de préparer l'équipement et le livret d'accueil.",
  },
  {
    q: 'Combien coûte une conciergerie Airbnb ?',
    a: "En général entre 15 % et 30 % des revenus locatifs, le plus souvent 20 à 25 %. Le vrai coût dépend de ce qui est inclus : nous l'expliquons en détail dans notre article sur le prix d'une conciergerie Airbnb.",
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://full-nevers-conciergerie.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://full-nevers-conciergerie.fr/blog' },
      { '@type': 'ListItem', position: 3, name: TITLE, item: URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: URL,
    inLanguage: 'fr-FR',
    author: { '@type': 'Person', name: 'Delil Torgursul' },
    publisher: { '@id': 'https://full-nevers-conciergerie.fr/#business' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
];

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: 1.8, color: 'var(--texte)', margin: '0 0 20px' }}>{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="serif" style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--vert-deep)', lineHeight: 1.15, margin: '48px 0 18px' }}>{children}</h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--vert-deep)', margin: '28px 0 10px' }}>{children}</h3>
);
const ul: React.CSSProperties = { paddingLeft: 22, lineHeight: 1.8, marginBottom: 20 };
const a: React.CSSProperties = { textDecoration: 'underline' };

export default function Article() {
  return (
    <>
      {jsonLd.map((j, i) => (
        // eslint-disable-next-line react/no-danger
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}

      <section className="bg-charbon" style={{ paddingTop: 'clamp(100px, 16vw, 180px)', paddingBottom: 'clamp(48px, 8vw, 96px)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <nav aria-label="Fil d'Ariane" style={{ fontSize: 13, color: 'rgba(245,241,232,0.55)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'inherit' }}>Accueil</Link> <span aria-hidden="true">›</span>{' '}
            <Link href="/blog" style={{ color: 'inherit' }}>Blog</Link> <span aria-hidden="true">›</span> Conciergerie Airbnb, c&apos;est quoi ?
          </nav>
          <p className="eyebrow"><span className="or-mark">✦</span>&nbsp; Propriétaires · Les bases</p>
          <h1 className="serif" style={{ fontSize: 'clamp(36px, 5.6vw, 68px)', lineHeight: 1.06, marginTop: 20, color: 'var(--ivoire)' }}>
            Conciergerie Airbnb : c&apos;est quoi <em>et comment ça marche ?</em>
          </h1>
          <p style={{ marginTop: 22, fontSize: 15, color: 'rgba(245,241,232,0.6)' }}>
            Par Delil Torgursul, fondateur de Full Conciergerie - Nevers · 22 septembre 2026 · 6 min de lecture
          </p>
        </div>
      </section>

      <article style={{ background: 'var(--ivoire)', paddingTop: 'clamp(40px,6vw,72px)', paddingBottom: 'clamp(48px,7vw,88px)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ background: '#fff', borderLeft: '4px solid var(--or)', borderRadius: 6, padding: '18px 22px', marginBottom: 32 }}>
            <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--texte)' }}>
              <strong>En bref :</strong> une conciergerie Airbnb gère votre location courte durée à votre place, de l&apos;annonce au départ
              du dernier voyageur. Vous restez propriétaire, vous gardez vos dates, vous encaissez les revenus. Elle se rémunère en
              général par une commission sur les réservations.
            </p>
          </div>

          <P>
            Louer un appartement sur Airbnb, sur le papier, c&apos;est simple. Dans la réalité, c&apos;est un voyageur qui écrit à 23 h parce
            qu&apos;il ne trouve pas la boîte à clés, un ménage à caser entre un départ à 11 h et une arrivée à 15 h, et des draps à laver
            trois fois par semaine. Une conciergerie existe pour absorber tout ça. Voici comment ça marche, concrètement.
          </P>

          <H2>Ce que fait une conciergerie Airbnb</H2>
          <P>On peut découper le travail en trois moments : avant, pendant et après chaque séjour.</P>

          <H3>Avant le séjour</H3>
          <ul style={ul}>
            <li><strong>L&apos;annonce</strong> : photos, texte, publication sur Airbnb et Booking, calendriers synchronisés pour éviter les doubles réservations.</li>
            <li><strong>Les prix</strong> : ajustés selon la saison et les événements (courses à Magny-Cours, pèlerinages à Sainte-Bernadette, salons).</li>
            <li><strong>Les échanges avec les voyageurs</strong> : réponses aux questions, validation des réservations, envoi des instructions et du livret d&apos;accueil.</li>
          </ul>

          <H3>Pendant le séjour</H3>
          <ul style={ul}>
            <li><strong>L&apos;arrivée</strong> : accueil en personne ou boîte à clés avec code, selon l&apos;heure et le logement.</li>
            <li><strong>L&apos;assistance</strong> : une question sur le Wi-Fi, une ampoule grillée, un chauffage qui ne démarre pas.</li>
          </ul>

          <H3>Après le séjour</H3>
          <ul style={ul}>
            <li><strong>Le ménage</strong> entre deux voyageurs, au niveau d&apos;un hôtel.</li>
            <li><strong>Le linge</strong> : draps et serviettes lavés, séchés, pliés, remis en place.</li>
            <li><strong>L&apos;état des lieux</strong> : photos du logement, réassort des consommables, signalement des dégâts.</li>
            <li><strong>Les avis</strong> : réponse aux commentaires, suivi de la note.</li>
          </ul>

          <H2>Comment ça se passe pour démarrer</H2>
          <ol style={ul}>
            <li><strong>Un premier appel</strong> pour parler du logement et de vos objectifs.</li>
            <li><strong>Une estimation</strong> de ce que le logement peut rapporter en location courte durée (vous pouvez la faire <Link href="/estimation" style={a}>en ligne</Link>).</li>
            <li><strong>Une visite</strong> du logement : équipement, points à améliorer, accès.</li>
            <li><strong>La mise en service</strong> : photos, annonces, boîte à clés, linge, livret d&apos;accueil numérique.</li>
            <li><strong>Les premières réservations.</strong> Chez nous, il faut compter 5 à 7 jours entre la visite et la mise en ligne.</li>
          </ol>
          <P>
            Pensez aussi aux règles locales : la location courte durée demande en général une déclaration en mairie, et les règles
            varient selon qu&apos;il s&apos;agit de votre résidence principale ou non. Renseignez-vous auprès de votre commune avant de vous lancer.
          </P>

          <H2>Gestion complète ou services à la carte</H2>
          <P>Une conciergerie ne veut pas forcément dire « tout ou rien ». Il existe en gros trois formules :</P>
          <ul style={ul}>
            <li><strong>La gestion complète</strong> : on s&apos;occupe de tout, vous suivez vos revenus. C&apos;est la formule des propriétaires qui habitent loin ou qui n&apos;ont pas le temps.</li>
            <li><strong>La commercialisation seule</strong> : annonces, prix et voyageurs, sans la partie terrain.</li>
            <li><strong>Le ménage et le linge seuls</strong> : vous gérez vos voyageurs, on assure le terrain entre deux séjours. C&apos;est notre offre de <Link href="/menage-airbnb-nevers" style={a}>ménage Airbnb à Nevers</Link>.</li>
          </ul>

          <H2>Pour qui c&apos;est utile ?</H2>
          <ul style={ul}>
            <li>Les propriétaires qui habitent loin de Nevers (Paris, Lyon, étranger) et ne peuvent pas être sur place.</li>
            <li>Les investisseurs qui ont plusieurs logements et veulent un seul interlocuteur.</li>
            <li>Les propriétaires d&apos;une résidence secondaire qui veulent la louer quand ils n&apos;y sont pas.</li>
            <li>Ceux qui ont essayé seuls et qui ont vu que ça prenait bien plus de temps que prévu.</li>
          </ul>

          <H2>Comment choisir sa conciergerie</H2>
          <P>Quelques repères simples :</P>
          <ul style={ul}>
            <li><strong>Elle est vraiment locale</strong> : une équipe sur place, capable d&apos;intervenir vite en cas de problème.</li>
            <li><strong>Ses tarifs sont clairs</strong> : ce que couvre la commission, ce qui est facturé à part. Notre article <Link href="/blog/combien-coute-une-conciergerie-airbnb" style={a}>combien coûte une conciergerie Airbnb</Link> détaille les questions à poser.</li>
            <li><strong>Pas d&apos;engagement long</strong> : vous devez pouvoir arrêter avec un préavis raisonnable.</li>
            <li><strong>Des preuves</strong> : nombre de logements gérés, notes et avis des voyageurs.</li>
            <li><strong>Le linge est maîtrisé</strong> : c&apos;est souvent là que ça coince, surtout en haute saison.</li>
          </ul>
          <P>
            À Nevers, c&apos;est ce qui nous a poussés à ouvrir nos propres laveries, Café Laverie puis Laverie Dupont : ne plus dépendre
            d&apos;une blanchisserie extérieure pour que chaque logement soit prêt à l&apos;heure. Aujourd&apos;hui, nous gérons une quarantaine de
            logements et avons dépassé les 1 000 avis voyageurs. Tout le détail de notre offre est sur la page{' '}
            <Link href="/conciergerie-airbnb-nevers" style={a}>conciergerie Airbnb à Nevers</Link>.
          </P>

          <H2>Questions fréquentes</H2>
          {faq.map((f) => (
            <details key={f.q} style={{ borderTop: '1px solid var(--ligne)', padding: '16px 0' }}>
              <summary style={{ cursor: 'pointer', color: 'var(--vert-deep)', fontSize: 17, fontWeight: 500 }}>{f.q}</summary>
              <p style={{ color: 'var(--texte-mute)', lineHeight: 1.7, marginTop: 10 }}>{f.a}</p>
            </details>
          ))}

          <div style={{ background: 'var(--vert-deep)', color: 'var(--ivoire)', borderRadius: 10, padding: '28px 26px', marginTop: 48, textAlign: 'center' }}>
            <p className="serif" style={{ fontSize: 26, margin: '0 0 10px' }}>Un logement à Nevers à nous confier ?</p>
            <p style={{ color: 'rgba(245,241,232,0.75)', margin: '0 0 18px' }}>Estimation gratuite, réponse sous 48 h, sans engagement.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              <Link href="/estimation" className="btn btn-gold">Estimer mes revenus <span className="arrow" aria-hidden="true">→</span></Link>
              <a href="tel:+33376150229" className="btn btn-vert">03 76 15 02 29</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
