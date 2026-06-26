import { MetadataRoute } from 'next';
import { blogPosts } from './data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ki-marketingagentur.jetzt";

  // Feste Daten für statische Seiten – nicht immer today, damit Google den Cache respektiert
  const SITE_LAUNCH = new Date('2025-01-15');
  const LAST_CONTENT_UPDATE = new Date('2026-06-01');
  const LEGAL_LAST_UPDATED = new Date('2025-06-01');

  // Core pages
  const coreRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ];

  // All Regional Landing Pages
  const regionalRoutes = [
    'amstetten',
    'steyr',
    'linz',
    'perg',
    'st-poelten',
    'wien',
    'salzburg'
  ].map(city => ({
    url: `${baseUrl}/werbeagentur-${city}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic Blog Posts from central data
  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // Blog-Posts: Datum aus den Post-Daten ableiten, Fallback auf Launch
    lastModified: post.date ? new Date(post.date) : SITE_LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal & Privacy Pages
  const legalRoutes = [
    {
      url: `${baseUrl}/impressum`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ];

  return [...coreRoutes, ...regionalRoutes, ...blogRoutes, ...legalRoutes];
}
