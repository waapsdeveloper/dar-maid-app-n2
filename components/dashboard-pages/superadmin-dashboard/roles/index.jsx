"use client";
import { useState } from "react";
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardSuperAdminSidebar from "../../../header/DashboardSuperAdminSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import PackageDataTable from "./components/PackageDataTable";
import MenuToggler from "../../MenuToggler";
import Pagination from "./components/pagination";
import { useRouter } from "next/navigation";

const index = () => {
  const router = useRouter();

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardSuperAdminSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="All Roles!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title"
                    style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>

                    <h4 style={{ margin: 0 }}>Roles</h4>

                    <button
                      className="theme-btn btn-style-one"
                      style={{
                        padding: "10px 20px", 
                      }}
                      onClick={() => router.push("/superadmin/add-roles")} // Show the AddRole component on click
                    >
                      Add Role
                    </button>
                  </div>

                  {/* End widget-title */}

                  <div className="widget-content">
                    <div className="table-outer">
                      <PackageDataTable />
                    </div>
                  </div>
                  {/* End widget-content */}
                </div>
              </div>
              {/* <!-- Ls widget --> */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}
      <Pagination />


      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
