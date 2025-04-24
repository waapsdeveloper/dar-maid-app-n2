'use client';

import React, { useState, useRef, useEffect } from "react";
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import BreadCrumb from "../../BreadCrumb";
import FormInfoBox from "./components/my-profile/FormInfoBox";
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
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const tabs = [
    { name: "MyProfile", label: "Employee's Profile", component: <FormInfoBox /> },
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
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateArrowVisibility = () => {
    const container = tabsRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding errors
    }
  };

  useEffect(() => {
    const container = tabsRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrowVisibility);
      updateArrowVisibility(); // Initial check
      return () => container.removeEventListener("scroll", updateArrowVisibility);
    }
  }, []);

  useEffect(() => {
    updateArrowVisibility(); // Update arrows when tab changes
  }, [activeTab]);

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      <LoginPopup />
      <DashboardHeader />
      <MobileMenu />
      <DashboardCandidatesSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer" style={{ padding: "1.5rem" }}>
          <BreadCrumb title="Profile!" />
          <MenuToggler style={{ marginBottom: "0" }} />

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <button
                      onClick={() => scrollTabs("left")}
                      style={{
                        padding: "0.5rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                        display: showLeftArrow ? "block" : "none",
                      }}
                    >
                      ←
                    </button>

                    <div
                      ref={tabsRef}
                      style={{
                        overflowX: "hidden",
                        flex: 1,
                        scrollBehavior: "smooth",
                        width: "100%",
                      }}
                    >
                      <ul
                        className="nav nav-tabs"
                        style={{
                          display: "flex",
                          whiteSpace: "nowrap",
                          flexWrap: "nowrap",
                          minHeight: "60px",
                        }}
                      >
                        {tabs.map((tab) => (
                          <li
                            key={tab.name}
                            className="nav-item"
                            style={{
                              height: "100%",
                            }}
                          >
                            <button
                              className={`nav-link ${activeTab === tab.name ? "active" : ""}`}
                              onClick={() => setActiveTab(tab.name)}
                              style={{
                                minWidth: "150px",
                                maxWidth: "150px",
                                height: "100%",
                                padding: "0.5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                fontSize: "1.1rem",
                                whiteSpace: "normal",
                                wordWrap: "break-word",
                              }}
                            >
                              {tab.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => scrollTabs("right")}
                      style={{
                        padding: "0.5rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                        display: showRightArrow ? "block" : "none",
                      }}
                    >
                      →
                    </button>
                  </div>

                  <div
                    className="widget-content"
                    style={{
                      padding: activeTab === "MyProfile" ? "2.5" : "2.5rem",
                      minHeight: "400px",
                    }}
                  >
                    {tabs.find((tab) => tab.name === activeTab)?.component}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CopyrightFooter />
    </div>
  );
};

export default index;