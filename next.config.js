/** @type {import('next').NextConfig} */
const nextConfig = {
     // Enable React Strict Mode for better debugging
  reactStrictMode: true,

  // Configure URL rewrites and redirects
  async rewrites() {
    return [
      // Simple rewrite example: /careers → /jobs
      {
        source: '/employers',
        destination: '/employers-list-v3',
      },
      {
        source: '/candidates',
        destination: '/candidates-list-v2'
      },
      {
        source: '/agency',
        destination: '/candidates-list-v3',
      },
      // Complex rewrite with parameters: /services/digital-marketing → /offerings/digital-marketing
      {
        source: '/services/:slug',
        destination: '/offerings/:slug',
      },
    ];
  },

  async redirects() {
    return [
      // Permanent redirect example: /old-team → /about
      {
        source: '/old-team',
        destination: '/about',
        permanent: true,
      },
      // Temporary redirect example: /promo → /special-offer
      {
        source: '/promo',
        destination: '/special-offer',
        permanent: false,
      },
    ];
  },

  // Configure custom headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  // Configure image domains (if using external images)
  images: {
    domains: ['your-cdn-domain.com', 'images.unsplash.com'],
  },

  // Environment variables configuration
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};


module.exports = nextConfig
