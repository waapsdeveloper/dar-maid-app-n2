/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      //Super admin
      {
        source: "/panels/superadmin/dashboard",
        destination: "/admin-panels/superadmin/dashboard",
      },

      // Employees / Candidates
      {
        source: "/panels/employee/dashboard",
        destination: "/admin-panels/employee/dashboard",
      },
      {
        source: "/panels/employee/profile",
        destination: "/admin-panels/employee/profile",
      },
      //employers
      {
        source: "/panels/employer/profile",
        destination: "/admin-panels/employer/profile",
      },

      {
        source: "/panels/employer/dashboard",
        destination: "/admin-panels/employer/dashboard",
      },
      //agency
      {
        source: "/panels/agency/dashboard",
        destination: "/admin-panels/agency/dashboard",
      },
      {
        source: "/panels/agency/profile",
        destination: "/admin-panels/agency/profile",
      },







      // Agency

      

      {
        source: "/candidates",
        destination: "/candidates-list-v2",
      },
      {
        source: "/candidates-details/:slug",
        destination: "/candidates-single-v1/:slug",
      },
      
      

      {
        source: "/candidate/profile",
        destination: "/candidates-dashboard/profile",
      },
      {
        source: "/candidate/profile/work-experience",
        destination: "/candidates-dashboard/profile/add-work-experience",
      },
      // {
      //   source: "/candidate/employers",
      //   destination: "/candidates-dashboard/employers",
      // },
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
      // {
      //   source: "/employer/dashboard",
      //   destination: "/employers-dashboard/dashboard",
      // },
      {
        source: "/new-request",
        destination: "/employers-dashboard/interview/new-interview-request",
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
        source: "/admin-panels/agency/profile",
        destination: "/agency-dashboard/agency-profile",
      },
      {
        source: "/agency/employees",
        destination: "/agency-dashboard/candidates",
      },
      {
        source: "/agency/employers/interviews",
        destination: "/agency-dashboard/employers-interviews",
      },
      {
        source: "/agency/candidate/interview",
        destination: "/agency-dashboard/interviews",
      },

      // Super Admin

      {
        source: "/superadmin/dashboard",
        destination: "/superadmin-dashboard/dashboard",
      },
      {
        source: "/superadmin/employees",
        destination: "/superadmin-dashboard/all-applicants",
      },
      {
        source: "/superadmin/agencies",
        destination: "/superadmin-dashboard/agencies",
      },
      {
        source: "/superadmin/employers",
        destination: "/superadmin-dashboard/employers",
      },
      {
        source: "/superadmin/interview-requests",
        destination: "/superadmin-dashboard/interview-requests",
      },
      {
        source: "/superadmin/query",
        destination: "/superadmin-dashboard/packages",
      },
      {
        source: "/superadmin/websites",
        destination: "/superadmin-dashboard/website",
      },
      {
        source: "/superadmin/auditlog",
        destination: "/superadmin-dashboard/auditlog",
      },
      {
        source: "/superadmin/report",
        destination: "/superadmin-dashboard/report-statistics",
      },
      {
        source: "/superadmin/services",
        destination: "/superadmin-dashboard/services",
      },
      {
        source: "/superadmin/countries",
        destination: "/superadmin-dashboard/countries",
      },
      {
        source: "/superadmin/cities",
        destination: "/superadmin-dashboard/cities",
      },
      {
        source: "/superadmin/states",
        destination: "/superadmin-dashboard/states",
      },
      {
        source: "/superadmin/profile",
        destination: "/superadmin-dashboard/company-profile",
      },
      {
        source: "/superadmin/roles",
        destination: "/superadmin-dashboard/roles",
      },
      {
        source: "/superadmin/view-roles",
        destination: "/superadmin-dashboard/crud/roles/view-roles",
      },
      {
        source: "/superadmin/add-roles",
        destination: "/superadmin-dashboard/crud/roles/add-roles",
      },
      {
        source: "/superadmin/add-employee",
        destination: "/superadmin-dashboard/crud/employee/add-employee",
      },
      {
        source: "/superadmin/edit-employee",
        destination: "/superadmin-dashboard/crud/employee/edit-employee",
      },
      {
        source: "/superadmin/add-agency",
        destination: "/superadmin-dashboard/crud/agency/add-agency",
      },
      {
        source: "/superadmin/edit-agency",
        destination: "/superadmin-dashboard/crud/agency/edit-agency",
      },
      {
        source: "/superadmin/add-employer",
        destination: "/superadmin-dashboard/crud/employers/add-employer",
      },
      {
        source: "/superadmin/edit-employer",
        destination: "/superadmin-dashboard/crud/employers/edit-employer",
      },
      {
        source: "/superadmin/view-interview-requests",
        destination:
          "/superadmin-dashboard/crud/interview-request/view-interview",
      },
      {
        source: "/superadmin/add-interview-requests",
        destination:
          "/superadmin-dashboard/crud/interview-request/add-interview",
      },
      {
        source: "/superadmin/edit-interview-requests",
        destination:
          "/superadmin-dashboard/crud/interview-request/edit-interview",
      },
      {
        source: "/superadmin/add-query",
        destination: "/superadmin-dashboard/crud/query/add-query",
      },
      {
        source: "/superadmin/edit-query",
        destination: "/superadmin-dashboard/crud/query/edit-query",
      },
      {
        source: "/superadmin/view-query",
        destination: "/superadmin-dashboard/crud/query/view-query",
      },
      {
        source: "/superadmin/add-website",
        destination: "/superadmin-dashboard/crud/website/add-website",
      },
      {
        source: "/superadmin/edit-website",
        destination: "/superadmin-dashboard/crud/website/edit-website",
      },
      {
        source: "/superadmin/view-website",
        destination: "/superadmin-dashboard/crud/website/view-website",
      },
      {
        source: "/superadmin/add-auditlog",
        destination: "/superadmin-dashboard/crud/website/add-auditlog",
      },
      {
        source: "/superadmin/edit-auditlog",
        destination: "/superadmin-dashboard/crud/website/edit-auditlog",
      },
      {
        source: "/superadmin/view-auditlog",
        destination: "/superadmin-dashboard/crud/website/view-auditlog",
      },
      {
        source: "/superadmin/add-report-statistics",
        destination: "/superadmin-dashboard/crud/website/add-report-statistics",
      },
      {
        source: "/superadmin/edit-report-statistics",
        destination:
          "/superadmin-dashboard/crud/website/edit-report-statistics",
      },
      {
        source: "/superadmin/view-report-statistics",
        destination:
          "/superadmin-dashboard/crud/website/view-report-statistics",
      },
      {
        source: "/superadmin/add-cities",
        destination: "/superadmin-dashboard/crud/cities/add-cities",
      },
      {
        source: "/superadmin/edit-cities",
        destination: "/superadmin-dashboard/crud/cities/edit-cities",
      },
      {
        source: "/superadmin/view-cities",
        destination: "/superadmin-dashboard/crud/cities/view-cities",
      },
      {
        source: "/superadmin/add-countries",
        destination: "/superadmin-dashboard/crud/countries/add-countries",
      },
      {
        source: "/superadmin/edit-countries",
        destination: "/superadmin-dashboard/crud/countries/edit-countries",
      },
      {
        source: "/superadmin/view-countries",
        destination: "/superadmin-dashboard/crud/countries/view-countries",
      },
      {
        source: "/superadmin/add-states",
        destination: "/superadmin-dashboard/crud/states/add-states",
      },
      {
        source: "/superadmin/edit-states",
        destination: "/superadmin-dashboard/crud/states/edit-states",
      },
      {
        source: "/superadmin/view-states",
        destination: "/superadmin-dashboard/crud/states/view-states",
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
