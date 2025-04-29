"use client";

import React, { useState } from "react";
import DsPageOuter from "@/templates/layouts/ds-page-outer";
import candidatesMenuData from "@/data/candidatesMenuData";
import ProfileCards from "./profile-cards";
import ProfileTabs from "./profile-tabs";
import { ProfileTypes } from "@/data/globalKeys";

export const metadata = {
  title: "Packages || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("MyProfile");

  return (
    <>
    
      <DsPageOuter headerType={ProfileTypes.EMPLOYEE} title="Profile!" subtitle="Ready to jump back in?" menuData={candidatesMenuData}>
      
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProfileCards activeTab={activeTab} />
      
      </DsPageOuter>
    </>
  );
};

export default ProfilePage;
