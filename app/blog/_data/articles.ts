/** Liste des articles du blog (utilisée par /blog et le sitemap). */
export type BlogArticle = { slug: string; title: string; excerpt: string; date: string; readingMinutes: number };

export const articles: BlogArticle[] = [
  {
    slug: 'conciergerie-airbnb-c-est-quoi',
    title: 'Conciergerie Airbnb : c’est quoi et comment ça marche ?',
    excerpt:
      "Ce que fait concrètement une conciergerie Airbnb avant, pendant et après chaque séjour, comment on démarre, et comment choisir la bonne à Nevers.",
    date: '2026-09-22',
    readingMinutes: 6,
  },
  {
    slug: 'combien-coute-une-conciergerie-airbnb',
    title: 'Combien coûte une conciergerie Airbnb à Nevers ?',
    excerpt:
      "Commission, ménage, linge, frais de mise en service : ce que vous payez vraiment, un exemple chiffré à Nevers et les questions à poser avant de signer.",
    date: '2026-09-21',
    readingMinutes: 6,
  },
];
