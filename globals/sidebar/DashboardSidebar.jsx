'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { menuToggle } from "@/features/toggle/toggleSlice";
import { logout } from "@/features/auth/authSlice";
import candidateMenuData from "@/data/candidatesMenuData";
import employerMenuData from "@/data/employerMenuData";

const DashboardSidebar = ({ headerType }) => {

  // Sidebar menu data
  const menuData = headerType === "candidate" ? candidateMenuData : employerMenuData;


  const { menu } = useSelector((state) => state.toggle);
  const percentage = 30;

  const router = useRouter();
  const dispatch = useDispatch();

  // Menu toggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
    router.push("/"); // Redirect to home page
  };

  // Helper function to check active link
  const isActiveLink = (routePath, currentPath) => routePath === currentPath;

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}

      <div className="sidebar-inner">
        <ul className="navigation">
          {menuData.map((item) => (
            <li
              className={`${
                isActiveLink(item.routePath, usePathname()) ? "active" : ""
              } mb-1`}
              key={item.id}
              onClick={menuToggleHandler}
            >
              {item.name === "Logout" ? (
                <Link href="/" onClick={handleLogout}>
                  <i className={`la ${item.icon}`}></i> {item.name}
                </Link>
              ) : (
                <Link href={item.routePath}>
                  <i className={`la ${item.icon}`}></i> {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>        
      </div>
    </div>
  );
};

export default DashboardSidebar;
