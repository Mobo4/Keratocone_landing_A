import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90]
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
