import { MetadataRoute } from 'next'

import { soCalCities } from '@/data/cities'
import { soCalCitiesEs } from '@/data/cities-es'
import { articles } from '@/data/articles'
import { articlesEs } from '@/data/articles-es'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://keratocones.com'

    // Core static pages (English)
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

    // Spanish Static Pages
    const spanishStaticRoutes = [
        '/es',
        '/es/acerca-de',
        '/es/contacto',
        '/es/recursos-queratocono',
        '/es/politica-privacidad',
        '/es/terminos-servicio',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '/es' ? 1.0 : 0.8,
    }))

    // Dynamic City Pages - English (Programmatic SEO)
    const cityRoutes = soCalCities.map((city) => ({
        url: `${baseUrl}/locations/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9, // High priority for Local SEO
    }))

    // Dynamic City Pages - Spanish (Programmatic SEO)
    const spanishCityRoutes = soCalCitiesEs.map((city) => ({
        url: `${baseUrl}/es/ubicaciones/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9, // High priority for Spanish Local SEO
    }))

    // Dynamic Article Pages - English (National SEO)
    const articleRoutes = articles.map((article) => ({
        url: `${baseUrl}/keratoconus-resources/${article.slug}`,
        lastModified: new Date(article.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Dynamic Article Pages - Spanish (National SEO)
    const spanishArticleRoutes = articlesEs.map((article) => ({
        url: `${baseUrl}/es/recursos-queratocono/${article.slug}`,
        lastModified: new Date(article.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.8, // High priority for Spanish Content SEO
    }))

    return [
        ...staticRoutes,
        ...spanishStaticRoutes,
        ...cityRoutes,
        ...spanishCityRoutes,
        ...articleRoutes,
        ...spanishArticleRoutes,
    ]
}

