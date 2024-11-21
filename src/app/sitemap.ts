import type { MetadataRoute } from 'next';

import { getHost } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getHost()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];
}
