import { MetadataRoute } from 'next';
import { blogPosts } from './data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ki-marketingagentur.jetzt";

  // Feste Daten für statische Seiten – nicht immer today, damit Google den Cache respektiert
  const SITE_LAUNCH = new Date('2025-01-15');
  const LAST_CONTENT_UPDATE = new Date('2026-09-23');
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

  const MONTH_MAP: Record<string, string> = {
    'Januar': '01', 'Jänner': '01', 'Februar': '02', 'März': '03',
    'April': '04', 'Mai': '05', 'Juni': '06', 'Juli': '07',
    'August': '08', 'September': '09', 'Oktober': '10', 'November': '11', 'Dezember': '12'
  };

  const parseGermanDate = (dateStr: string): Date => {
    try {
      const parts = dateStr.trim().replace('.', '').split(/\s+/);
      if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const month = MONTH_MAP[parts[1]] || '01';
        const year = parts[2];
        const parsed = new Date(`${year}-${month}-${day}T08:00:00Z`);
        if (!isNaN(parsed.getTime())) return parsed;
      }
    } catch {
      // fallback
    }
    return LAST_CONTENT_UPDATE;
  };

  // Dynamic Blog Posts from central data
  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseGermanDate(post.date),
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
