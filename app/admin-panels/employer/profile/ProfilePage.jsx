"use client";

import React, { useState } from "react";
import DsPageOuter from "@/templates/layouts/ds-page-outer";
import ProfileCards from "./profile-cards";
import ProfileTabs from "./profile-tabs";
import candidatesMenuData from "@/data/candidatesMenuData";

export const metadata = {
  title: "Packages || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("MyProfile");

  return (
    <>
      <DsPageOuter
        headerType={"candidate"}
        title="Profile!"
        subtitle="Ready to jump back in?"
        menuData={candidatesMenuData}
      >
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProfileCards activeTab={activeTab} />
      </DsPageOuter>
    </>
  );
};

export default ProfilePage;
