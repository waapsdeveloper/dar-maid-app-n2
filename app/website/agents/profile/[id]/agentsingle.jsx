'use client'

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import agentData from "@/data/agent-profile";
import Contact from "@/components/shared-components/Contact";
import GalleryBox from "@/components/shared-components/GalleryBox";
import Social from "@/components/social/Social";
import JobSkills from "@/components/shared-components/JobSkills";
import AboutVideo from "@/components/shared-components/AboutVideo";
import Image from "next/image";
import WsPageOuter from "@/templates/layouts/ws-page-outer";

const AgentSingleProfile = ({ params }) => {
  const id = params.id;
  const agent = agentData.find((item) => String(item.id) === id);
  const [activeTab, setActiveTab] = useState("AgentProfile");
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Helper to format field names
  const formatFieldName = (fieldName) => {
    // Replace underscores with spaces
    let formatted = fieldName.replace(/_/g, ' ');
    // Add space before capital letters and capitalize first letter
    formatted = formatted.replace(/([A-Z])/g, ' $1').trim();
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  // Helper to extract nested key values
  const findKeyValue = (keys, keyName, field, fallback = "") => {
    try {
      const keyObj = keys?.find((k) => k.key === keyName);
      const fieldObj = keyObj?.value?.find((v) => v.key === field);
      return fieldObj?.value || fallback;
    } catch (error) {
      return fallback;
    }
  };

  // Helper to get all key-value pairs for a key
  const getKeyFields = (keys, keyName) => {
    try {
      const keyObj = keys?.find((k) => k.key === keyName);
      return keyObj?.value || [];
    } catch (error) {
      return [];
    }
  };

  // Determine image source
  const getImageSrc = () => {
    return agent?.profilePic || "/images/profession.jpeg";
  };

  if (!agent) {
    return (
      <WsPageOuter>
        <section className="candidate-detail-section style-three">
          <div className="auto-container">
            <h4>Agent Not Found</h4>
            <p>No agent found with ID: {id}</p>
          </div>
        </section>
      </WsPageOuter>
    );
  }

  // Tab configuration
  const tabs = [
    { name: "AgentProfile", label: "Agent Profile", keyName: "Agent Profile" },
    { name: "LegalCompliance", label: "Legal Compliance", keyName: "Legal Compliance" },
    { name: "ServicesOffering", label: "Services Offering", keyName: "Services Offering" },
  ];

  // Scroll handlers
  const scrollLeft = () => {
    if (scrollRef.current) {
      const newPosition = Math.max(scrollPosition - 150, 0);
      setScrollPosition(newPosition);
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const maxScroll =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newPosition = Math.min(scrollPosition + 150, maxScroll);
      setScrollPosition(newPosition);
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
      setMaxScroll(
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      setScrollPosition(container.scrollLeft);
      setMaxScroll(container.scrollWidth - container.clientWidth);
      container.addEventListener("scroll", handleScroll);
      const timer = setTimeout(() => {
        setScrollPosition(container.scrollLeft);
        setMaxScroll(container.scrollWidth - container.clientWidth);
      }, 100);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <WsPageOuter>
      <section className="agent-detail-section style-three">
        <div className="upper-box">
          <div className="auto-container">
            <div className="candidate-block-six">
              <div className="inner-box">
                <figure className="image">
                  <Image
                    width={100}
                    height={100}
                    src={getImageSrc()}
                    alt={agent.name || "Agent"}
                    onError={(e) => {
                      e.target.src = "/images/candidates/default-avatar.png";
                    }}
                  />
                </figure>
                <h4 className="name">{agent.name || "N/A"}</h4>
                <span className="designation">
                  {findKeyValue(agent.keys, "Legal Compliance", "agencyType", "N/A")}
                </span>

                <div className="content">
                  <ul className="post-tags">
                    {Array.isArray(findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services"))
                      ? findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services")
                      : findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services").split(", ")
                      .map((val, i) => (
                        <li key={i}>{val}</li>
                      ))}
                  </ul>
                  <ul className="candidate-info">
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {findKeyValue(agent.keys, "Agent Profile", "country", "Unknown")}
                    </li>
                    <li>
                      <span className="icon flaticon-money"></span>
                      {Array.isArray(findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services"))
                        ? findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services").join(", ")
                        : findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services")}
                    </li>
                    <li>
                      <span className="icon flaticon-clock"></span> Established Since,{" "}
                      {new Date().getFullYear() - parseInt(findKeyValue(agent.keys, "Legal Compliance", "yearsInOperation", "0"))}
                    </li>
                  </ul>
                  <div className="btn-box">
                    <button className="bookmark-btn">
                      <i className="flaticon-bookmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="candidate-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <ul className="job-overview">
                        <li>
                          <i className="icon icon-calendar"></i>
                          <h5>Years in Operation:</h5>
                          <span>
                            {findKeyValue(agent.keys, "Legal Compliance", "yearsInOperation", "0")} Years
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-expiry"></i>
                          <h5>License Expiry:</h5>
                          <span>
                            {findKeyValue(agent.keys, "Legal Compliance", "licenseExpiryDate", "N/A")}
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-rate"></i>
                          <h5>Services Offered:</h5>
                          <span>
                            {Array.isArray(findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services"))
                              ? findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services").join(", ")
                              : findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services")}
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-salary"></i>
                          <h5>Countries of Operation:</h5>
                          <span>
                            {Array.isArray(findKeyValue(agent.keys, "Services Offering", "countriesOfOperation", "N/A"))
                              ? findKeyValue(agent.keys, "Services Offering", "countriesOfOperation", "N/A").join(", ")
                              : findKeyValue(agent.keys, "Services Offering", "countriesOfOperation", "N/A")}
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-user-2"></i>
                          <h5>Agency Type:</h5>
                          <span>
                            {findKeyValue(agent.keys, "Legal Compliance", "agencyType", "N/A")}
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-language"></i>
                          <h5>Languages Spoken:</h5>
                          <span>
                            {findKeyValue(agent.keys, "Services Offering", "languagesSpoken", "N/A")}
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-degree"></i>
                          <h5>Employee Nationalities:</h5>
                          <span>
                            {Array.isArray(findKeyValue(agent.keys, "Services Offering", "employeeNationalities", "N/A"))
                              ? findKeyValue(agent.keys, "Services Offering", "employeeNationalities", "N/A").join(", ")
                              : findKeyValue(agent.keys, "Services Offering", "employeeNationalities", "N/A")}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget social-media-widget">
                    <h4 className="widget-title">Social media</h4>
                    <div className="widget-content">
                      <div className="social-links">
                        <Social />
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h4 className="widget-title">Professional Skills</h4>
                    <div className="widget-content">
                      <ul className="job-skills">
                        <JobSkills
                          skills={Array.isArray(findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services"))
                            ? findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services")
                            : findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services").split(", ")}
                        />
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>

              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-detail">
                  <h4>Agent About</h4>
                  <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <div
                        className="d-none d-md-flex align-items-center position-relative w-100"
                        style={{ overflow: "visible" }}
                      >
                        <button
                          onClick={scrollLeft}
                          style={{
                            background: "#1a73e8",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: scrollPosition === 0 ? "not-allowed" : "pointer",
                            opacity: scrollPosition === 0 ? 0.5 : 1,
                            zIndex: 1000,
                            position: "absolute",
                            left: "0",
                            top: "50%",
                            transform: "translateY(-50%)",
                            flexShrink: 0,
                          }}
                          disabled={scrollPosition === 0}
                        >
                          <FaChevronLeft size={20} />
                        </button>

                        <div
                          ref={scrollRef}
                          className="d-flex align-items-center gap-2 flex-nowrap"
                          style={{
                            overflowX: "auto",
                            scrollBehavior: "smooth",
                            whiteSpace: "nowrap",
                            width: "calc(100% - 90px)",
                            margin: "0 45px",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          {tabs.map((tab) => (
                            <button
                              key={tab.name}
                              onClick={() => setActiveTab(tab.name)}
                              className={`theme-btn ${
                                activeTab === tab.name
                                  ? "btn-style-one"
                                  : "btn-style-three"
                              }`}
                              style={{ flexShrink: 0 }}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={scrollRight}
                          style={{
                            background: "#1a73e8",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: scrollPosition >= maxScroll ? "not-allowed" : "pointer",
                            opacity: scrollPosition >= maxScroll ? 0.5 : 1,
                            zIndex: 1000,
                            position: "absolute",
                            right: "0",
                            top: "50%",
                            transform: "translateY(-50%)",
                            flexShrink: 0,
                          }}
                          disabled={scrollPosition >= maxScroll}
                        >
                          <FaChevronRight size={20} />
                        </button>
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
                  <div className="tab-content">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={`tab-pane ${
                          activeTab === tab.name ? "active show" : ""
                        }`}
                      >
                        <div className="card shadow-sm border-0 rounded-3">
                          <div className="card-body">
                            <ul className="list-unstyled mb-0 job-overview">
                              {getKeyFields(agent.keys, tab.keyName).length > 0 ? (
                                getKeyFields(agent.keys, tab.keyName).map(
                                  (field, index) => (
                                    <li
                                      key={index}
                                      className="d-flex align-items-center mb-2 px-0"
                                    >
                                      <h5
                                        className=""
                                        style={{
                                          minWidth: "180px",
                                        }}
                                      >
                                        {formatFieldName(field.key)}:
                                      </h5>
                                      <span className="text-dark">
                                        {Array.isArray(field.value)
                                          ? field.value.join(", ")
                                          : field.value || "N/A"}
                                      </span>
                                    </li>
                                  )
                                )
                              ) : (
                                <p className="text-muted mb-0">
                                  No data available
                                </p>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="portfolio-outer">
                    <div className="row">
                      <GalleryBox />
                    </div>
                  </div>

                  <div className="resume-outer theme-blue">
                    <div className="upper-title">
                      <h4>Work Experience</h4>
                    </div>
                    <div className="resume-block">
                      <div className="inner">
                        <span className="name">
                          {findKeyValue(agent.keys, "Agent Profile", "agencyName", "N/A")}
                        </span>
                        <div className="title-box">
                          <div className="info-box">
                            <h3>
                              {findKeyValue(agent.keys, "Legal Compliance", "agencyType", "N/A")}
                            </h3>
                            <span>
                              {findKeyValue(agent.keys, "Agent Profile", "country", "N/A")}
                            </span>
                          </div>
                          <div className="edit-box">
                            <span className="year">
                              {new Date().getFullYear() - parseInt(findKeyValue(agent.keys, "Legal Compliance", "yearsInOperation", "0"))} - Present
                            </span>
                          </div>
                        </div>
                        <div className="text">
                          Operating as a {findKeyValue(agent.keys, "Legal Compliance", "agencyType", "N/A")} agency, providing services such as{" "}
                          {Array.isArray(findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services"))
                            ? findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services").join(", ")
                            : findKeyValue(agent.keys, "Services Offering", "servicesProvided", "No Services")}.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="video-outer">
                    <h4>Intro Video</h4>
                    <AboutVideo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WsPageOuter>
  );
};

export default AgentSingleProfile;