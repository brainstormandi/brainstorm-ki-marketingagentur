import { MetadataRoute } from 'next';
import { blogPosts } from './data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ki-marketingagentur.jetzt";
  const currentDate = new Date();
  
  // Core pages
  const coreRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
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
    'salzburg' // Fixed: Was previously missing!
  ].map(city => ({
    url: `${baseUrl}/werbeagentur-${city}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic Blog Posts from central data
  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal & Privacy Pages
  const legalRoutes = [
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    }
  ];

  return [...coreRoutes, ...regionalRoutes, ...blogRoutes, ...legalRoutes];
}
