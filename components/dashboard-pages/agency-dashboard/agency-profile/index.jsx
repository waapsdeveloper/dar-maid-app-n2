'use client';

import React, { useState } from "react";
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import DashboardAgencySidebar from "@/components/header/DashboardAgencySidebar";
import EmployementDetail from "./components/my-profile/EmployementDetail";
import InterviewAvailability from "./components/my-profile/InterviewAvailability";
import Document from "./components/my-profile/Document";
import { ApplicationManagement, InterviewManagement } from "./components/my-profile/JobApplication";
import LegalComplianceInfo from "./components/my-profile/LegalComplianceInfo";
import ServiceOfferingDetails from "./components/my-profile/ServicesOffering";

const index = () => {
  const [activeTab, setActiveTab] = useState("general-info");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for height --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardAgencySidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer" style={{ padding: "0.5rem 1rem" }}> {/* Adjusted padding: 0.5rem top-bottom, 1rem left-right */}
          <BreadCrumb title="Agency Profile!" />
          {/* breadCrumb */}

          <MenuToggler style={{ marginBottom: "0" }} /> {/* Keeping marginBottom: "0" to reduce space */}
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* Tabs Navigation */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <ul
                    className="nav nav-tabs"
                    style={{
                      display: "flex",
                      whiteSpace: "normal", // Allow wrapping if needed
                      flexWrap: "wrap", // Allow wrapping for better responsiveness
                      minHeight: "80px", // Increased height as requested
                    }}
                  >
                    <li
                      className="nav-item"
                      style={{
                        height: "100%",
                      }}
                    >
                      <button
                        className={`nav-link ${activeTab === "general-info" ? "active" : ""}`}
                        onClick={() => handleTabClick("general-info")}
                        style={{
                          minWidth: "150px",
                          maxWidth: "150px",
                          height: "100%",
                          padding: "0.5rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          fontSize: "1.2rem", // Increased font size as requested
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }}
                      >
                        Agency Profile Info
                      </button>
                    </li>
                    <li
                      className="nav-item"
                      style={{
                        height: "100%",
                      }}
                    >
                      <button
                        className={`nav-link ${activeTab === "legal-compliance" ? "active" : ""}`}
                        onClick={() => handleTabClick("legal-compliance")}
                        style={{
                          minWidth: "150px",
                          maxWidth: "150px",
                          height: "100%",
                          padding: "0.5rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          fontSize: "1.2rem",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }}
                      >
                        Legal & Compliance
                      </button>
                    </li>
                    <li
                      className="nav-item"
                      style={{
                        height: "100%",
                      }}
                    >
                      <button
                        className={`nav-link ${activeTab === "services" ? "active" : ""}`}
                        onClick={() => handleTabClick("services")}
                        style={{
                          minWidth: "150px",
                          maxWidth: "150px",
                          height: "100%",
                          padding: "0.5rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          fontSize: "1.2rem",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }}
                      >
                        Services & Offerings
                      </button>
                    </li>
                  </ul>

                  {/* Tab Content */}
                  <div className="tab-content" style={{ paddingTop: "2rem" }}>
                    {activeTab === "general-info" && (
                      <div
                        className="widget-content"
                        style={{ minHeight: "400px", padding: "10px" }}
                      >
                        <MyProfile />
                      </div>
                    )}
                    {activeTab === "legal-compliance" && (
                      <div
                        className="widget-content"
                        style={{ minHeight: "400px", padding: "10px 2.5rem 10px 2.5rem" }}
                      >
                        <LegalComplianceInfo />
                      </div>
                    )}
                    {activeTab === "services" && (
                      <div
                        className="widget-content"
                        style={{ minHeight: "400px", padding: "10px 2.5rem 10px 2.5rem" }}
                      >
                        <ServiceOfferingDetails />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Commented out other components as per request */}
              {/*
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Contact Information</h4>
                  </div>
                  <div className="widget-content">
                    <ContactInfoBox />
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Employement Detail</h4>
                  </div>
                  <div className="widget-content">
                    <EmployementDetail />
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Interview Availability</h4>
                  </div>
                  <div className="widget-content">
                    <InterviewAvailability />
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Document</h4>
                  </div>
                  <div className="widget-content">
                    <Document />
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Application Management</h4>
                  </div>
                  <div className="widget-content">
                    <ApplicationManagement />
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Interview Management</h4>
                  </div>
                  <div className="widget-content">
                    <InterviewManagement />
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Social Network</h4>
                  </div>
                  <div className="widget-content">
                    <SocialNetworkBox />
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
