import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'CCBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            }
        ],
        sitemap: 'https://brainstorm-werbeagentur.at/sitemap.xml',
    }
}
