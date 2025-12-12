import { MetadataRoute } from 'next'

import { soCalCities } from '@/data/cities'
import { articles } from '@/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://keratocones.com'

    // Core static pages
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/services/keratoconus-treatment',
        '/keratoconus-resources',
        '/privacy-policy',
        '/terms-of-service',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))

    // Dynamic City Pages (Programmatic SEO)
    const cityRoutes = soCalCities.map((city) => ({
        url: `${baseUrl}/locations/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9, // High priority for Local SEO
    }))

    // Dynamic Article Pages (National SEO)
    const articleRoutes = articles.map((article) => ({
        url: `${baseUrl}/keratoconus-resources/${article.slug}`,
        lastModified: new Date(article.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.8, // High priority for Content SEO
    }))

    return [...staticRoutes, ...cityRoutes, ...articleRoutes]
}
