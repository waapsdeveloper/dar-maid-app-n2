module.exports = [
  {
    id: 1,
    name: "Dashboard",
    icon: "la-home",
    routePath: "/employers-dashboard/dashboard",
    active: "active",
  },
  {
    id: 2,
    name: "Profile",  // Changed from "Company Profile"
    icon: "la-user-circle",
    routePath: "/employers-dashboard/profile",
    active: "",
  },
  {
    id: 3,
    name: "Employee",  // Changed from "Post a New Job"
    icon: "la-user-friends",
    routePath: "/employers-dashboard/all-applicants",
    active: "",
  },
  {
    id: 4,
    name: "Agency",  // Changed from "Manage Jobs"
    icon: "la-building",
    routePath: "/employers-dashboard/agencies",
    active: "",
  },
  {
    id: 5,
    name: "Interview",  // Changed from "All Applicants"
    icon: "la-comments",
    routePath: "/employers-dashboard/interview",
    active: "",
  },
  {
    id: 11,
    name: "Logout",
    icon: "la-sign-out",
    routePath: "/login",
    active: "",
  },
  // ... rest of your original entries
];