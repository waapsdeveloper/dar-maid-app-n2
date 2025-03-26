"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import employerMenuData from "../../data/employerMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/authSlice"; // Apni Redux action import karo
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  const handleLogout = () => {
    dispatch(logout()); // Redux state clear karo
    router.push("/"); // Redux store clear karo
    localStorage.clear(); // localStorage remove karo
  };

  return (
    <header
      className={`main-header header-shaddow ${navbar ? "fixed-header" : ""}`}
    >
      <div className="container-fluid">
        <div className="main-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    alt="brand"
                    src="/images/logo.png"
                    width={154}
                    height={50}
                    priority
                  />
                </Link>
              </div>
            </div>

            <HeaderNavContent />
          </div>

          <div className="outer-box">
            <button className="menu-btn">
              <span className="count">1</span>
              <span className="icon la la-heart-o"></span>
            </button>

            <button className="menu-btn">
              <span className="icon la la-bell"></span>
            </button>

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

              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  {employerMenuData.map((item) => (
                    <li
                      className={`${
                        isActiveLink(item.routePath, usePathname())
                          ? "active"
                          : ""
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
                        <Link href={item.routePath}>
                          <i className={`la ${item.icon}`}></i> {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
