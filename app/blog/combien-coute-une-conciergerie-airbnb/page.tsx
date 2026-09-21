import type { Metadata } from 'next';
import Link from 'next/link';

const SLUG = 'combien-coute-une-conciergerie-airbnb';
const URL = `https://full-nevers-conciergerie.fr/blog/${SLUG}`;
const TITLE = 'Combien coûte une conciergerie Airbnb à Nevers ?';
const DESCRIPTION =
  "Commission de 15 à 30 %, ménage, linge, frais de mise en service : ce que coûte vraiment une conciergerie Airbnb, avec un exemple chiffré à Nevers et les questions à poser avant de signer.";
const PUBLISHED = '2026-09-21';

export const metadata: Metadata = {
  title: 'Combien coûte une conciergerie Airbnb ? Prix et commission à Nevers',
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: 'article', title: TITLE, description: DESCRIPTION, url: `/blog/${SLUG}`, publishedTime: PUBLISHED },
};

const faq = [
  {
    q: 'Quel pourcentage prend une conciergerie Airbnb ?',
    a: "En France, la plupart des conciergeries prennent entre 15 % et 30 % des revenus de location, avec une majorité autour de 20 à 25 %. Le chiffre seul ne suffit pas : il faut savoir sur quoi il est calculé et ce qui est facturé en plus (ménage, linge, consommables).",
  },
  {
    q: 'Le ménage est-il compris dans la commission ?',
    a: "Pas toujours. Chez certaines conciergeries, le ménage est inclus. Chez d'autres, il est facturé à part, soit au propriétaire, soit au voyageur via les frais de ménage de l'annonce. C'est la première question à poser pour comparer deux offres.",
  },
  {
    q: 'Une conciergerie Airbnb est-elle rentable dans une ville comme Nevers ?',
    a: "Oui, si le logement se loue régulièrement et si la conciergerie améliore l'occupation et la note des voyageurs. À Nevers, la demande vient des voyageurs d'affaires, des événements (circuit de Magny-Cours, pèlerinages à Sainte-Bernadette) et du tourisme de passage sur la Loire. Le vrai calcul se fait sur ce qu'il vous reste une fois tout payé, pas sur le pourcentage affiché.",
  },
  {
    q: 'Combien coûte Full Conciergerie - Nevers ?',
    a: "Nous nous rémunérons uniquement sur les nuitées réellement louées, sans abonnement : si le logement ne se loue pas, nous ne facturons rien. Le pourcentage dépend du logement et vous est confirmé après une visite gratuite et sans engagement.",
  },
  {
    q: "Y a-t-il des frais d'entrée ?",
    a: "Certaines conciergeries facturent la mise en service (photos, création d'annonce, équipement) jusqu'à plusieurs centaines d'euros. Demandez toujours ce montant par écrit avant de signer.",
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
const td: React.CSSProperties = { padding: '10px 12px', borderBottom: '1px solid var(--ligne)', textAlign: 'left', verticalAlign: 'top' };
const tdr: React.CSSProperties = { ...td, textAlign: 'right', whiteSpace: 'nowrap' };

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
            <Link href="/blog" style={{ color: 'inherit' }}>Blog</Link> <span aria-hidden="true">›</span> Prix d&apos;une conciergerie Airbnb
          </nav>
          <p className="eyebrow"><span className="or-mark">✦</span>&nbsp; Propriétaires · Nevers</p>
          <h1 className="serif" style={{ fontSize: 'clamp(36px, 5.6vw, 68px)', lineHeight: 1.06, marginTop: 20, color: 'var(--ivoire)' }}>
            Combien coûte une conciergerie Airbnb <em>à Nevers ?</em>
          </h1>
          <p style={{ marginTop: 22, fontSize: 15, color: 'rgba(245,241,232,0.6)' }}>
            Par Delil Torgursul, fondateur de Full Conciergerie - Nevers · 21 septembre 2026 · 6 min de lecture
          </p>
        </div>
      </section>

      <article style={{ background: 'var(--ivoire)', paddingTop: 'clamp(40px,6vw,72px)', paddingBottom: 'clamp(48px,7vw,88px)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ background: '#fff', borderLeft: '4px solid var(--or)', borderRadius: 6, padding: '18px 22px', marginBottom: 32 }}>
            <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--texte)' }}>
              <strong>En bref :</strong> une conciergerie Airbnb coûte en général <strong>entre 15 % et 30 % de vos revenus locatifs</strong>,
              le plus souvent 20 à 25 %. Mais deux offres au même pourcentage peuvent vous laisser des sommes très différentes :
              tout dépend de ce qui est inclus (ménage, linge, consommables) et de la base de calcul.
            </p>
          </div>

          <P>
            C&apos;est la première question que me posent les propriétaires quand ils m&apos;appellent. Et c&apos;est normal : confier son
            logement, c&apos;est accepter de partager ses revenus. Voici, sans jargon, comment se construit le prix d&apos;une conciergerie
            Airbnb, ce qu&apos;il faut vérifier, et un exemple chiffré sur un logement à Nevers.
          </P>

          <H2>1. La commission : entre 15 % et 30 %</H2>
          <P>
            La quasi-totalité des conciergeries se rémunèrent par une commission sur les réservations. Les comparatifs publiés en 2026
            situent le marché entre 15 % et 30 %, avec une majorité autour de 20 à 25 % pour une gestion complète. Les offres en dessous
            de 15 % sont souvent des formules partielles : le ménage ou l&apos;accueil sont alors facturés à part.
          </P>
          <P>
            L&apos;avantage de ce modèle : la conciergerie gagne de l&apos;argent quand vous en gagnez. Si le logement reste vide, elle ne touche rien,
            ce qui la pousse à remplir le calendrier et à soigner la note des voyageurs. Quelques conciergeries proposent plutôt un forfait
            mensuel fixe, qui peut devenir cher en basse saison.
          </P>

          <H2>2. Sur quoi est calculée la commission ?</H2>
          <P>C&apos;est le point que presque personne ne vérifie, et qui peut faire varier la facture de plusieurs points :</P>
          <ul style={{ paddingLeft: 22, lineHeight: 1.8, marginBottom: 20 }}>
            <li><strong>Sur le prix des nuitées seul</strong> : la base la plus favorable pour vous.</li>
            <li><strong>Sur le total payé par le voyageur</strong> (nuitées + frais de ménage) : la commission s&apos;applique aussi au ménage.</li>
            <li><strong>Avant ou après la commission d&apos;Airbnb</strong> : Airbnb prélève lui-même sa part. Pour les hôtes qui passent par un
              logiciel de gestion, ce qui est le cas de la plupart des conciergeries, Airbnb applique depuis fin octobre 2025 des frais d&apos;environ
              15,5 % côté hôte. Une commission calculée avant ces frais vous coûte donc plus cher.</li>
          </ul>

          <H2>3. Ce qui s&apos;ajoute souvent à la commission</H2>
          <ul style={{ paddingLeft: 22, lineHeight: 1.8, marginBottom: 20 }}>
            <li><strong>Le ménage</strong> entre deux voyageurs : inclus chez certains, facturé à chaque passage chez d&apos;autres, ou reporté sur le voyageur via les frais de ménage de l&apos;annonce.</li>
            <li><strong>Le linge</strong> : location de draps et serviettes, ou blanchisserie facturée au kilo ou au lit.</li>
            <li><strong>Les consommables</strong> : café, papier toilette, savon, parfois refacturés avec une marge.</li>
            <li><strong>La mise en service</strong> : photos, création d&apos;annonce, boîte à clés, de zéro à plusieurs centaines d&apos;euros.</li>
            <li><strong>Les petites interventions</strong> : ampoule, bouchon, serrure. Demandez le tarif horaire à l&apos;avance.</li>
          </ul>

          <H2>4. Exemple chiffré : un T2 à Nevers</H2>
          <P>
            Prenons un exemple simple et volontairement arrondi (ce n&apos;est pas notre grille tarifaire, juste une illustration) :
            un T2 en centre-ville loué 18 nuits dans le mois à 60 € la nuit, soit 1 080 € de nuitées. On compare deux offres.
          </P>
          <div style={{ overflowX: 'auto', marginBottom: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--vert-sauge-soft)' }}>
                  <th style={td}>Pour le propriétaire</th>
                  <th style={tdr}>Offre A : 18 %</th>
                  <th style={tdr}>Offre B : 25 %</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={td}>Commission sur 1 080 € de nuitées</td><td style={tdr}>194 €</td><td style={tdr}>270 €</td></tr>
                <tr><td style={td}>Ménage (6 passages)</td><td style={tdr}>à votre charge : 6 × 45 € = 270 €</td><td style={tdr}>inclus</td></tr>
                <tr><td style={td}>Linge</td><td style={tdr}>à votre charge : 6 × 15 € = 90 €</td><td style={tdr}>inclus</td></tr>
                <tr><td style={{ ...td, fontWeight: 600 }}>Coût total du mois</td><td style={{ ...tdr, fontWeight: 600 }}>554 €</td><td style={{ ...tdr, fontWeight: 600 }}>270 €</td></tr>
              </tbody>
            </table>
          </div>
          <P>
            L&apos;offre à 18 % semble moins chère sur le papier, mais elle coûte le double une fois le ménage et le linge ajoutés.
            C&apos;est pour ça qu&apos;il faut toujours comparer <strong>ce qu&apos;il vous reste à la fin du mois</strong>, pas le pourcentage affiché.
          </P>

          <H2>5. Ce qui justifie le prix d&apos;une bonne conciergerie</H2>
          <P>
            Une conciergerie ne se paie pas seulement en temps gagné. Elle doit aussi vous faire gagner plus : un calendrier mieux rempli,
            des prix ajustés aux périodes fortes (courses à Magny-Cours, pèlerinages à Sainte-Bernadette, salons), de meilleures notes et
            donc une meilleure place dans les résultats d&apos;Airbnb. Si le revenu net augmente plus que la commission, l&apos;opération est gagnante.
          </P>
          <P>
            À Nevers, nous avons fait un choix : laver nous-mêmes le linge dans nos deux laveries, Café Laverie et Laverie Dupont. On ne dépend
            d&apos;aucune blanchisserie extérieure, le linge est prêt à temps, et c&apos;est l&apos;une des raisons pour lesquelles nos logements
            cumulent plus de 1 000 avis voyageurs.
          </P>

          <H2>6. Les 6 questions à poser avant de signer</H2>
          <ol style={{ paddingLeft: 22, lineHeight: 1.8, marginBottom: 20 }}>
            <li>Sur quelle base est calculée la commission : nuitées seules ou total ?</li>
            <li>Le ménage et le linge sont-ils inclus ? Sinon, combien par passage ?</li>
            <li>Y a-t-il des frais de mise en service ou d&apos;abonnement ?</li>
            <li>Quelle durée d&apos;engagement et quel préavis pour arrêter ?</li>
            <li>Que se passe-t-il en cas de dégradation par un voyageur ?</li>
            <li>Puis-je bloquer des dates pour moi quand je le souhaite ?</li>
          </ol>
          <P>
            Chez Full Conciergerie - Nevers, les réponses sont simples : rémunération uniquement sur les nuitées louées, pas d&apos;engagement minimum
            (préavis d&apos;un mois), état des lieux photo après chaque départ, et vous bloquez vos dates quand vous voulez.
            Le détail est sur notre page <Link href="/conciergerie-airbnb-nevers" style={{ textDecoration: 'underline' }}>conciergerie Airbnb à Nevers</Link>.
            Et si vous gérez vous-même vos voyageurs, nous proposons aussi le <Link href="/menage-airbnb-nevers" style={{ textDecoration: 'underline' }}>ménage Airbnb seul</Link>.
          </P>

          <H2>Questions fréquentes</H2>
          {faq.map((f) => (
            <details key={f.q} style={{ borderTop: '1px solid var(--ligne)', padding: '16px 0' }}>
              <summary style={{ cursor: 'pointer', color: 'var(--vert-deep)', fontSize: 17, fontWeight: 500 }}>{f.q}</summary>
              <p style={{ color: 'var(--texte-mute)', lineHeight: 1.7, marginTop: 10 }}>{f.a}</p>
            </details>
          ))}

          <div style={{ background: 'var(--vert-deep)', color: 'var(--ivoire)', borderRadius: 10, padding: '28px 26px', marginTop: 48, textAlign: 'center' }}>
            <p className="serif" style={{ fontSize: 26, margin: '0 0 10px' }}>Combien rapporterait votre logement ?</p>
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
