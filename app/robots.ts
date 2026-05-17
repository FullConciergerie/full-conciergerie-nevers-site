import type { MetadataRoute } from 'next';

/**
 * robots.txt généré dynamiquement par Next.js.
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://full-nevers-conciergerie.fr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Bloque les pages utilitaires éventuelles (formulaires d'envoi, API…)
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
