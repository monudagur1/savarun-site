import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', 'product/', 'about/', 'waitlist/', 'contact/', 'privacy/', 'terms/'];
  return pages.map((path) => ({
    url: `${SITE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === 'waitlist/' ? 0.9 : 0.7,
  }));
}
