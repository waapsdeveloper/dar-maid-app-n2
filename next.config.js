/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/employers",
        destination: "/employers-list-v3",
      },
      {
        source: "/candidates",
        destination: "/candidates-list-v2",
      },
      {
        source: "/agency",
        destination: "/job-list-v1",
      },
      {
      source:"/agency-details/:slug",
      destination: "/job-single-v1/:slug",
      },
      {
        source: "/services/:slug",
        destination: "/offerings/:slug",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/old-team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/promo",
        destination: "/special-offer",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
  images: {
    domains: ["your-cdn-domain.com", "images.unsplash.com"],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
