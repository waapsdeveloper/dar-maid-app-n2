module.exports = [
  {
    id: 1,
    title: "For Employees",
    menuList: [
      // { name: "Browse Jobs", route: "/job-list-v11" },
      { name: "Browse Categories", route: "/job-list-v3" },
      { name: "Employee Dashboard", route: "/admin-panels/employee/dashboard" },
      // { name: "Job Alerts", route: "/candidates-dashboard/job-alerts" },
      // {
      //   name: "My Bookmarks",
      //   route: "/candidates-dashboard/short-listed-jobs",
      // },
    ],
  },
  {
    id: 2,
    title: "For Employers",
    menuList: [
      {
        name: "Browse Employers",
        route: "/website/employers",
      },
      { name: "Employer Dashboard", route: "/admin-panels/employer/dashboard" },
      // { name: "Add Job", route: "/employers-dashboard/post-jobs" },
      // { name: "Job Packages", route: "/employers-dashboard/packages" },
    ],
  },
  {
    id: 3,
    title: "About Us",
    menuList: [
      { name: "About Us", route: "/website/about" },
      // { name: "Job Page Invoice", route: "/invoice" },
      { name: "Terms Page", route: "/website/terms" },
      { name: "Contact", route: "/website/contact" },
    ],
  },
  {
    id: 4,
    title: "Helpful Resources",
    menuList: [
      { name: "Terms of Use", route: "/website/terms" },
      // { name: "Privacy Center", route: "/" },
    ],
  },
];
