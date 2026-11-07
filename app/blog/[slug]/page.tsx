import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { marked } from 'marked';
import {
  getPublishedMarkdownArticleBySlug,
  getPublishedMarkdownArticles,
} from '@/lib/blog';

// ISR : revalide une fois par jour — permet la publication automatique à la date
export const revalidate = 86400;

// Génère les slugs publiés au moment du build.
// Les articles futurs seront générés à la demande (dynamicParams = true par défaut)
// et retourneront 404 via le composant tant que la date n'est pas atteinte.
export async function generateStaticParams() {
  const articles = getPublishedMarkdownArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedMarkdownArticleBySlug(slug);
  if (!article) return {};
  const url = `https://full-nevers-conciergerie.fr/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.date,
    },
  };
}

const SITE = 'https://full-nevers-conciergerie.fr';

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getPublishedMarkdownArticleBySlug(slug);
  if (!article) notFound();

  const html = await marked(article.content, { breaks: false, gfm: true });
  const url = `${SITE}/blog/${article.slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.date,
      mainEntityOfPage: url,
      inLanguage: 'fr-FR',
      author: { '@type': 'Person', name: article.author },
      publisher: { '@id': `${SITE}/#business` },
    },
  ];

  const pubDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* En-tête sombre */}
      <section
        className="bg-charbon"
        style={{
          paddingTop: 'clamp(100px, 16vw, 180px)',
          paddingBottom: 'clamp(48px, 8vw, 96px)',
        }}
      >
        <div className="container" style={{ maxWidth: 740 }}>
          <p style={{ fontSize: 13, color: 'rgba(245,241,232,0.55)', marginBottom: 16 }}>
            <Link href="/blog" style={{ color: 'rgba(245,241,232,0.55)', textDecoration: 'underline' }}>
              Blog
            </Link>
            {' '}&rsaquo;{' '}
            <span style={{ color: 'var(--or)' }}>{article.category}</span>
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 60px)',
              lineHeight: 1.07,
              color: 'var(--ivoire)',
            }}
          >
            {article.title}
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              color: 'rgba(245,241,232,0.65)',
              lineHeight: 1.6,
              maxWidth: '58ch',
            }}
          >
            {article.description}
          </p>
          <p
            style={{
              marginTop: 20,
              fontSize: 13,
              color: 'rgba(245,241,232,0.45)',
            }}
          >
            {pubDate} &middot; {article.readingMinutes} min de lecture &middot; {article.author}
          </p>
        </div>
      </section>

      {/* Corps de l'article */}
      <section
        style={{
          background: 'var(--ivoire)',
          paddingTop: 'clamp(48px, 7vw, 80px)',
          paddingBottom: 'clamp(64px, 10vw, 120px)',
        }}
      >
        <div className="container" style={{ maxWidth: 740 }}>
          <div className="prose-article" dangerouslySetInnerHTML={{ __html: html }} />

          {/* Filet de séparation + retour */}
          <div
            style={{
              marginTop: 64,
              paddingTop: 32,
              borderTop: '1px solid var(--ligne)',
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link
              href="/blog"
              style={{
                color: 'var(--vert-deep)',
                textDecoration: 'underline',
                fontSize: 15,
              }}
            >
              &larr; Tous les articles
            </Link>
            <Link
              href="/estimation"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'var(--vert-deep)',
                color: 'var(--ivoire)',
                fontSize: 14,
                fontFamily: 'var(--sans)',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Estimer mon logement
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .prose-article h2 {
          font-family: var(--serif);
          font-size: clamp(24px, 2.8vw, 36px);
          color: var(--vert-deep);
          line-height: 1.12;
          margin: 48px 0 16px;
          font-weight: 400;
          letter-spacing: -0.015em;
        }
        .prose-article h3 {
          font-family: var(--serif);
          font-size: clamp(20px, 2.2vw, 28px);
          color: var(--vert-deep);
          line-height: 1.15;
          margin: 36px 0 12px;
          font-weight: 400;
        }
        .prose-article p {
          font-size: clamp(16px, 1.25vw, 18px);
          line-height: 1.82;
          color: var(--texte);
          margin: 0 0 22px;
        }
        .prose-article strong {
          color: var(--vert-deep);
          font-weight: 600;
        }
        .prose-article ul,
        .prose-article ol {
          padding-left: 24px;
          margin: 0 0 22px;
        }
        .prose-article li {
          font-size: clamp(16px, 1.25vw, 18px);
          line-height: 1.75;
          color: var(--texte);
          margin-bottom: 6px;
        }
        .prose-article a {
          color: var(--vert-deep);
          text-decoration: underline;
        }
        .prose-article blockquote {
          border-left: 3px solid var(--or);
          margin: 32px 0;
          padding: 4px 0 4px 24px;
          color: var(--texte-mute);
          font-style: italic;
        }
        .prose-article hr {
          border: none;
          border-top: 1px solid var(--ligne);
          margin: 48px 0;
        }
      `}</style>
    </>
  );
}
