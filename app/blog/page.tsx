import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from './_data/articles';
import { getPublishedMarkdownArticles } from '@/lib/blog';

// ISR : revalide une fois par jour — les articles programmés apparaissent automatiquement
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Blog : location courte durée et conciergerie Airbnb à Nevers',
  description:
    "Conseils de terrain pour les propriétaires qui louent à Nevers et dans la Nièvre : prix d'une conciergerie Airbnb, ménage, linge, rentabilité de la location courte durée.",
  alternates: { canonical: '/blog' },
};

function isPublished(dateStr: string): boolean {
  const pub = new Date(dateStr);
  pub.setUTCHours(0, 0, 0, 0);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return pub <= today;
}

export default function BlogIndex() {
  // Articles codés en JSX (slugs statiques) — filtrés par date
  const staticArticles = articles
    .filter((a) => isPublished(a.date))
    .map((a) => ({ slug: a.slug, title: a.title, excerpt: a.excerpt, date: a.date, readingMinutes: a.readingMinutes, category: undefined as string | undefined }));

  // Articles markdown dans content/blog/ — déjà filtrés par date par la lib
  const mdArticles = getPublishedMarkdownArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.description,
    date: a.date,
    readingMinutes: a.readingMinutes,
    category: a.category,
  }));

  // Fusion + tri du plus récent au plus ancien
  const all = [...staticArticles, ...mdArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <section className="bg-charbon" style={{ paddingTop: 'clamp(100px, 16vw, 180px)', paddingBottom: 'clamp(48px, 8vw, 96px)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow"><span className="or-mark">✦</span>&nbsp; Le blog</p>
          <h1 className="serif" style={{ fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.05, marginTop: 20, color: 'var(--ivoire)' }}>
            La location courte durée à Nevers, <em>vue du terrain.</em>
          </h1>
          <p style={{ marginTop: 24, fontSize: 18, color: 'rgba(245,241,232,0.75)', lineHeight: 1.65, maxWidth: '60ch' }}>
            Ce qu&apos;on apprend en gérant une quarantaine de logements et deux laveries à Nevers, écrit pour les propriétaires.
          </p>
        </div>
      </section>
      <section style={{ background: 'var(--ivoire)', paddingTop: 'clamp(48px,7vw,88px)', paddingBottom: 'clamp(48px,7vw,88px)' }}>
        <div className="container" style={{ maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {all.map((a) => (
            <article key={a.slug} style={{ borderBottom: '1px solid var(--ligne)', paddingBottom: 24 }}>
              <p style={{ fontSize: 13, color: 'var(--texte-mute)' }}>
                {new Date(a.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                {a.category && <> &middot; <span style={{ color: 'var(--or)' }}>{a.category}</span></>}
                {' '}&middot; {a.readingMinutes} min de lecture
              </p>
              <h2 className="serif" style={{ fontSize: 'clamp(24px, 3vw, 34px)', color: 'var(--vert-deep)', margin: '8px 0' }}>
                <Link href={`/blog/${a.slug}`}>{a.title}</Link>
              </h2>
              <p style={{ color: 'var(--texte-mute)', lineHeight: 1.7 }}>{a.excerpt}</p>
              <Link href={`/blog/${a.slug}`} style={{ display: 'inline-block', marginTop: 10, textDecoration: 'underline', color: 'var(--vert-deep)' }}>
                Lire l&apos;article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
