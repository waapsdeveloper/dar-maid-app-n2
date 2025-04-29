import React from "react";
import MyProfile from "../../employee/profile/components/MyProfile";
import ContactInfoBox from "./components/ContactInfoBox";
import ResidenceInfo from "./components/ResidenceInfo";
import CommunicationCulturalFit from "./components/CommunicationCulruralFit";
import JobPreference from "./components/JobPreference";
import WorkScheduleOfferDetails from "./components/WorkScheduleDetails";
import InterviewAccountPreferences from "./components/InterviewAccountPreferences";

const ProfileCards = ({ activeTab }) => {
  const tabComponents = {
    MyProfile: <MyProfile />,
    ResidenceInfo: <ResidenceInfo />,
    ContactInfoBox: <ContactInfoBox />,
    CommunicationCulturalFit: <CommunicationCulturalFit />,
    JobPreference: <JobPreference />,
    WorkScheduleOfferDetails: <WorkScheduleOfferDetails />,
    InterviewAccountPreferences: <InterviewAccountPreferences />,
  };

  return <div>{tabComponents[activeTab]}</div>;
};

export default ProfileCards;