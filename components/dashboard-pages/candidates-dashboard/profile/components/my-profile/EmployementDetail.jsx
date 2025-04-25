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

// Define inputStyle for file inputs (matching Document.jsx)
const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  backgroundColor: "#F0F5F7",
  boxSizing: "border-box",
};

// Define tickBoxStyle for the tick container
const tickBoxStyle = (isFileSelected) => ({
  position: "absolute",
  right: "20px",
  top: "30%",
  transform: "translateY(-50%)",
  width: "24px",
  height: "24px",
  border: `1px solid ${isFileSelected ? "#28a745" : "#d0d0d0"}`,
  borderRadius: "50%",
  backgroundColor: isFileSelected ? "#28a745" : "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
});

const EmploymentDetails = () => {
  const [supportingDocs, setSupportingDocs] = useState([]);
  const [formData, setFormData] = useState({
    experience: "",
    employers: "",
    skills: "",
    workingHours: "9 AM - 5 PM",
    salary: "",
    noticePeriod: "",
    needAirTicket: "",
    employmentPreference: "",
    availability: "",
    interviewTimings: "",
    verificationStatus: "",
    employeeType: "",
    employeeCategory: "",
    visaStatus: "",
    visaExpiryDate: "",
    willingToLiveIn: "",
    maxWorkHours: "",
    flexibleWeekends: "",
    otherBenefits: "",
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSupportingDocs(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Documents:", supportingDocs);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Work Experience */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Work Experience (Years) <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="experience"
            placeholder="5"
            min="0"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        {/* Previous Employers */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Previous Employers (optional)</label>
          <input
            type="text"
            name="employers"
            placeholder="Company A, Company B"
            value={formData.employers}
            onChange={handleChange}
          />
        </div>

        {/* Skills */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Skills and Expertise <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="skills"
            placeholder="Enter skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>

        {/* Preferred Working Hours */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Preferred Working Hours <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="workingHours"
            className="chosen-single form-select"
            value={formData.workingHours}
            onChange={handleChange}
            required
          >
            <option>9 AM - 5 PM</option>
            <option>Flexible Hours</option>
            <option>Part-Time Morning</option>
            <option>Part-Time Evening</option>
          </select>
        </div>

        {/* Expected Salary */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Expected Salary (BHD) <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="salary"
            placeholder="500"
            min="0"
            step="0.01"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        {/* Notice Period */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Notice Period <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="noticePeriod"
            placeholder="30 days"
            value={formData.noticePeriod}
            onChange={handleChange}
            required
          />
        </div>

        {/* Need Air Ticket */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Need Air Ticket <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="needAirTicket"
            className="chosen-single form-select"
            value={formData.needAirTicket}
            onChange={handleChange}
            required
          >
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Type of Employment Preference */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Type of Employment Preference <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="employmentPreference"
            className="chosen-single form-select"
            value={formData.employmentPreference}
            onChange={handleChange}
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

        {/* Availability */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Availability <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="availability"
            className="chosen-single form-select"
            value={formData.availability}
            onChange={handleChange}
            required
          >
            <option value="">Select Availability</option>
            <option value="available">Available</option>
            <option value="not_available">Not Available</option>
          </select>
        </div>

        {/* Preferred Interview Timings */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Preferred Interview Timings <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="interviewTimings"
            placeholder="3 - 5 PM"
            value={formData.interviewTimings}
            onChange={handleChange}
            required
          />
        </div>

        {/* Document Verification Status */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Document Verification Status <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="verificationStatus"
            className="chosen-single form-select"
            value={formData.verificationStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Employee Type */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Employee Type <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="employeeType"
            className="chosen-single form-select"
            value={formData.employeeType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Independent">Independent</option>
            <option value="Agency Managed">Agency Managed</option>
          </select>
        </div>

        {/* Employee Category */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Employee Category <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="employeeCategory"
            className="chosen-single form-select"
            value={formData.employeeCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Driver">Driver</option>
            <option value="Cook">Cook</option>
            <option value="Maid">Maid</option>
            <option value="Nanny">Nanny</option>
            <option value="Elderly Care">Elderly Care</option>
          </select>
        </div>

        {/* Visa Status */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Visa Status <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="visaStatus"
            className="chosen-single form-select"
            value={formData.visaStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Own Visa">Own Visa</option>
            <option value="Needs Sponsorship">Needs Sponsorship</option>
          </select>
        </div>

        {/* Visa Expiry Date */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Visa Expiry Date <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="date"
            name="visaExpiryDate"
            value={formData.visaExpiryDate}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Willing to Live-in */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Willing to Live-in? <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="willingToLiveIn"
            className="chosen-single form-select"
            value={formData.willingToLiveIn}
            onChange={handleChange}
            required
          >
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Conditional">Conditional</option>
          </select>
        </div>

        {/* Max Work Hours/Day */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Max Work Hours/Day <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="maxWorkHours"
            placeholder="8"
            min="1"
            max="24"
            value={formData.maxWorkHours}
            onChange={handleChange}
            required
          />
        </div>

        {/* Flexible with Weekends */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Flexible with Weekends? <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="flexibleWeekends"
            className="chosen-single form-select"
            value={formData.flexibleWeekends}
            onChange={handleChange}
            required
          >
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Document Upload */}
        <div className="form-group col-lg-6 col-md-12" style={{ position: "relative", minHeight: "60px" }}>
          <label>Supporting Documents</label>
          <div style={{ position: "relative" }}>
            <div>
              <input
                type="file"
                accept=".pdf,.doc,.docx,image/*"
                onChange={handleFileChange}
                multiple
                style={inputStyle}
              />
              {supportingDocs.length > 0 && (
                <div className="mt-2 text-muted small">
                  Selected: {supportingDocs.map(doc => doc.name).join(", ")}
                </div>
              )}
            </div>
            <div style={tickBoxStyle(supportingDocs.length > 0)}>
              <span
                style={{
                  color: supportingDocs.length > 0 ? "#ffffff" : "gray",
                  fontSize: "1rem",
                }}
              >
                ✔
              </span>
            </div>
          </div>
        </div>

        {/* Other Benefits Requirements */}
        <div className="form-group col-lg-12 col-md-6">
          <label>
            Other Benefits Requirements <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            name="otherBenefits"
            className="form-control"
            placeholder="List any other benefits you require"
            value={formData.otherBenefits}
            onChange={handleChange}
            required
          />
        </div>

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
        <div className="form-group col-lg-3 col-md-12">
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
        {/* Maximum hours per day willing to work */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Maximum hours per day <span style={{ color: "red" }}>*</span>
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
        {/* Preferred household type */}
        <div className="form-group col-lg-3 col-md-12">
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
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Languages preferred <span style={{ color: "red" }}>*</span>
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
        {/* Willing to live-in with family */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Willing to live-in with family? <span style={{ color: "red" }}>*</span>
          </label>
          <div className="d-flex gap-3">
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="liveInWithFamily"
                value="Yes"
                checked={formData.liveInWithFamily === "Yes"}
                onChange={handleChange}
                required
                style={{ transform: "scale(1.5)", marginRight: "8px" }}
              />
              <span style={{ fontSize: "1.1rem" }}>Yes</span>
            </label>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="liveInWithFamily"
                value="No"
                checked={formData.liveInWithFamily === "No"}
                onChange={handleChange}
                required
                style={{ transform: "scale(1.5)", marginRight: "8px" }}
              />
              <span style={{ fontSize: "1.1rem" }}>No</span>
            </label>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="liveInWithFamily"
                value="Conditional"
                checked={formData.liveInWithFamily === "Conditional"}
                onChange={handleChange}
                required
                style={{ transform: "scale(1.5)", marginRight: "8px" }}
              />
              <span style={{ fontSize: "1.1rem" }}>Conditional</span>
            </label>
          </div>
        </div>
        {/* Comfortable with relocation inside country */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Comfortable with relocation? <span style={{ color: "red" }}>*</span>
          </label>
          <div className="d-flex gap-3">
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="relocationInsideCountry"
                value="Yes"
                checked={formData.relocationInsideCountry === "Yes"}
                onChange={handleChange}
                required
                style={{ transform: "scale(1.5)", marginRight: "8px" }}
              />
              <span style={{ fontSize: "1.1rem" }}>Yes</span>
            </label>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="relocationInsideCountry"
                value="No"
                checked={formData.relocationInsideCountry === "No"}
                onChange={handleChange}
                required
                style={{ transform: "scale(1.5)", marginRight: "8px" }}
              />
              <span style={{ fontSize: "1.1rem" }}>No</span>
            </label>
          </div>
        </div>
        {/* Flexible with weekends */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Flexible with weekends? <span style={{ color: "red" }}>*</span>
          </label>
          <div className="d-flex gap-3">
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="flexibleWeekends"
                value="Yes"
                checked={formData.flexibleWeekends === "Yes"}
                onChange={handleChange}
                required
                style={{ transform: "scale(1.5)", marginRight: "8px" }}
              />
              <span style={{ fontSize: "1.1rem" }}>Yes</span>
            </label>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="flexibleWeekends"
                value="No"
                checked={formData.flexibleWeekends === "No"}
                onChange={handleChange}
                required
                style={{ transform: "scale(1.5)", marginRight: "8px" }}
              />
              <span style={{ fontSize: "1.1rem" }}>No</span>
            </label>
          </div>
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