import { MetadataRoute } from 'next'

import { soCalCities } from '@/data/cities'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://keratocones.com'

    // Core static pages
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/services/keratoconus-treatment',
        '/keratoconus-resources',
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

    return [...staticRoutes, ...cityRoutes]
}
