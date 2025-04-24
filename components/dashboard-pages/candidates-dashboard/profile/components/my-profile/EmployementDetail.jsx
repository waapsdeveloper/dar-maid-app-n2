"use client";
import React, { useState } from "react";

// Define buttonStyle at the top level so it can be used across all components
const buttonStyle = {
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "0.5rem",
  backgroundColor: "#1a73e8",
  color: "white",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
};

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
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Work Experience */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Work Experience (Years) <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
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
        <div className="form-group col-lg-6 col-md-12">
          <label>Previous Employers (optional)</label>
          <input
            type="text"
            placeholder="Company A, Company B"
            value={formData.employers}
            onChange={(e) =>
              setFormData({ ...formData, employers: e.target.value })
            }
          />
        </div>

        {/* Skills */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Skills and Expertise <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter skills"
            value={formData.skills}
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
            required
          />
        </div>

        {/* Working Hours */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Preferred Working Hours <span style={{ color: "red" }}>*</span>
          </label>
          <select
            className="chosen-single form-select"
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
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Expected Salary (BHD) <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
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
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Notice Period <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="30 days"
            value={formData.noticePeriod}
            onChange={(e) =>
              setFormData({ ...formData, noticePeriod: e.target.value })
            }
            required
          />
        </div>

        {/* Need Air Ticket */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Need Air Ticket <span style={{ color: "red" }}>*</span>
          </label>
          <select
            className="chosen-single form-select"
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
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Other Benefits Requirement <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="Health insurance, accommodation"
            value={formData.otherBenefits}
            onChange={(e) =>
              setFormData({ ...formData, otherBenefits: e.target.value })
            }
            required
          />
        </div>

        {/* Type of Employment Preference */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Type of Employment Preference <span style={{ color: "red" }}>*</span>
          </label>
          <select
            className="chosen-single form-select"
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
        <div className="form-group col-lg-6 col-md-12">
          <label>Supporting Documents</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,image/*"
            onChange={handleFileChange}
            multiple
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Uploaded Documents Preview */}
        {uploadedDocuments.map((doc, index) => (
          <div key={index} className="form-group col-lg-12 col-md-12">
            <div
              style={{
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
          </div>
        ))}

        {/* Submit Button */}
        <div
          className="form-group col-lg-12 col-md-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={buttonStyle}>
            Save Details
          </button>
        </div>
      </div>
    </form>
  );
};

const InterviewAvailability = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* Preferred Interview Time */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Preferred Interview Time <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="interviewTime"
            placeholder="E.g., 10 AM - 12 PM"
            required
          />
        </div>

        {/* Submit Button */}
        <div
          className="form-group col-lg-12 col-md-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={buttonStyle}>
            Save Availability
          </button>
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
          <label>
            View Job Applications <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="jobApplications"
            placeholder="Search applications..."
            required
          />
        </div>

        {/* Track Application Status */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Track Application Status <span style={{ color: "red" }}>*</span>
          </label>
          <select name="applicationStatus" required>
            <option value="">Select Status</option>
            <option>Pending</option>
            <option>Reviewed</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Submit Button */}
        <div
          className="form-group col-lg-12 col-md-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={buttonStyle}>
            Manage Applications
          </button>
        </div>
      </div>
    </form>
  );
};

const InterviewManagement = () => {
  const [formData, setFormData] = useState({
    interviewTime: "",
    liveInWithFamily: "",
    relocationInsideCountry: "",
    maxHoursPerDay: "",
    flexibleWeekends: "",
    householdType: "",
    communicationLanguage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const languages = [
    "English",
    "Arabic",
    "French",
    "Spanish",
    "Hindi",
    // Add more languages as needed
  ];

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Preferred Interview Time */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Preferred Interview Time <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="interviewTime"
            placeholder="E.g., 10 AM - 12 PM"
            value={formData.interviewTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* Willing to live-in with family */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Willing to live-in with family? <span style={{ color: "red" }}>*</span>
          </label>
          <div className="d-flex gap-3">
            <label>
              <input
                type="radio"
                name="liveInWithFamily"
                value="Yes"
                checked={formData.liveInWithFamily === "Yes"}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="liveInWithFamily"
                value="No"
                checked={formData.liveInWithFamily === "No"}
                onChange={handleChange}
                required
              />
              No
            </label>
            <label>
              <input
                type="radio"
                name="liveInWithFamily"
                value="Conditional"
                checked={formData.liveInWithFamily === "Conditional"}
                onChange={handleChange}
                required
              />
              Conditional
            </label>
          </div>
        </div>

        {/* Comfortable with relocation inside country */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Comfortable with relocation inside country? <span style={{ color: "red" }}>*</span>
          </label>
          <div className="d-flex gap-3">
            <label>
              <input
                type="radio"
                name="relocationInsideCountry"
                value="Yes"
                checked={formData.relocationInsideCountry === "Yes"}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="relocationInsideCountry"
                value="No"
                checked={formData.relocationInsideCountry === "No"}
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>
        </div>

        {/* Maximum hours per day willing to work */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Maximum hours per day willing to work <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="maxHoursPerDay"
            placeholder="E.g., 8"
            min="1"
            value={formData.maxHoursPerDay}
            onChange={handleChange}
            required
          />
        </div>

        {/* Flexible with weekends */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Flexible with weekends? <span style={{ color: "red" }}>*</span>
          </label>
          <div className="d-flex gap-3">
            <label>
              <input
                type="radio"
                name="flexibleWeekends"
                value="Yes"
                checked={formData.flexibleWeekends === "Yes"}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="flexibleWeekends"
                value="No"
                checked={formData.flexibleWeekends === "No"}
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>
        </div>

        {/* Preferred household type */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Preferred household type <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="householdType"
            value={formData.householdType}
            onChange={handleChange}
            required
          >
            <option value="">Select Preference</option>
            <option value="Local">Local</option>
            <option value="Expat">Expat</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>

        {/* Languages preferred for communication */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Languages preferred for communication <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="communicationLanguage"
            value={formData.communicationLanguage}
            onChange={handleChange}
            required
          >
            <option value="">Select Language</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div
          className="form-group col-lg-12 col-md-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={buttonStyle}>
            Save Preferences
          </button>
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