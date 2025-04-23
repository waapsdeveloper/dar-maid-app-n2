"use client";
import { useState } from "react";

const JobExperienceCard = () => {
  const [experiences, setExperiences] = useState([]);
  const [previousEmployer, setPreviousEmployer] = useState({
    employerName: "",
    employmentLocation: "",
    employerPhone: "",
    employerEmail: "",
    country: "",
    startDate: "",
    endDate: "",
    designation: "",
    previousSalary: "",
    benefits: "",
    rating: 0,
    employerReview: "",
    petsExperience: "",
    comfortableWithPets: false,
  });

  const countries = [
    "Select Country",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
    "Other"
  ];

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

  const handleEmployerChange = (field, value) => {
    setPreviousEmployer({ ...previousEmployer, [field]: value });
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();

    switch (extension) {
      case "pdf":
        return <i className="fas fa-file-pdf text-danger me-2"></i>;
      case "doc":
      case "docx":
        return <i className="fas fa-file-word text-primary me-2"></i>;
      case "png":
      case "jpg":
      case "jpeg":
        return <i className="fas fa-file-image text-success me-2"></i>;
      default:
        return <i className="fas fa-file-alt text-secondary me-2"></i>;
    }
  };

  return (
    <div className="default-form">
      {/* Existing Work Experience Section */}
      {experiences.map((exp) => (
        <div key={exp.id} className="form-group experience-card mb-4 p-4 border rounded">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              {/* Job Title Input */}
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Senior Product Manager"
                  value={exp.jobTitle}
                  onChange={(e) => updateExperience(exp.id, "jobTitle", e.target.value)}
                  required
                />
              </div>

              {/* Company Name Input */}
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Google Inc."
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                  required
                />
              </div>

              {/* File Upload Button */}
              <div className="form-group">
                <label className={`file-upload-label ${exp.file ? 'has-file' : ''}`}>
                  {exp.file ? "Replace Document" : "Upload Document"}
                  <input
                    type="file"
                    className="d-none"
                    accept=".pdf,.doc,.docx,image/*"
                    onChange={(e) => handleFileChange(exp.id, e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                {/* Start Date Input */}
                <div className="form-group col-md-6">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                    required
                  />
                </div>

                {/* End Date Input */}
                <div className="form-group col-md-6">
                  <label>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {exp.file && (
            <div className="file-preview d-flex align-items-center justify-content-between p-3 mb-3 bg-light rounded">
              <div className="d-flex align-items-center">
                {getFileIcon(exp.file.name)}
                <div>
                  <div className="file-name">{exp.file.name}</div>
                  <div className="file-info">
                    {exp.file.type.toUpperCase()} • {Math.round(exp.file.size / 1024)}KB
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleFileChange(exp.id, null)}
                className="btn-remove-file"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}

          {/* Remove Experience Button */}
          <div className="text-end">
            <button
              type="button"
              className="btn btn-remove"
              onClick={() => deleteExperience(exp.id)}
            >
              Remove Experience
            </button>
          </div>
        </div>
      ))}

      {/* Add Experience Button */}
      <div className="form-group mt-4">
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

      {/* Previous Employer Section */}
      <div className="previous-employer-section mt-5 pt-4 border-top">
        <h4 className="section-title mb-4">Previous Employer Details</h4>
        
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 col-md-12">
            {/* Previous Employer Name */}
            <div className="form-group">
              <label>Previous Employer Name</label>
              <input
                type="text"
                className="form-control"
                value={previousEmployer.employerName}
                onChange={(e) => handleEmployerChange("employerName", e.target.value)}
              />
            </div>

            {/* Employment Location */}
            <div className="form-group">
              <label>Employment Location</label>
              <input
                type="text"
                className="form-control"
                value={previousEmployer.employmentLocation}
                onChange={(e) => handleEmployerChange("employmentLocation", e.target.value)}
              />
            </div>

            {/* Employer Phone */}
            <div className="form-group">
              <label>Employer Phone</label>
              <input
                type="number"
                className="form-control"
                value={previousEmployer.employerPhone}
                onChange={(e) => handleEmployerChange("employerPhone", e.target.value)}
              />
            </div>

            {/* Employer Email */}
            <div className="form-group">
              <label>Employer Email Address</label>
              <input
                type="email"
                className="form-control"
                value={previousEmployer.employerEmail}
                onChange={(e) => handleEmployerChange("employerEmail", e.target.value)}
              />
            </div>

            {/* Country */}
            <div className="form-group">
              <label>Country</label>
              <select
                className="chosen-single form-select"
                value={previousEmployer.country}
                onChange={(e) => handleEmployerChange("country", e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-md-12">
            <div className="row">
              {/* Start Date */}
              <div className="form-group col-md-6">
                <label>Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={previousEmployer.startDate}
                  onChange={(e) => handleEmployerChange("startDate", e.target.value)}
                />
              </div>

              {/* End Date */}
              <div className="form-group col-md-6">
                <label>End Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={previousEmployer.endDate}
                  onChange={(e) => handleEmployerChange("endDate", e.target.value)}
                />
              </div>
            </div>

            {/* Designation */}
            <div className="form-group">
              <label>Designation / Position</label>
              <input
                type="text"
                className="form-control"
                placeholder="Maid, Gardener, etc."
                value={previousEmployer.designation}
                onChange={(e) => handleEmployerChange("designation", e.target.value)}
              />
            </div>

            {/* Previous Salary */}
            <div className="form-group">
              <label>Previous Salary</label>
              <input
                type="number"
                className="form-control"
                value={previousEmployer.previousSalary}
                onChange={(e) => handleEmployerChange("previousSalary", e.target.value)}
              />
            </div>

            {/* Benefits */}
            <div className="form-group">
              <label>Benefits</label>
              <input
                type="text"
                className="form-control"
                placeholder="Visa, Accommodation, Fuel, etc."
                value={previousEmployer.benefits}
                onChange={(e) => handleEmployerChange("benefits", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="form-group" style={{ margin: "16px 0" }}>
  <label style={{ display: "block", marginBottom: "8px" }}>Rating (1–5 stars)</label>
  <div className="rating-stars" style={{ display: "flex", gap: "8px" }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => handleEmployerChange("rating", star)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          color: star <= previousEmployer.rating ? "#facc15" : "#d1d5db", // yellow-400 or gray-300
        }}
      >
        ★
      </button>
    ))}
  </div>
</div>


        {/* Employer Review */}
        <div className="form-group">
          <label>Employer Review</label>
          <textarea
            className="form-control"
            rows="4"
            value={previousEmployer.employerReview}
            onChange={(e) => handleEmployerChange("employerReview", e.target.value)}
          ></textarea>
        </div>

        {/* Pets Experience */}
        <div className="form-group">
          <label>Pets Experience</label>
          <input
            type="text"
            className="form-control"
            value={previousEmployer.petsExperience}
            onChange={(e) => handleEmployerChange("petsExperience", e.target.value)}
          />
        </div>

        {/* Comfortable with Pets */}
        <div className="form-group">
          <label>Comfortable with Pets</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="comfortableWithPets"
                checked={previousEmployer.comfortableWithPets === true}
                onChange={() => handleEmployerChange("comfortableWithPets", true)}
              />
              <span>Yes</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="comfortableWithPets"
                checked={previousEmployer.comfortableWithPets === false}
                onChange={() => handleEmployerChange("comfortableWithPets", false)}
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExperienceCard;