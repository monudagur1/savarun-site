import type { MetadataRoute } from 'next';
import { ROUTES, SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

const paths = Object.values(ROUTES);

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
