"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const DefaulHeader2 = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [navbar, setNavbar] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  const handleClick = (item, e) => {
    e.preventDefault();

    if (item.name !== "Logout") {
      switch (user.role) {
        case "employer":
          router.push("/employer/dashboard");
          break;
        case "employee":
          router.push("/panels/employee/dashboard");
          break;
        case "agency":
          router.push("/panels/agency/dashboard");
          break;
        case "superadmin":
          router.push("/superadmin/dashboard");
          break;
        default:
          router.push("/login");
      }
    }
  };

  return (
    <header
      className={`main-header ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      <div className="main-box">
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <Image
                  width={154}
                  height={50}
                  src="/images/logo.png"
                  alt="brand"
                />
              </Link>
            </div>
          </div>

          <HeaderNavContent />
        </div>

        <div className="outer-box">
          {isAuthenticated ? (
            <div className="dropdown dashboard-option">
              <button
                className="dropdown-toggle"
                role="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Image
                  alt="avatar"
                  className="thumb"
                  src="/images/resource/company-6.png"
                  width={50}
                  height={50}
                />
                <span className="name">{user?.name}</span>
              </button>

              {/* Dropdown: Always render <ul>, conditionally populate it */}
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                {dropdownOpen &&
                  employerMenuData.map((item) => (
                    <li
                      className={`${
                        isActiveLink(item.routePath, pathname) ? "active" : ""
                      } mb-1`}
                      key={item.id}
                    >
                      {item.name === "Logout" ? (
                        <button
                          onClick={handleLogout}
                          className="dropdown-item"
                        >
                          <i className={`la ${item.icon}`}></i> {item.name}
                        </button>
                      ) : (
                        <a onClick={(e) => handleClick(item, e)}>
                          <i className={`la ${item.icon}`}></i> {item.name}
                        </a>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <div className="btn-box">
              <a
                href="#"
                className="theme-btn btn-style-three call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                Login / Register
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
