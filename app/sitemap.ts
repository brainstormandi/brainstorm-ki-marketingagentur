import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://brainstorm-werbeagentur.at',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://brainstorm-werbeagentur.at/impressum',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: 'https://brainstorm-werbeagentur.at/datenschutz',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        }
    ]
}
