/** Liste des articles du blog (utilisée par /blog et le sitemap). */
export type BlogArticle = { slug: string; title: string; excerpt: string; date: string; readingMinutes: number };

export const articles: BlogArticle[] = [
  {
    slug: 'combien-coute-une-conciergerie-airbnb',
    title: 'Combien coûte une conciergerie Airbnb à Nevers ?',
    excerpt:
      "Commission, ménage, linge, frais de mise en service : ce que vous payez vraiment, un exemple chiffré à Nevers et les questions à poser avant de signer.",
    date: '2026-09-21',
    readingMinutes: 6,
  },
];
