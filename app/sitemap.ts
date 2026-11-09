import { MetadataRoute } from 'next';
import { blogPosts } from './data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ki-marketingagentur.jetzt";

  // Feste Daten für statische Seiten – aktualisiert bei echtem SEO/Schema-Release
  const LAST_CONTENT_UPDATE = new Date('2026-11-09');
  const LEGAL_LAST_UPDATED = new Date('2025-06-01');

  // Core pages + AI Knowledge Base (llms.txt)
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // All 7 Regional Landing Pages (High Priority for Local SEO & GEO)
  const regionalRoutes: MetadataRoute.Sitemap = [
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
    changeFrequency: 'weekly',
    priority: 0.95,
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
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseGermanDate(post.date),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Legal & Privacy Pages
  const legalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/impressum`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ];

  return [...coreRoutes, ...regionalRoutes, ...blogRoutes, ...legalRoutes];
}
