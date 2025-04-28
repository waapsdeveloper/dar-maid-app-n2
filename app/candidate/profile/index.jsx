"use client";

import React, { useState } from "react";
import DsPageOuter from "@/templates/layouts/ds-page-outer";
import candidatesMenuData from "@/data/candidatesMenuData";
import ProfileCards from "./profile-cards";
import ProfileTabs from "./profile-tabs";

export const metadata = {
  title: "Packages || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  const [activeTab, setActiveTab] = useState("MyProfile");

  return (
    <>
    
      <DsPageOuter headerType={'candidate'} title="Profile!" subtitle="Ready to jump back in?" menuData={candidatesMenuData}>
      
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProfileCards activeTab={activeTab} />
      
      </DsPageOuter>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
