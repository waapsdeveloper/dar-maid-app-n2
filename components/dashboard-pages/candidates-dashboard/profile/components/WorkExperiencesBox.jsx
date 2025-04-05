"use client";
import { useState } from "react";

const JobExperienceCard = () => {
  const [experiences, setExperiences] = useState([]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        file: null,
      },
    ]);
  };

  const updateExperience = (id, field, value) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const handleFileChange = (id, file) => {
    setExperiences(
      experiences.map((exp) => (exp.id === id ? { ...exp, file: file } : exp))
    );
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    const iconStyle = { width: "24px", height: "24px", marginRight: "8px" };

    switch (extension) {
      case "pdf":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="red">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm-4-6V3.5L18.5 9H13z" />
          </svg>
        );
      case "doc":
      case "docx":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="blue">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm-4-6V3.5L18.5 9H13z" />
          </svg>
        );
      case "png":
      case "jpg":
      case "jpeg":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="green">
            <path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
          </svg>
        );
      default:
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="gray">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm-4-6V3.5L18.5 9H13z" />
          </svg>
        );
    }
  };

  return (
    <div style={{ width: "100%", margin: 0 }}>
      {experiences.map((exp) => (
        <div
          key={exp.id}
          style={{
            border: "2px solid #e2e8f0",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
        

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginBottom: "1rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Job Title Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#4a5568",
                    fontWeight: "600",
                  }}
                >
                  Job Title
                </label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #cbd5e0",
                    borderRadius: "0.5rem",
                    fontSize: "1rem",
                  }}
                  placeholder="Senior Product Manager"
                  value={exp.jobTitle}
                  onChange={(e) =>
                    updateExperience(exp.id, "jobTitle", e.target.value)
                  }
                  required
                />
              </div>

              {/* Company Name Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#4a5568",
                    fontWeight: "600",
                  }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #cbd5e0",
                    borderRadius: "0.5rem",
                    fontSize: "1rem",
                  }}
                  placeholder="Google Inc."
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(exp.id, "company", e.target.value)
                  }
                  required
                />
              </div>

              {/* File Upload Button - Moved below Company Name */}
              <div>
                <label
                  style={{
                    display: "block",
                    padding: "0.7rem",
                    border: "2px dashed #cbd5e0",
                    borderRadius: "0.5rem",
                    backgroundColor: "#f7fafc",
                    cursor: "pointer",
                    textAlign: "center",
                    color: exp.file ? "#2d3748" : "#a0aec0",
                    marginTop: "1rem",
                  }}
                >
                  {exp.file ? "Replace Document" : "Upload Document"}
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept=".pdf,.doc,.docx,image/*"
                    onChange={(e) =>
                      handleFileChange(exp.id, e.target.files[0])
                    }
                  />
                </label>
              </div>
            </div>

            {/* Date Inputs Column */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", gap: "1rem" }}>
                {/* Start Date Input */}
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#4a5568",
                      fontWeight: "600",
                    }}
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid #cbd5e0",
                      borderRadius: "0.5rem",
                      fontSize: "1rem",
                    }}
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "startDate", e.target.value)
                    }
                    required
                  />
                </div>

                {/* End Date Input */}
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#4a5568",
                      fontWeight: "600",
                    }}
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid #cbd5e0",
                      borderRadius: "0.5rem",
                      fontSize: "1rem",
                    }}
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "endDate", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          {exp.file && (
              <div
                style={{
                  marginBottom: "1.5rem",
                  padding: "1rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  {getFileIcon(exp.file.name)}
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "14px" }}>
                      {exp.file.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "#6b7280" }}>
                      {exp.file.type.toUpperCase()} •{" "}
                      {Math.round(exp.file.size / 1024)}KB
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleFileChange(exp.id, null)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                >
                  <svg
                    style={{ width: "20px", height: "20px" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                  </svg>
                </button>
              </div>
            )}

          {/* Remove Experience Button */}
          <div style={{ textAlign: "right" }}>
            <button
              type="button"
              style={{
                padding: "0.75rem 1.5rem",
                border: "2px solid #e53e3e",
                borderRadius: "0.5rem",
                backgroundColor: "#fff5f5",
                color: "#e53e3e",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
              onClick={() => deleteExperience(exp.id)}
            >
              Remove Experience
            </button>
          </div>
        </div>
      ))}

      {/* Add Experience Button */}
      <div style={{ marginTop: "1.5rem", textAlign: "left" }}>
        <button
          type="button"
          style={{
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "0.5rem",
            backgroundColor: "#48bb78",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            width: "100%",
            maxWidth: "300px",
          }}
          onClick={addExperience}
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
};

export default JobExperienceCard;
