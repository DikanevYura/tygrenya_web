import type { MetadataRoute } from 'next';

import { getHost } from '@/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: [
        '/_next/',
        '/api/',
        '/privacy-policy',
        '/terms-of-use',
      ],
    },
    sitemap: `${getHost()}/sitemap.xml`,
  };
}
