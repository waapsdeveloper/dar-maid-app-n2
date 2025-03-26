'use client'

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
  }, []);

  const handleLogout = () => {
    dispatch(logout()); // ✅ FIXED: Use the existing dispatch
    router.push("/"); // Redirect to home page
  };

  const handleClick = (item, e) => {
    e.preventDefault();

    if (item.name !== "Logout") {

      switch (user.role) {
        case "employer":
          router.push("/employer-dashboard");
          break;
        case "employee":
          router.push("/candidate-dashboard");
          break;
        case "agency":
          router.push("/agency-dashboard");
          break;
        case "superadmin":
          router.push("/superadmin-dashboard");
          break;
        default:
          router.push("/login"); // Default fallback
      }
    }
  };

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${navbar ? "fixed-header animated slideInDown" : ""}`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
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
          {/* End .logo-box */}

          <HeaderNavContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Add Listing --> */}
          {/* <Link href="/candidates-dashboard/cv-manager" className="upload-cv">
            Upload your CV
          </Link> */}
          {/* <!-- Login/Register --> */}
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

              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  {employerMenuData.map((item) => (
                    <li
                      className={`${isActiveLink(item.routePath, pathname) ? "active" : ""} mb-1`}
                      key={item.id}
                    >
                      {item.name === "Logout" ? (
                        <button onClick={handleLogout} className="dropdown-item">
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
              )}
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
              {/* <Link
                href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-one"
              >
                Job Post
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
