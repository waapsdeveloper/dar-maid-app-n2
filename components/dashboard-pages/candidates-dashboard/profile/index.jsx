"use client";
import { useState, useRef } from "react";

import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import DashboardCandidatesSidebar from "@/components/header/DashboardCandidatesSidebar";
import { ApplicationManagement, InterviewManagement, EmploymentDetails, InterviewAvailability } from "./components/my-profile/EmployementDetail";
import EmploymentInfoBox from "./components/EmploymentInfoBox";
import WorkExperiencesBox from "./components/WorkExperiencesBox";
import { Document, FileCard } from "./components/my-profile/Document";

const index = () => {
  const [activeTab, setActiveTab] = useState("MyProfile");
  const tabsRef = useRef(null);

  const tabs = [
    { name: "MyProfile", label: "Employee's Profile", component: <MyProfile /> },
    { name: "ContactInfoBox", label: "Contact Information", component: <ContactInfoBox /> },
    { name: "EmploymentInfoBox", label: "Employment Information", component: <EmploymentInfoBox /> },
    { name: "WorkExperiencesBox", label: "Work Experiences", component: <WorkExperiencesBox /> },
    { name: "EmploymentDetails", label: "Employment Details", component: <EmploymentDetails /> },
    { name: "InterviewAvailability", label: "Interview Availability", component: <InterviewAvailability /> },
    { name: "FileCard", label: "View All Documents", component: <FileCard /> },
    { name: "Document", label: "Upload Document", component: <Document /> },
    { name: "ApplicationManagement", label: "Application Management", component: <ApplicationManagement /> },
    { name: "InterviewManagement", label: "Interview Management", component: <InterviewManagement /> },
    { name: "SocialNetworkBox", label: "Employee's Social Networks", component: <SocialNetworkBox /> },
  ];

  const scrollTabs = (direction) => {
    const container = tabsRef.current;
    const scrollAmount = direction === "left" ? -300 : 300; // Adjusted scroll amount for better visibility
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

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

      <DashboardCandidatesSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer" style={{ padding: "0" }}>
          <BreadCrumb title="Profile!" />
          {/* breadCrumb */}

          <MenuToggler style={{ marginBottom: "0" }} />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* Tab Navigation */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      width: "100%", // Ensure the container takes full width
                    }}
                  >
                    {/* Left Arrow */}
                    <button
                      onClick={() => scrollTabs("left")}
                      style={{
                        padding: "0.5rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        flexShrink: 0, // Prevent arrow from shrinking
                      }}
                    >
                      ←
                    </button>

                    {/* Tabs Container */}
                    <div
                      ref={tabsRef}
                      style={{
                        overflowX: "hidden", // Hide default scrollbar
                        flex: 1, // Take remaining space
                        scrollBehavior: "smooth",
                        width: "100%", // Ensure full width
                      }}
                    >
                      <ul
                        className="nav nav-tabs"
                        style={{
                          display: "flex",
                          whiteSpace: "nowrap", // Keep tabs in a single line
                          flexWrap: "nowrap", // Prevent wrapping
                          minHeight: "60px", // Set a consistent height for the tabs container
                        }}
                      >
                        {tabs.map((tab) => (
                          <li
                            key={tab.name}
                            className="nav-item"
                            style={{
                              height: "100%", // Ensure the li takes the full height of the ul
                            }}
                          >
                            <button
                              className={`nav-link ${activeTab === tab.name ? "active" : ""}`}
                              onClick={() => setActiveTab(tab.name)}
                              style={{
                                minWidth: "150px", // Fixed width for all tabs
                                maxWidth: "150px", // Fixed width for all tabs
                                height: "100%", // Take the full height of the parent li
                                padding: "0.5rem", // Adjusted padding
                                display: "flex", // Make the button a flex container
                                justifyContent: "center", // Center the text horizontally
                                alignItems: "center", // Center the text vertically
                                textAlign: "center",
                                fontSize: "1.1rem", // Keeping the increased font size
                                whiteSpace: "normal", // Allow text wrapping
                                wordWrap: "break-word", // Ensure text wraps within the tab
                              }}
                            >
                              {tab.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Arrow */}
                    <button
                      onClick={() => scrollTabs("right")}
                      style={{
                        padding: "0.5rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        flexShrink: 0, // Prevent arrow from shrinking
                      }}
                    >
                      →
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="widget-content" style={{ paddingTop: "2rem", minHeight: "400px" }}>
                    {tabs.find((tab) => tab.name === activeTab)?.component}
                  </div>
                </div>
              </div>
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
  );
};

export default index;