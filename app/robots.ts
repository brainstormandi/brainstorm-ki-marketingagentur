import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'Applebot-Extended',
          'Google-Extended',
          'Bytespider',
          'CCBot',
          'cohere-ai',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://ki-marketingagentur.jetzt/sitemap.xml',
  };
}
