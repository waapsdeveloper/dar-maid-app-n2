import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const scrollRef = useRef(null);

  const tabs = [
    { name: "MyProfile", label: "Employee's Profile" },
    { name: "ContactInfoBox", label: "Contact Information" },
    { name: "WorkExperiencesBox", label: "Work Experiences" },
    { name: "EmploymentDetails", label: "Employment Details" },
    { name: "Document", label: "Upload Document" },
    { name: "ApplicationManagement", label: "Application Management" },
    { name: "InterviewManagement", label: "Interview Management" },
    { name: "SocialNetworkBox", label: "Social Networks" },
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
    <div>
        <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-none d-md-flex align-items-center gap-2 flex-wrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`theme-btn ${activeTab === tab.name ? "btn-style-one" : "btn-style-three"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="d-md-none w-100">
                <select
                    className="form-select"
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name} value={tab.name}>
                            {tab.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    </div>
);
};

export default ProfileTabs;