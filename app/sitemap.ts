import type { MetadataRoute } from 'next';

/**
 * sitemap.xml généré dynamiquement par Next.js.
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 *
 * Google utilise ce fichier pour indexer toutes les pages du site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://full-nevers-conciergerie.fr';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/devenir-prestataire`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
