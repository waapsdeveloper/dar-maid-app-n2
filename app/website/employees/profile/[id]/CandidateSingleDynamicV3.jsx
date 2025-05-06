"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import employeeProfile from "@/data/employee-profile";
import Contact from "@/components/shared-components/Contact";
import GalleryBox from "@/components/shared-components/GalleryBox";
import Social from "@/components/social/Social";
import JobSkills from "@/components/shared-components/JobSkills";
import AboutVideo from "@/components/shared-components/AboutVideo";
import Image from "next/image";
import WsPageOuter from "@/templates/layouts/ws-page-outer";

const CandidateSingleDynamicV3 = ({ params }) => {
  const id = params.id;
  const candidate = employeeProfile.find((item) => String(item.id) === id);
  const [activeTab, setActiveTab] = useState("MyProfile");
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

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
    if (candidate?.profilePic) {
      // Remove leading "/images/" if present to avoid double prefix
      const cleanedProfilePic = candidate.profilePic.replace(/^\/images\//, "");
      return `/images/candidates/${cleanedProfilePic}`;
    }
    if (candidate?.keys) {
      const profileImage = findKeyValue(
        candidate.keys,
        "profile",
        "profileImage",
        ""
      );
      if (profileImage) return `/images/candidates/${profileImage}`;
    }
    return "/images/candidates/default-avatar.png";
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
                    onError={(e) => {
                      e.target.src = "/images/candidates/default-avatar.png";
                    }}
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
                    {/* <a
                                            className="theme-btn btn-style-one"
                                            href={`/images/candidates/${findKeyValue(candidate.keys, "uploadDocument", "file", "sample.pdf")}`}
                                            download
                                        >
                                            Download CV
                                        </a> */}
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
                        </li>
                        <li>
                          <i className="icon icon-expiry"></i>
                          <h5>Age:</h5>
                          <span>
                            {findKeyValue(
                              candidate.keys,
                              "profile",
                              "age",
                              "N/A"
                            )}
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-rate"></i>
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
                        </li>
                        <li>
                          <i className="icon icon-salary"></i>
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
                        </li>
                        <li>
                          <i className="icon icon-user-2"></i>
                          <h5>Gender:</h5>
                          <span>
                            {findKeyValue(
                              candidate.keys,
                              "profile",
                              "gender",
                              "N/A"
                            )}
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-language"></i>
                          <h5>Language:</h5>
                          <span>
                            {findKeyValue(
                              candidate.keys,
                              "contactInformation",
                              "preferred_language",
                              "English"
                            )}
                          </span>
                        </li>
                        <li>
                          <i className="icon icon-degree"></i>
                          <h5>Education Level:</h5>
                          <span>
                            {findKeyValue(
                              candidate.keys,
                              "employmentDetails",
                              "employeeCategory",
                              "N/A"
                            )}
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
                  {/* <div className="sidebar-widget contact-widget">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <div className="widget-content">
                                            <div className="default-form">
                                                <Contact />
                                            </div>
                                        </div>
                                    </div> */}
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
                            background: "#1a73e8",
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
                            background: "#1a73e8",
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
                          <div className="card-body p-4">
                            {getKeyFields(candidate.keys, tab.keyName).length >
                            0 ? (
                              getKeyFields(candidate.keys, tab.keyName).map(
                                (field, index) => (
                                  <div
                                    key={index}
                                    className="d-flex align-items-center mb-3 border-bottom pb-3"
                                    style={{ borderColor: "#e9ecef" }}
                                  >
                                    <span
                                      className="fw-bold text-primary me-3"
                                      style={{
                                        minWidth: "150px",
                                        fontSize: "1.1rem",
                                      }}
                                    >
                                      {field.key.charAt(0).toUpperCase() +
                                        field.key.slice(1)}
                                      :
                                    </span>
                                    <span
                                      className="text-dark"
                                      style={{ fontSize: "1rem" }}
                                    >
                                      {field.value || "N/A"}
                                    </span>
                                  </div>
                                )
                              )
                            ) : (
                              <p className="text-muted mb-0">
                                No data available
                              </p>
                            )}
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
                          {findKeyValue(
                            candidate.keys,
                            "workExperience",
                            "employerName",
                            "N/A"
                          )}
                        </span>
                        <div className="title-box">
                          <div className="info-box">
                            <h3>
                              {findKeyValue(
                                candidate.keys,
                                "workExperience",
                                "designation",
                                "N/A"
                              )}
                            </h3>
                            <span>
                              {findKeyValue(
                                candidate.keys,
                                "workExperience",
                                "employmentLocation",
                                "N/A"
                              )}
                            </span>
                          </div>
                          <div className="edit-box">
                            <span className="year">
                              {findKeyValue(
                                candidate.keys,
                                "workExperience",
                                "startDate",
                                "N/A"
                              ).slice(0, 4)}{" "}
                              -{" "}
                              {findKeyValue(
                                candidate.keys,
                                "workExperience",
                                "endDate",
                                "Present"
                              ).slice(0, 4)}
                            </span>
                          </div>
                        </div>
                        <div className="text">
                          {findKeyValue(
                            candidate.keys,
                            "workExperience",
                            "employerReview",
                            "No description available"
                          )}
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

export default CandidateSingleDynamicV3;
