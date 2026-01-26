import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://brainstorm-werbeagentur.at',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    ]
}
