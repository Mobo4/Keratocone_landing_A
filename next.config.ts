import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=3600'
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/services/keratoconus-treatment',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/politica-privacidad',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/es/terminos-servicio',
        destination: '/terms-of-service',
        permanent: true,
      },
      // Broken backlink redirects (52 backlinks from Shopify migration)
      {
        source: '/pages/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/blogs/news',
        destination: '/',
        permanent: true,
      },
      {
        source: '/collections/frontpage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/keratoconus-consultation-service',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/products/unique-ph-4-fl-oz-120ml',
        destination: '/scleral-lenses-cost',
        permanent: true,
      },
      {
        source: '/products/progent-large-diameter-scleral-lens-case',
        destination: '/scleral-lenses-cost',
        permanent: true,
      },
      {
        source: '/products/lacripure-saline-solution-3-month-supply',
        destination: '/scleral-lenses-cost',
        permanent: true,
      },
      {
        source: '/pages/avada-sitemap',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/avada-sitemap-articles',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/avada-sitemap-blogs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/avada-sitemap-collections',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/avada-sitemap-pages',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/avada-sitemap-products',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // IndexNow key file - rewrite to API route to bypass middleware
      {
        source: '/06c5cac5eef2410a9f5c3b56a6e5580c.txt',
        destination: '/api/indexnow',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
