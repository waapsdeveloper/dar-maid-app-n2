'use client'

import dynamic from "next/dynamic";
import employerProfile from "@/data/employer-profile";
import JobDetailsDescriptions from "@/components/shared-components/JobDetailsDescriptions";
import RelatedJobs from "@/components/related-jobs/RelatedJobs";
import MapJobFinder from "@/components/MapJobFinder";
import Social from "@/components/social/Social";
import Contact from "@/components/shared-components/Contact";
import Image from "next/image";
import WsPageOuter from "@/templates/layouts/ws-page-outer";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const EmployersSingleV3 = ({ params }) => {
  const id = params.id;
  const employer =
    employerProfile.find((item) => String(item.id) === id) || employerProfile[0] || {};

  // Helper to format field names
  const formatFieldName = (fieldName) => {
    // Replace underscores with spaces
    let formatted = fieldName.replace(/_/g, ' ');
    // Add space before capital letters and capitalize first letter
    formatted = formatted.replace(/([A-Z])/g, ' $1').trim();
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  // Helper to extract nested key values
  const findKeyValue = (keys, keyName, field, fallback = "N/A") => {
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

  // State for tabs
  const [activeTab, setActiveTab] = useState("MyProfile");
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Tab configuration
  const tabs = [
    { name: "MyProfile", label: "Employer Profile", keyName: "profile" },
    { name: "ResidenceInfo", label: "Residence Info", keyName: "residenceInformation" },
    { name: "ContactInfoBox", label: "Contact Info", keyName: "contactInformation" },
    { name: "CulturalFit", label: "Communication And Cultural Fit", keyName: "communicationAndCulturalFit" },
    { name: "JobPreference", label: "Job Preference", keyName: "jobPreference" },
    { name: "WorkSchedule", label: "Work Schedule", keyName: "workSchedule" },
    { name: "InterviewPreference", label: "Interview Preference", keyName: "interviewPreference" },
    { name: "SocialNetworkBox", label: "Social Networks", keyName: "socialNetworks" },
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
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
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
      setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
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
      <section className="job-detail-section">
        {/* <!-- Upper Box --> */}
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven style-three">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <Image
                      width={100}
                      height={100}
                      src={employer?.img || "/images/company/fallback.png"}
                      alt="logo"
                      onError={(e) => {
                        e.target.src = "/images/company/fallback.png";
                      }}
                    />
                  </span>
                  <h4>{employer?.name || "Unnamed Employer"}</h4>

                  <ul className="job-other-info">
                    <li className="time">Open Listings – {employer?.jobNumber || 0}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        {/* <!-- job-detail-outer--> */}
        <div className="job-detail-outer reverse">
          <div className="auto-container">
            <div className="row">
              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar pd-right">
                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <ul className="company-info mt-0">
                        <li>
                          Primary industry: <span>Software</span>
                        </li>
                        <li>
                          Company size: <span>501-1,000</span>
                        </li>
                        <li>
                          Founded in: <span>2011</span>
                        </li>
                        <li>
                          Phone: <span>{findKeyValue(employer.keys, "contactInformation", "phoneNumber", "N/A")}</span>
                        </li>
                        <li>
                          Email: <span>{findKeyValue(employer.keys, "contactInformation", "email", "N/A")}</span>
                        </li>
                        <li>
                          Location: <span>{employer?.location || "Unknown Location"}</span>
                        </li>
                        <li>
                          Social media:
                          <Social />
                        </li>
                      </ul>

                      <div className="btn-box">
                        <a
                          href="#"
                          className="theme-btn btn-style-three"
                          style={{ textTransform: "lowercase" }}
                        >
                          www.{employer?.name?.toLowerCase().replace(/\s+/g, "") || "employer"}.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <div className="sidebar-widget">
                    <h4 className="widget-title">Job Location</h4>
                    <div className="widget-content">
                      <div style={{ height: "300px", width: "100%" }}>
                        <MapJobFinder />
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="sidebar-widget contact-widget mb-0">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="default-form">
                      <Contact />
                    </div>
                  </div> */}
                </aside>
              </div>

              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-detail">
                  <h4>Employers About</h4>
                  <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <div
                        className="d-none d-md-flex align-items-center position-relative w-100"
                        style={{ overflow: "visible" }}
                      >
                        <button
                          onClick={scrollLeft}
                          style={{
                            background: "#8C956B",
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
                              className={`theme-btn ${activeTab === tab.name ? "btn-style-one" : "btn-style-three"}`}
                              style={{ flexShrink: 0 }}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={scrollRight}
                          style={{
                            background: "#8C956B",
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
                        className={`tab-pane ${activeTab === tab.name ? "active show" : ""}`}
                      >
                        <div className="card shadow-sm border-0 rounded-3">
                          <div className="card-body">
                            <ul className="list-unstyled mb-0 job-overview">
                              {getKeyFields(employer.keys, tab.keyName).length > 0 ? (
                                getKeyFields(employer.keys, tab.keyName).map((field, index) => (
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
                                      {field.value || "N/A"}
                                    </span>
                                  </li>
                                ))
                              ) : (
                                <p className="text-muted mb-0">No data available</p>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <JobDetailsDescriptions /> */}

                {/* <div className="related-jobs">
                  <div className="title-box">
                    <h3>3 Other listings available</h3>
                    <div className="text">
                      2020 listings live - 293 added today.
                    </div>
                  </div>

                  <RelatedJobs />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
    </WsPageOuter>
  );
};

export default dynamic(() => Promise.resolve(EmployersSingleV3), {
  ssr: false,
});