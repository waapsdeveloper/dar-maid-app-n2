module.exports = [
  {
    id: 1,
    name: "Dashboard",
    icon: "la-home",
    routePath: "/panels/agency/dashboard",
    active: "active",
  },
  {
    id: 2,
    name: "Profile", // Changed from "Company Profile"
    icon: "la-user-circle",
    routePath: "/agency/profile",
    active: "",
  },
  {
    id: 3,
    name: "Employees", // Changed from "Post a New Job"
    icon: "la-user-friends",
    routePath: "/agency/employees",
    active: "",
  },
  {
    id: 4,
    name: "Interview", // Changed from "All Applicants"
    icon: "la-comments",
    routePath: "/agency/candidate/interview",
    active: "",
  },
  {
    id: 5,
    name: "Hirings",
    icon: "la-users", // Suitable icon for Hirings
    routePath: "/employer/hirings",
    active: "",
  },
  // {
  //   id: 7,
  //   name: "Logout",
  //   icon: "la-sign-out",
  //   routePath: "/",
  //   active: "",
  // },
  // ... rest of your original entries
];
