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
          'OAI-SearchBot',
          'ChatGPT-User',
          'Claude-Web',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Applebot-Extended',
          'Google-Extended',
          'GoogleOther',
          'Meta-ExternalAgent',
          'DuckAssistBot',
          'YouBot',
          'Amazonbot',
          'Bytespider',
          'CCBot',
          'cohere-ai',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://ki-marketingagentur.jetzt/sitemap.xml',
    host: 'https://ki-marketingagentur.jetzt',
  };
}
