import { MetadataRoute } from 'next'
import { blogPosts } from './data/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: 'https://ki-marketingagentur.jetzt',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://ki-marketingagentur.jetzt/impressum',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: 'https://ki-marketingagentur.jetzt/datenschutz',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        }
    ];

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `https://ki-marketingagentur.jetzt/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages];
}
