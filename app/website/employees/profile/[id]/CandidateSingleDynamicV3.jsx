'use client'

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import employeeProfile from "@/data/employee-profile";
import GalleryBox from "@/components/shared-components/GalleryBox";
import Social from "@/components/social/Social";
import JobSkills from "@/components/shared-components/JobSkills";
import AboutVideo from "@/components/shared-components/AboutVideo";
import Image from "next/image";
import WsPageOuter from "@/templates/layouts/ws-page-outer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faBirthdayCake,
  faDollarSign,
  faMoneyCheckAlt,
  faVenusMars,
  faLanguage,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import FancyTable from "@/templates/tables/fancy-table";

const CandidateSingleDynamicV3 = ({ params }) => {
  const id = params.id;
  const candidate = employeeProfile.find((item) => String(item.id) === id);
  const [activeTab, setActiveTab] = useState("MyProfile");
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Helper to format field names
  const formatFieldName = (fieldName) => {
    if (!fieldName || typeof fieldName !== 'string') return 'Unknown Field';
    let formatted = fieldName.replace(/_/g, ' ');
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
  const getKeyFields = (keys, keyName, isTable = false) => {
    try {
      const keyObj = keys?.find((k) => k.key === keyName);
      if (!keyObj || !Array.isArray(keyObj.value)) {
        console.warn(`No valid data found for ${keyName}`);
        return [];
      }

      if (isTable) {
        // For tables, create a single record from key-value pairs
        const formattedRecord = { id: `${keyName}-0` };
        keyObj.value.forEach((field) => {
          if (field.key && field.value !== undefined) {
            formattedRecord[field.key] = field.value;
          }
        });
        console.log(`Table data for ${keyName}:`, [formattedRecord]);
        return [formattedRecord];
      } else {
        // For list-based tabs, return raw key-value pairs
        const fields = keyObj.value.filter((field) => field.key && field.value !== undefined);
        console.log(`List data for ${keyName}:`, fields);
        return fields;
      }
    } catch (error) {
      console.error(`Error processing ${keyName} fields:`, error);
      return [];
    }
  };

  // Determine image source
  const getImageSrc = () => {
    return candidate?.profilePic || "/images/profession.jpeg";
  };

  if (!candidate) {
    return (
      <WsPageOuter>
        <section className="candidate-detail-section style-three">
          <div className="auto-container">
            <h4>Candidate Not Found</h4>
            <p>No candidate found with ID: {id}</p>
          </div>
        </section>
      </WsPageOuter>
    );
  }

  // Log candidate data for debugging
  console.log('Candidate data:', candidate);

  // Tab configuration
  const tabs = [
    { name: "MyProfile", label: "Employee Profile", keyName: "profile" },
    {
      name: "ContactInfoBox",
      label: "Contact Information",
      keyName: "contactInformation",
    },
    {
      name: "WorkExperiencesBox",
      label: "Work Experiences",
      keyName: "workExperience",
      isTable: true
    },
    {
      name: "EmploymentDetails",
      label: "Employment Details",
      keyName: "employmentDetails",
    },
    {
      name: "UploadDocument",
      label: "Upload Document",
      keyName: "uploadDocument",
      isTable: true
    },
    {
      name: "ApplicationManagement",
      label: "Application Management",
      keyName: "applicationManagement",
    },
    {
      name: "InterviewManagement",
      label: "Interview Management",
      keyName: "interviewManagement",
    },
    {
      name: "SocialNetworkBox",
      label: "Social Networks",
      keyName: "socialNetwork",
    },
  ];

  // Fields for Work Experience Table
  const workExperienceFields = [
    { name: "employerName", label: "Employer Name", key: "employerName", render: (row) => row.employerName || 'N/A' },
    { name: "employmentLocation", label: "Employment Location", key: "employmentLocation", render: (row) => row.employmentLocation || 'N/A' },
    { name: "employerPhone", label: "Employer Phone", key: "employerPhone", render: (row) => row.employerPhone || 'N/A' },
    { name: "employerEmail", label: "Employer Email", key: "employerEmail", render: (row) => row.employerEmail || 'N/A' },
    { name: "country", label: "Country", key: "country", render: (row) => row.country || 'N/A' },
    { name: "startDate", label: "Start Date", key: "startDate", render: (row) => row.startDate || 'N/A' },
    { name: "endDate", label: "End Date", key: "endDate", render: (row) => row.endDate || 'N/A' },
    { name: "designation", label: "Designation", key: "designation", render: (row) => row.designation || 'N/A' },
    { name: "previousSalary", label: "Previous Salary", key: "previousSalary", render: (row) => row.previousSalary || 'N/A' },
    { name: "benefits", label: "Benefits", key: "benefits", render: (row) => row.benefits || 'N/A' },
    { name: "rating", label: "Rating", key: "rating", render: (row) => row.rating || 'N/A' },
    { name: "employerReview", label: "Employer Review", key: "employerReview", render: (row) => row.employerReview || 'N/A' },
    { name: "petsExperience", label: "Pets Experience", key: "petsExperience", render: (row) => row.petsExperience || 'N/A' },
    { name: "comfortableWithPets", label: "Comfortable with Pets", key: "comfortableWithPets", render: (row) => row.comfortableWithPets || 'N/A' },
  ];

  // Fields for Upload Document Table (all 8 keys)
  const uploadDocumentFields = [
    { name: "category", label: "Category", key: "category", render: (row) => row.category || 'N/A' },
    { name: "file", label: "File", key: "file", render: (row) => row.file || 'N/A' },
    { name: "expiryDate", label: "Expiry Date", key: "expiryDate", render: (row) => row.expiryDate || 'N/A' },
    { name: "currentStatus", label: "Current Status", key: "currentStatus", render: (row) => row.currentStatus || 'N/A' },
    { name: "issuingCountry", label: "Issuing Country", key: "issuingCountry", render: (row) => row.issuingCountry || 'N/A' },
    { name: "currentLocation", label: "Current Location", key: "currentLocation", render: (row) => row.currentLocation || 'N/A' },
    { name: "workAvailableImmediately", label: "Work Available Immediately", key: "workAvailableImmediately", render: (row) => row.workAvailableImmediately || 'N/A' },
    { name: "numberOfDays", label: "Number of Days", key: "numberOfDays", render: (row) => row.numberOfDays || 'N/A' },
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
      <section className="candidate-detail-section style-three">
        <div className="upper-box">
          <div className="auto-container">
            <div className="candidate-block-six">
              <div className="inner-box">
                <figure className="image">
                  <Image
                    width={100}
                    height={100}
                    src={getImageSrc()}
                    alt={candidate.name || "Candidate"}
                  />
                </figure>
                <h4 className="name">{candidate.name || "N/A"}</h4>
                <span className="designation">
                  {findKeyValue(candidate.keys, "profile", "role", "N/A")}
                </span>

                <div className="content">
                  <ul className="post-tags">
                    {findKeyValue(
                      candidate.keys,
                      "employmentDetails",
                      "skills",
                      "No Skills"
                    )
                      .split(", ")
                      .map((val, i) => (
                        <li key={i}>{val}</li>
                      ))}
                  </ul>
                  <ul className="candidate-info">
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {findKeyValue(
                        candidate.keys,
                        "contactInformation",
                        "city",
                        "Unknown"
                      )}
                    </li>
                    <li>
                      <span className="icon flaticon-money"></span> $
                      {findKeyValue(
                        candidate.keys,
                        "employmentDetails",
                        "salary",
                        "0"
                      )}{" "}
                      / hour
                    </li>
                    <li>
                      <span className="icon flaticon-clock"></span> Member
                      Since,{" "}
                      {findKeyValue(
                        candidate.keys,
                        "profile",
                        "dob",
                        "Unknown"
                      ).slice(0, 4)}
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
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                          <FontAwesomeIcon 
                            icon={faCalendarAlt} 
                            style={{ 
                              color: "#8C956B", 
                              width: "16px", 
                              height: "16px", 
                              marginRight: "10px" 
                            }} 
                          />
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h5>Experience:</h5>
                            <span>
                              {findKeyValue(
                                candidate.keys,
                                "employmentDetails",
                                "experience",
                                "0"
                              )}{" "}
                              Years
                            </span>
                          </div>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                          <FontAwesomeIcon 
                            icon={faBirthdayCake} 
                            style={{ 
                              color: "#8C956B", 
                              width: "16px", 
                              height: "16px", 
                              marginRight: "10px" 
                            }} 
                          />
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h5>Age:</h5>
                            <span>
                              {findKeyValue(
                                candidate.keys,
                                "profile",
                                "age",
                                "N/A"
                              )}
                            </span>
                          </div>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                          <FontAwesomeIcon 
                            icon={faDollarSign} 
                            style={{ 
                              color: "#8C956B", 
                              width: "16px", 
                              height: "16px", 
                              marginRight: "10px" 
                            }} 
                          />
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h5>Current Salary:</h5>
                            <span>
                              $
                              {findKeyValue(
                                candidate.keys,
                                "employmentDetails",
                                "salary",
                                "0"
                              )}
                            </span>
                          </div>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                          <FontAwesomeIcon 
                            icon={faMoneyCheckAlt} 
                            style={{ 
                              color: "#8C956B", 
                              width: "16px", 
                              height: "16px", 
                              marginRight: "10px" 
                            }} 
                          />
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h5>Expected Salary:</h5>
                            <span>
                              $
                              {parseInt(
                                findKeyValue(
                                  candidate.keys,
                                  "employmentDetails",
                                  "salary",
                                  "0"
                                )
                              ) + 200}
                            </span>
                          </div>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                          <FontAwesomeIcon 
                            icon={faVenusMars} 
                            style={{ 
                              color: "#8C956B", 
                              width: "16px", 
                              height: "16px", 
                              marginRight: "10px" 
                            }} 
                          />
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h5>Gender:</h5>
                            <span>
                              {findKeyValue(
                                candidate.keys,
                                "profile",
                                "gender",
                                "N/A"
                              )}
                            </span>
                          </div>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                          <FontAwesomeIcon 
                            icon={faLanguage} 
                            style={{ 
                              color: "#8C956B", 
                              width: "16px", 
                              height: "16px", 
                              marginRight: "10px" 
                            }} 
                          />
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h5>Language:</h5>
                            <span>
                              {findKeyValue(
                                candidate.keys,
                                "contactInformation",
                                "preferred_language",
                                "English"
                              )}
                            </span>
                          </div>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                          <FontAwesomeIcon 
                            icon={faGraduationCap} 
                            style={{ 
                              color: "#8C956B", 
                              width: "16px", 
                              height: "16px", 
                              marginRight: "10px" 
                            }} 
                          />
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h5>Education Level:</h5>
                            <span>
                              {findKeyValue(
                                candidate.keys,
                                "employmentDetails",
                                "employeeCategory",
                                "N/A"
                              )}
                            </span>
                          </div>
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
                          skills={findKeyValue(
                            candidate.keys,
                            "employmentDetails",
                            "skills",
                            ""
                          ).split(", ")}
                        />
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>

              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-detail">
                  <h4>Employees About</h4>
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
                            cursor:
                              scrollPosition === 0 ? "not-allowed" : "pointer",
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
                            background: "#8C956B",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor:
                              scrollPosition >= maxScroll
                                ? "not-allowed"
                                : "pointer",
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
                            {tab.isTable ? (
                              <FancyTable
                                fields={tab.name === "WorkExperiencesBox" ? workExperienceFields : uploadDocumentFields}
                                data={getKeyFields(candidate.keys, tab.keyName, true)}
                                title={tab.name === "WorkExperiencesBox" ? "Work Experiences" : "Uploaded Documents"}
                                filterOptions={[]}
                              />
                            ) : (
                              <ul className="list-unstyled mb-0 job-overview">
                                {getKeyFields(candidate.keys, tab.keyName).length > 0 ? (
                                  getKeyFields(candidate.keys, tab.keyName).map(
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
                                          {field.value || "N/A"}
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
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
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

export default CandidateSingleDynamicV3;