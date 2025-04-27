"use client";

import React, { useState, useRef, useEffect } from "react";
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import BreadCrumb from "../../BreadCrumb";
import FormInfoBox from "./components/my-profile/FormInfoBox";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import DashboardCandidatesSidebar from "@/components/header/DashboardCandidatesSidebar";
import {
  ApplicationManagement,
  InterviewManagement,
  EmploymentDetails,
  InterviewAvailability,
} from "./components/my-profile/EmployementDetail";
import EmploymentInfoBox from "./components/EmploymentInfoBox";
import WorkExperiencesBox from "./components/WorkExperiencesBox";
import { Document, FileCard } from "./components/my-profile/Document";

const index = () => {
  const [activeTab, setActiveTab] = useState("MyProfile");
  const scrollRef = useRef(null);
  const tabs = [
    {
      name: "MyProfile",
      label: "Employee's Profile",
      component: <FormInfoBox />,
    },
    {
      name: "ContactInfoBox",
      label: "Contact Information",
      component: <ContactInfoBox />,
    },
    // { name: "EmploymentInfoBox", label: "Employment Information", component: <EmploymentInfoBox /> },
    {
      name: "WorkExperiencesBox",
      label: "Work Experiences",
      component: <WorkExperiencesBox />,
    },
    {
      name: "EmploymentDetails",
      label: "Employment Details",
      component: <EmploymentDetails />,
    },
    // { name: "InterviewAvailability", label: "Interview Availability", component: <InterviewAvailability /> },
    // { name: "FileCard", label: "View All Documents", component: <FileCard /> },
    { name: "Document", label: "Upload Document", component: <Document /> },
    {
      name: "ApplicationManagement",
      label: "Application Management",
      component: <ApplicationManagement />,
    },
    {
      name: "InterviewManagement",
      label: "Interview Management",
      component: <InterviewManagement />,
    },
    {
      name: "SocialNetworkBox",
      label: "Social Networks",
      component: <SocialNetworkBox />,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 150;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                      className="px-1"
                    >
                      {/* Left Arrow */}
                      <button
                        onClick={() => scroll("left")}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#696969",
                          cursor: "pointer",
                        }}
                      >
                        <FaArrowLeft size={14} />
                      </button>

                      <div
                        style={{
                          flex: 1,
                          overflow: "hidden",
                          position: "relative",
                        }}
                        className="  px-2 "
                      >
                        <div
                          ref={scrollRef}
                          style={{
                            display: "flex",
                            overflowX: "auto", // important!!
                            scrollBehavior: "smooth", // optional for nice scrolling
                            whiteSpace: "nowrap",
                            flexWrap: "nowrap",
                            minHeight: "60px",
                            msOverflowStyle: "none", // hide scrollbar in IE/Edge
                            scrollbarWidth: "none", // hide scrollbar in Firefox
                          }}
                        >
                          <ul
                            className="nav nav-tabs"
                            style={{
                              display: "flex",
                              flexWrap: "nowrap",
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            {tabs.map((tab) => (
                              <li
                                key={tab.name}
                                className="nav-item"
                                style={{
                                  height: "100%",
                                  flex: "0 0 auto",
                                  // important to prevent shrinking
                                }}
                              >
                                <button
                                  className={`nav-link ${
                                    activeTab === tab.name ? "active" : ""
                                  }`}
                                  onClick={() => setActiveTab(tab.name)}
                                  style={{
                                    height: "100%",
                                    padding: "0.3rem 0.8rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    fontSize: "1.1rem",
                                    whiteSpace: "nowrap",
                                    backgroundColor:
                                      activeTab === tab.name
                                        ? "#1a73e8"
                                        : "transparent",
                                    color:
                                      activeTab === tab.name
                                        ? "white"
                                        : "black",
                                  }}
                                >
                                  {tab.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Arrow */}
                      <button
                        onClick={() => scroll("right")}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#696969",
                          cursor: "pointer",
                        }}
                      >
                        <FaArrowRight size={14} />
                      </button>
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
