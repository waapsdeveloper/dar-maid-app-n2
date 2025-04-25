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

  const tabs = [
    { name: "MyProfile", label: "Employee's Profile", component: <FormInfoBox /> },
    { name: "ContactInfoBox", label: "Contact Information", component: <ContactInfoBox /> },
    // { name: "EmploymentInfoBox", label: "Employment Information", component: <EmploymentInfoBox /> },
    { name: "WorkExperiencesBox", label: "Work Experiences", component: <WorkExperiencesBox /> },
    { name: "EmploymentDetails", label: "Employment Details", component: <EmploymentDetails /> },
    // { name: "InterviewAvailability", label: "Interview Availability", component: <InterviewAvailability /> },
    // { name: "FileCard", label: "View All Documents", component: <FileCard /> },
    { name: "Document", label: "Upload Document", component: <Document /> },
    { name: "ApplicationManagement", label: "Application Management", component: <ApplicationManagement /> },
    { name: "InterviewManagement", label: "Interview Management", component: <InterviewManagement /> },
    { name: "SocialNetworkBox", label: "Social Networks", component: <SocialNetworkBox /> },
  ];

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      <LoginPopup />
      <DashboardHeader />
      <MobileMenu />
      <DashboardCandidatesSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer" style={{ padding: "1rem" }}>
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
                    <div
                      style={{
                        flex: 1,
                        width: "100%",
                      }}
                    >
                      <ul
                        className="nav nav-tabs"
                        style={{
                          display: "flex",
                          whiteSpace: "nowrap",
                          flexWrap: "wrap", // Changed to wrap so tabs can go to next line
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
                                minWidth: "120px", // Reduced from 150px
                                maxWidth: "120px", // Reduced from 150px
                                height: "100%",
                                padding: "0.3rem,0.8rem,0.3rem,0.8rem", // Reduced padding from 0.5rem
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                fontSize: "1.1rem",
                                whiteSpace: "normal",
                                wordWrap: "break-word",
                                backgroundColor: activeTab === tab.name ? "#1a73e8" : "transparent",
                                color: activeTab === tab.name ? "white" : "black",
                              }}
                            >
                              {tab.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
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