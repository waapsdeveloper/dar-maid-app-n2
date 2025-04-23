"use client";
import React, { useState } from "react";

const EmploymentDetails = () => {
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [formData, setFormData] = useState({
    experience: "",
    employers: "",
    skills: "",
    workingHours: "9 AM - 5 PM",
    salary: "",
    noticePeriod: "",
    needAirTicket: "",
    otherBenefits: "",
    employmentPreference: "",
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedDocuments([...uploadedDocuments, ...files]);
  };

  const handleDeleteDocument = (index) => {
    const updatedDocs = uploadedDocuments.filter((_, i) => i !== index);
    setUploadedDocuments(updatedDocs);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Documents:", uploadedDocuments);
  };

  return (
    <div style={{ width: "100%", margin: 0 }}>
      <form onSubmit={handleSubmit}>
        <div
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
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            {/* Work Experience */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Work Experience (Years)
              </label>
              <input
                type="number"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #cbd5e0",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                }}
                placeholder="5"
                min="0"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                required
              />
            </div>

            {/* Previous Employers */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Previous Employers (optional)
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
                placeholder="Company A, Company B"
                value={formData.employers}
                onChange={(e) =>
                  setFormData({ ...formData, employers: e.target.value })
                }
              />
            </div>

            {/* Skills */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Skills and Expertise
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
                placeholder="Enter skills"
                value={formData.skills}
                onChange={(e) =>
                  setFormData({ ...formData, skills: e.target.value })
                }
              />
            </div>

            {/* Working Hours */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Preferred Working Hours
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #cbd5e0",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  backgroundColor: "white",
                }}
                value={formData.workingHours}
                onChange={(e) =>
                  setFormData({ ...formData, workingHours: e.target.value })
                }
                required
              >
                <option>9 AM - 5 PM</option>
                <option>Flexible Hours</option>
                <option>Part-Time Morning</option>
                <option>Part-Time Evening</option>
              </select>
            </div>

            {/* Expected Salary */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Expected Salary (BHD)
              </label>
              <input
                type="number"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #cbd5e0",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                }}
                placeholder="500"
                min="0"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                required
              />
            </div>

            {/* Notice Period */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Notice Period
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
                placeholder="30 days"
                value={formData.noticePeriod}
                onChange={(e) =>
                  setFormData({ ...formData, noticePeriod: e.target.value })
                }
                required
              />
            </div>

            {/* Need Air Ticket */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Need Air Ticket
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #cbd5e0",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  backgroundColor: "white",
                }}
                value={formData.needAirTicket}
                onChange={(e) =>
                  setFormData({ ...formData, needAirTicket: e.target.value })
                }
                required
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Other Benefits Requirement */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Other Benefits Requirement
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
                placeholder="Health insurance, accommodation"
                value={formData.otherBenefits}
                onChange={(e) =>
                  setFormData({ ...formData, otherBenefits: e.target.value })
                }
                required
              />
            </div>

            {/* Type of Employment Preference */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Type of Employment Preference
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #cbd5e0",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  backgroundColor: "white",
                }}
                value={formData.employmentPreference}
                onChange={(e) =>
                  setFormData({ ...formData, employmentPreference: e.target.value })
                }
                required
              >
                <option value="">Select Preference</option>
                <option value="Live in">Live in</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Live-out">Live-out</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Monthly">Monthly</option>
                <option value="Temporary">Temporary</option>
                <option value="Nanny for Newborns">Nanny for Newborns</option>
              </select>
            </div>

            {/* Document Upload */}
            <div style={{ flex: "1 1 300px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Supporting Documents
              </label>
              <div
                style={{
                  border: "2px dashed #cbd5e0",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                  backgroundColor: "#f7fafc",
                  cursor: "pointer",
                }}
              >
                <label
                  style={{
                    display: "block",
                    color: "#a0aec0",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  Click to upload documents
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept=".pdf,.doc,.docx,image/*"
                    onChange={handleFileChange}
                    multiple
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Uploaded Documents Preview */}
          {uploadedDocuments.map((doc, index) => (
            <div
              key={index}
              style={{
                marginTop: "1rem",
                padding: "1rem",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {getFileIcon(doc.name)}
                <div>
                  <div style={{ fontWeight: "600", fontSize: "14px" }}>
                    {doc.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>
                    {doc.type.toUpperCase()} • {Math.round(doc.size / 1024)}KB
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteDocument(index)}
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
          ))}

          {/* Submit Button */}
          <div
            style={{
              marginTop: "1.5rem",
              textAlign: "right",
            }}
          >
            <button
              type="submit"
              style={{
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "0.5rem",
                backgroundColor: "#48bb78",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              Save Details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmploymentDetails;

const InterviewAvailability = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* Preferred Interview Time */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Preferred Interview Time</label>
          <input
            type="text"
            name="interviewTime"
            placeholder="E.g., 10 AM - 12 PM"
          />
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit">Save Availability</button>
        </div>
      </div>
    </form>
  );
};

const ApplicationManagement = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* View Job Applications */}
        <div className="form-group col-lg-6 col-md-12">
          <label>View Job Applications</label>
          <input
            type="text"
            name="jobApplications"
            placeholder="Search applications..."
          />
        </div>

        {/* Track Application Status */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Track Application Status</label>
          <select name="applicationStatus">
            <option>Pending</option>
            <option>Reviewed</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit">Manage Applications</button>
        </div>
      </div>
    </form>
  );
};

const InterviewManagement = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* View & Respond to Interview Requests */}
        <div className="form-group col-lg-6 col-md-12">
          <label>View & Respond to Interview Requests</label>
          <input
            type="text"
            name="interviewRequests"
            placeholder="Search interviews..."
          />
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit">Manage Interviews</button>
        </div>
      </div>
    </form>
  );
};

export {
  ApplicationManagement,
  InterviewManagement,
  EmploymentDetails,
  InterviewAvailability,
};