"use client";
import { useState } from "react";

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
import { ApplicationManagement, InterviewManagement,EmploymentDetails ,InterviewAvailability} from "./components/my-profile/EmployementDetail";
import EmploymentInfoBox from "./components/EmploymentInfoBox";
import WorkExperiencesBox from "./components/WorkExperiencesBox";
import {Document,FileCard} from "./components/my-profile/Document";

const index = () => {
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
        <div className="dashboard-outer">
          <BreadCrumb title="Profile!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>My Profile</h4>
                  </div>
                  <MyProfile />
                </div>
              </div>
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Contact Information</h4>
                  </div>
                  {/* End .widget-title */}

                  <div className="widget-content">
                    <ContactInfoBox />
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Employment Information</h4>
                  </div>
                  <div className="widget-content">
                    <EmploymentInfoBox />
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Work Experiences</h4>
                  </div>
                  <div className="widget-content">
                    <WorkExperiencesBox/>
                  </div>
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Employement Detail</h4>
                  </div>
                  {/* End .widget-title */}

                  <div className="widget-content">
                    <EmploymentDetails />
                  </div>
                </div>
              </div>
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Interview Availability</h4>
                  </div>
                  {/* End .widget-title */}

                  <div className="widget-content">
                    <InterviewAvailability />
                  </div>
                </div>
              </div>
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Documents</h4>
                  </div>
                  {/* End .widget-title */}

                  <div className="widget-content">
                    <FileCard />
                  </div>
                </div>
              </div>
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Upload Document</h4>
                  </div>
                  {/* End .widget-title */}

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
                  {/* End .widget-title */}

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
                  {/* End .widget-title */}

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
                  {/* End .widget-title */}
                  <div className="widget-content">
                    <SocialNetworkBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              {/* <!-- Ls widget --> */}
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
