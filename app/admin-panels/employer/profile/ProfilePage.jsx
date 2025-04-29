'use client'

import { useState } from "react"; // Added useState for tabs functionality
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "../../../../app/admin-panels/employer/profile/components/SocialNetworkBox";
import ContactInfoBox from "../../../../app/admin-panels/employer/profile/components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import JobPreference from "../../../../app/admin-panels/employer/profile/components/JobPreference";
import InterviewManagement from "../../../../app/admin-panels/employer/profile/components/InterviewManagement";
import DocumentVerification from "../../../../app/admin-panels/employer/profile/components/DocumentVerification";
import ResidenceInfo from "../../../../app/admin-panels/employer/profile/components/ResidenceInfo";
import CommunicationCulturalFit from "../../../../app/admin-panels/employer/profile/components/CommunicationCulruralFit";
import WorkScheduleOfferDetails from "../../../../app/admin-panels/employer/profile/components/WorkScheduleDetails";
import InterviewAccountPreferences from "../../../../app/admin-panels/employer/profile/components/InterviewAccountPreferences";

const index = () => {
    // Added state for managing active tab
    const [activeTab, setActiveTab] = useState("MyProfile");

    // Tabs array similar to the first index.jsx
    const tabs = [
        { name: "MyProfile", label: "My Profile", component: <MyProfile /> },
        { name: "ResidenceInfo", label: "Residence Info", component: <ResidenceInfo /> },
        { name: "ContactInfoBox", label: "Contact Information", component: <ContactInfoBox /> },
        { name: "CommunicationCulturalFit", label: "Communication & Cultural Fit", component: <CommunicationCulturalFit /> },
        { name: "JobPreference", label: "Job Preference", component: <JobPreference /> },
        { name: "WorkScheduleOfferDetails", label: "Work Schedule Offer Details", component: <WorkScheduleOfferDetails /> },
        { name: "InterviewAccountPreferences", label: "Interview Account Preferences", component: <InterviewAccountPreferences /> },
    ];

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

            <DashboardEmployerSidebar />
            {/* <!-- End User Sidebar Menu --> */}

            {/* <!-- Dashboard --> */}
            <section className="user-dashboard">
                <div className="dashboard-outer" style={{ padding: "1rem" }}>
                    <BreadCrumb title="Profile!" />
                    {/* breadCrumb */}

                    <MenuToggler />
                    {/* Collapsible sidebar button */}

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
                                                    flexWrap: "wrap",
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
                                                                height: "100%",
                                                                padding: "20px,40px,14px,40px",
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
                                            padding: activeTab === "MyProfile" ? "2.5rem" : "2.5rem", // Fixed the invalid padding value from first file
                                            minHeight: "400px",
                                        }}
                                    >
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
        // End page-wrapper
    );
};

export default index;