import type { MetadataRoute } from 'next';
import { articles } from './blog/_data/articles';
import { villes } from './components/villes';
import { getPublishedMarkdownArticles } from '@/lib/blog';

/**
 * Date de dernière vraie modification du contenu de chaque page (relevée dans l'historique git).
 * À mettre à jour quand le texte d'une page change, pas pour une retouche technique.
 */
const PAGE_UPDATED: Record<string, string> = {
  '': '2026-11-18',
  '/services': '2026-11-18',
  '/a-propos': '2026-05-29',
  '/estimation': '2026-09-21',
  '/application': '2026-09-28',
  '/conciergerie-airbnb-nevers': '2026-11-18',
  '/menage-airbnb-nevers': '2026-09-21',
  '/logements': '2026-11-16',
  '/contact': '2026-11-18',
  '/devenir-prestataire': '2026-09-29',
  '/lancer-une-conciergerie': '2026-09-28',
  '/bien-invendu': '2026-10-20',
  '/mentions-legales': '2026-11-20',
  '/cgv': '2026-05-17'
};
const updated = (path: string) => new Date(PAGE_UPDATED[path]);
/** Pages ville : contenu commun (villes.ts et VillePage.tsx). */
const VILLES_UPDATED = new Date('2026-11-18');

/**
 * sitemap.xml généré dynamiquement par Next.js.
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 *
 * Google utilise ce fichier pour indexer toutes les pages du site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://full-nevers-conciergerie.fr';
  // L'index du blog change à chaque article publié
  const blogUpdated = new Date(
    Math.max(
      Date.parse('2026-11-07'),
      ...articles.map((a) => Date.parse(a.date)),
      ...getPublishedMarkdownArticles().map((a) => Date.parse(a.date)),
    ),
  );

  return [
    {
      url: baseUrl,
      lastModified: updated(''),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: updated('/services'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: updated('/a-propos'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/estimation`,
      lastModified: updated('/estimation'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/application`,
      lastModified: updated('/application'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conciergerie-airbnb-nevers`,
      lastModified: updated('/conciergerie-airbnb-nevers'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...villes.map((v) => ({
      url: `${baseUrl}/conciergerie-airbnb-${v.slug}`,
      lastModified: VILLES_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/menage-airbnb-nevers`,
      lastModified: updated('/menage-airbnb-nevers'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/logements`,
      lastModified: updated('/logements'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogUpdated,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Articles codés (slugs statiques) — toujours publiés (dates passées)
    ...articles.map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Articles markdown — seulement ceux dont la date est atteinte
    ...getPublishedMarkdownArticles().map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/contact`,
      lastModified: updated('/contact'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/devenir-prestataire`,
      lastModified: updated('/devenir-prestataire'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/lancer-une-conciergerie`,
      lastModified: updated('/lancer-une-conciergerie'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/bien-invendu`,
      lastModified: updated('/bien-invendu'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: updated('/mentions-legales'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: updated('/cgv'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
