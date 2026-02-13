import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90]
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
