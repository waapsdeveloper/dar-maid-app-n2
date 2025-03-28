// module.exports = [
//   {
//     id: 1,
//     name: "Dashboard",
//     icon: "la-home",
//     routePath: "/candidates-dashboard/dashboard",
//     active: "active",
//   },
//   {
//     id: 2,
//     name: "My Profile",
//     icon: "la-user-tie",
//     routePath: "/candidates-dashboard/my-profile",
//     active: "",
//   },
//   {
//     id: 3,
//     name: "My Resume",
//     icon: "la la-file-invoice",
//     routePath: "/candidates-dashboard/my-resume",
//     active: "",
//   },
//   {
//     id: 4,
//     name: "Applied Jobs",
//     icon: "la-briefcase",
//     routePath: "/candidates-dashboard/applied-jobs",
//     active: "",
//   },
//   {
//     id: 5,
//     name: "Job Alerts",
//     icon: "la la-bell",
//     routePath: "/candidates-dashboard/job-alerts",
//     active: "",
//   },
//   {
//     id: 6,
//     name: "Shortlisted Jobs",
//     icon: "la-bookmark-o",
//     routePath: "/candidates-dashboard/short-listed-jobs",
//     active: "",
//   },
//   {
//     id: 7,
//     name: "CV manager",
//     icon: "la la-file-invoice",
//     routePath: "/candidates-dashboard/cv-manager",
//     active: "",
//   },
//   {
//     id: 8,
//     name: "Packages",
//     icon: "la-box",
//     routePath: "/candidates-dashboard/packages",
//     active: "",
//   },
//   {
//     id: 9,
//     name: "Messages",
//     icon: "la-comment-o",
//     routePath: "/candidates-dashboard/messages",
//     active: "",
//   },
//   {
//     id: 10,
//     name: "Change Password",
//     icon: "la-lock",
//     routePath: "/candidates-dashboard/change-password",
//     active: "",
//   },
//   {
//     id: 11,
//     name: "Logout",
//     icon: "la-sign-out",
//     routePath: "/login",
//     active: "",
//   },
//   {
//     id: 12,
//     name: "Delete Profile",
//     icon: "la-trash",
//     routePath: "/",
//     active: "",
//   },
// ];

module.exports = [
  {
    id: 1,
    name: "Dashboard",
    icon: "la-home",
    routePath: "/candidate/dashboard",
    active: "active",
  },
  {
    id: 2,
    name: "Profile",  // Changed from "Company Profile"
    icon: "la-user-circle",
    routePath: "/candidate/profile",
    active: "",
  },
  {
    id: 3,
    name: "Employer",  // Changed from "Post a New Job"
    icon: "la-user-friends",
    routePath: "/candidate/employers",
    active: "",
  },
  {
    id: 4,
    name: "Agency",  // Changed from "Manage Jobs"
    icon: "la-building",
    routePath: "/candidate/agencies",
    active: "",
  },
  {
    id: 5,
    name: "Interview",  // Changed from "All Applicants"
    icon: "la-comments",
    routePath: "/candidate/interviews",
    active: "",
  },
  {
    id: 11,
    name: "Logout",
    icon: "la-sign-out",
    routePath: "/",
    active: "",
  },
  // ... rest of your original entries
];