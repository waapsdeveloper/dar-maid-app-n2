
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

const DefaulHeader2 = () => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  
  const [navbar, setNavbar] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  

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

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
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
           <a
             className="dropdown-toggle"
             role="button"
             data-bs-toggle="dropdown"
             aria-expanded="false"
           >
             {/* <Image
               alt="avatar"
               className="thumb"
               src={user?.avatar || "/images/resource/company-6.png"} // Use user's avatar or fallback
               width={50}
               height={50}
             /> */}
             <span className="name">{user?.name}</span>
           </a>

           <ul className="dropdown-menu">
             {/* Display user info and logout inside the dropdown */}
             <li className="user-info">
               <p>Name: {user?.name}</p>
               <p>Email: {user?.email}</p>
             </li>

             <li className="logout-btn">
               <button onClick={handleLogout} className="theme-btn btn-style-one">
                 Logout
               </button>
             </li>

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
