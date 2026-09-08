import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * The site is a single page; its sections are hash anchors, which are not
 * separate URLs and must not be listed here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
