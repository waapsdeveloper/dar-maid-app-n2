/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Employees / Candidates
      {
        source: "/candidates",
        destination: "/candidates-list-v2",
      },
      {
        source: "/candidates-details/:slug",
        destination: "/candidates-single-v1/:slug",
      },
      {
        source: "/candidate/dashboard",
        destination: "/candidates-dashboard/dashboard",
      },
      {
        source: "/candidate/profile",
        destination: "/candidates-dashboard/profile",
      },
      {
        source: "/candidate/employers",
        destination: "/candidates-dashboard/employers",
      },
      {
        source: "/candidate/agencies",
        destination: "/candidates-dashboard/agencies",
      },
      {
        source: "/candidate/interviews",
        destination: "/candidates-dashboard/interview",
      },








      // Employers
      {
        source: "/employers",
        destination: "/employers-list-v3",
      },
      {
        source: "/employers-details/:slug",
        destination: "/employers-single-v2/:slug",
      },
      {
        source: "/employer/dashboard",
        destination: "/employers-dashboard/dashboard",
      },
      {
        source: "/employer/profile",
        destination: "/employers-dashboard/company-profile",
      },
      {
        source: "/employer/employees",
        destination: "/employers-dashboard/all-applicants",
      },
      {
        source: "/employer/agencies",
        destination: "/employers-dashboard/agencies",
      },
      {
        source: "/employer/interviews",
        destination: "/employers-dashboard/interview",
      },
      {
        source: "/employer-dashboard/interviews",
        destination: "/employers-dashboard/interview",
      },
      {
        source: "/employer/profile",
        destination: "/employers-dashboard/company-profile",
      },





    // Agency 
  

      {
        source: "/agency",
        destination: "/job-list-v1",
      },
      {
        source: "/agency-details/:slug",
        destination: "/job-single-v1/:slug",
      },

      {
        source: "/agency/dashboard",
        destination: "/agency-dashboard/dashboard",
      },
      {
        source: "/superadmin/dashboard",
        destination: "/superadmin-dashboard/dashboard",
      },
      {
        source: "/new-request",
        destination: "/employers-dashboard/interview/new-interview-request",
      },

      {
        source: "/agency/profile",
        destination: "/agency-dashboard/agency-profile",
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
