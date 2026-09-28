import type { MetadataRoute } from 'next';
import { PAGE_SEO, siteUrl } from '@/src/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGE_SEO).map((page) => ({
    url: new URL(page.path, siteUrl).href,
    changeFrequency: 'monthly',
    priority: page.priority,
  }));
}
