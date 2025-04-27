'use client'

import Link from "next/link";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname } from "next/navigation";
import { logout } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

const DashboardEmployerSidebar = () => {
  const { menu } = useSelector((state) => state.toggle);
  const router = useRouter();
  const dispatch = useDispatch();

  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div
      className={`user-sidebar ${menu ? "sidebar_open" : ""}`}
      style={{
        width: "calc(100% - 2rem)", // Reduced overall width by 2rem
        maxWidth: "250px", // Added max-width to ensure it doesn't get too wide
      }}
    >
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}

      <div
        className="sidebar-inner"
        style={{
          padding: "1rem", // As per your change
        }}
      >
        <ul
          className="navigation"
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          {employerMenuData.map((item) => (
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

export default DashboardEmployerSidebar;