import React from "react";
import MyProfile from "./components/MyProfile";
import ContactInfoBox from "./components/ContactInfoBox";
import WorkExperiencesBox from "./components/WorkExperiencesBox";
import Document from "./components/Document";
import InterviewManagement from "./components/InterviewManagement";
import SocialNetworkBox from "./components/SocialNetworkBox";
import EmploymentDetails from "./components/EmployementDetails";
import ApplicationManagement from "./components/ApplicationManagement";

const ProfileCards = ({ activeTab }) => {
  const tabComponents = {
    MyProfile: <MyProfile />,
    ContactInfoBox: <ContactInfoBox />,
    WorkExperiencesBox: <WorkExperiencesBox />,
    EmploymentDetails: <EmploymentDetails />,
    Document: <Document />,
    ApplicationManagement: <ApplicationManagement />,
    InterviewManagement: <InterviewManagement />,
    SocialNetworkBox: <SocialNetworkBox />,
  };

  return <div>{tabComponents[activeTab]}</div>;
};

export default ProfileCards;