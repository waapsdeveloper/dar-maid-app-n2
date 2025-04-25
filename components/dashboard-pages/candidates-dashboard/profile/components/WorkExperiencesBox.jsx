"use client";
import { useState } from "react";

const JobExperienceCard = () => {
  const [jobExperiences, setJobExperiences] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewFile, setViewFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newExperience, setNewExperience] = useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    file: null,
  });
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
    comfortableWithPets: null,
  });

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

  const removeButtonStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: "#e63946",
    color: "white",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
  };

  const viewButtonStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
    marginLeft: "8px",
  };

  const editButtonStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: "#facc15",
    color: "black",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
    marginLeft: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    backgroundColor: "#F0F5F7",
    boxSizing: "border-box",
  };

  const gulfCountries = [
    "Bahrain",
    "Kuwait",
    "Oman",
    "Qatar",
    "Saudi Arabia",
    "United Arab Emirates",
  ];

  const handleNewExperienceChange = (field, value) => {
    setNewExperience({ ...newExperience, [field]: value });
  };

  const handleFileChange = (file) => {
    setNewExperience({ ...newExperience, file: file });
  };

  const saveExperience = () => {
    if (isEditing) {
      setJobExperiences(
        jobExperiences.map((exp) =>
          exp.id === editId ? { ...exp, ...newExperience } : exp
        )
      );
    } else {
      setJobExperiences([
        ...jobExperiences,
        {
          id: Date.now(),
          ...newExperience,
        },
      ]);
    }
    setIsModalOpen(false);
    setIsEditing(false);
    setEditId(null);
    setNewExperience({
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      file: null,
    });
  };

  const deleteExperience = (id) => {
    setJobExperiences(jobExperiences.filter((exp) => exp.id !== id));
  };

  const handleViewFile = (file) => {
    if (file) {
      setViewFile(file);
      setIsViewModalOpen(true);
    }
  };

  const editExperience = (exp) => {
    setNewExperience({
      jobTitle: exp.jobTitle,
      company: exp.company,
      startDate: exp.startDate,
      endDate: exp.endDate,
      file: exp.file,
    });
    setIsEditing(true);
    setEditId(exp.id);
    setIsModalOpen(true);
  };

  const handleEmployerChange = (field, value) => {
    setPreviousEmployer({ ...previousEmployer, [field]: value });
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
    <form className="default-form">
      <div
        className="form-group mt-4"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setIsModalOpen(true)}
        >
          + Add Experience
        </button>
      </div>

      {isModalOpen && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              zIndex: 999,
            }}
            onClick={() => setIsModalOpen(false)}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "2rem",
              borderRadius: "8px",
              width: "80%",
              maxWidth: "800px",
              zIndex: 1000,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4>{isEditing ? "Edit Experience" : "Add Experience"}</h4>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <label>
                    Job Title <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Senior Product Manager"
                    value={newExperience.jobTitle}
                    onChange={(e) =>
                      handleNewExperienceChange("jobTitle", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Company Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Google Inc."
                    value={newExperience.company}
                    onChange={(e) =>
                      handleNewExperienceChange("company", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Upload Document <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,image/*"
                    onChange={(e) => handleFileChange(e.target.files[0])}
                    required={!newExperience.file}
                    style={inputStyle}
                  />
                </div>

                {newExperience.file && (
                  <div
                    style={{
                      padding: "1rem",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {getFileIcon(newExperience.file.name)}
                      <div>
                        <div style={{ fontWeight: "600", fontSize: "14px" }}>
                          {newExperience.file.name}
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                          {newExperience.file.type.toUpperCase()} •{" "}
                          {Math.round(newExperience.file.size / 1024)}KB
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        style={{ width: "20px", height: "20px", marginRight: "8px" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="green"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" fill="none" stroke="green" />
                        <path d="M8 12l3 3 5-6" fill="none" stroke="green" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <button
                        type="button"
                        onClick={() => handleFileChange(null)}
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
                )}
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>
                      Start Date <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="date"
                      value={newExperience.startDate}
                      onChange={(e) =>
                        handleNewExperienceChange("startDate", e.target.value)
                      }
                      required
                      style={inputStyle}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      End Date <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="date"
                      value={newExperience.endDate}
                      onChange={(e) =>
                        handleNewExperienceChange("endDate", e.target.value)
                      }
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}
            >
              <button
                type="button"
                style={buttonStyle}
                onClick={saveExperience}
              >
                Save Details
              </button>
            </div>
          </div>
        </>
      )}

      {isViewModalOpen && viewFile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "600px",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setIsViewModalOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
            <h3>View Document</h3>
            <div style={{ marginBottom: "1rem" }}>
              <p>{viewFile.name}</p>
              {viewFile.type.includes("image") ? (
                <img
                  src={URL.createObjectURL(viewFile)}
                  alt="Uploaded document"
                  style={{ maxWidth: "100%", maxHeight: "60vh", marginTop: "1rem" }}
                />
              ) : (
                <embed
                  src={URL.createObjectURL(viewFile)}
                  type="application/pdf"
                  style={{ width: "100%", height: "60vh", marginTop: "1rem" }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {jobExperiences.length > 0 && (
        <div className="mt-4">
          <h4>Work Experiences</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Document</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobExperiences.map((exp) => (
                <tr key={exp.id}>
                  <td>{exp.jobTitle}</td>
                  <td>{exp.company}</td>
                  <td>{exp.startDate}</td>
                  <td>{exp.endDate}</td>
                  <td>{exp.file ? exp.file.name : "No Document"}</td>
                  <td>
                    <button
                      style={removeButtonStyle}
                      onClick={() => deleteExperience(exp.id)}
                    >
                      Delete
                    </button>
                    <button
                      style={viewButtonStyle}
                      onClick={() => handleViewFile(exp.file)}
                      disabled={!exp.file}
                    >
                      View
                    </button>
                    <button
                      style={editButtonStyle}
                      onClick={() => editExperience(exp)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="previous-employer-section mt-5 pt-4 border-top">
        <h4 className="section-title mb-4">Previous Employer Details</h4>
        <div className="row">
          <div className="form-group col-lg-3 col-md-12">
            <label>
              Previous Employer Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={previousEmployer.employerName}
              onChange={(e) => handleEmployerChange("employerName", e.target.value)}
              required
            />
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              Employment Location <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={previousEmployer.employmentLocation}
              onChange={(e) => handleEmployerChange("employmentLocation", e.target.value)}
              required
            />
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              Employer Phone <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              className="form-control"
              value={previousEmployer.employerPhone}
              onChange={(e) => handleEmployerChange("employerPhone", e.target.value)}
              required
            />
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              Employer Email Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              value={previousEmployer.employerEmail}
              onChange={(e) => handleEmployerChange("employerEmail", e.target.value)}
              required
            />
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              Country <span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="chosen-single form-select"
              value={previousEmployer.country}
              onChange={(e) => handleEmployerChange("country", e.target.value)}
              required
            >
              <option value="">Select Country</option>
              {gulfCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              Designation / Position <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Maid, Gardener, etc."
              value={previousEmployer.designation}
              onChange={(e) => handleEmployerChange("designation", e.target.value)}
              required
            />
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              Previous Salary <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              className="form-control"
              value={previousEmployer.previousSalary}
              onChange={(e) => handleEmployerChange("previousSalary", e.target.value)}
              required
            />
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              Benefits <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Visa, Accommodation, Fuel, etc."
              value={previousEmployer.benefits}
              onChange={(e) => handleEmployerChange("benefits", e.target.value)}
              required
            />
          </div>
          <div className="form-group col-lg-3 col-md-12">
            <label>
              Start Date <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="date"
              value={previousEmployer.startDate}
              onChange={(e) => handleEmployerChange("startDate", e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              End Date <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="date"
              value={previousEmployer.endDate}
              onChange={(e) => handleEmployerChange("endDate", e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div className="form-group col-lg-3 col-md-12">
            <label>
              Pets Experience <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={previousEmployer.petsExperience}
              onChange={(e) => handleEmployerChange("petsExperience", e.target.value)}
              required
            />
          </div>

          <div className="form-group col-lg-3 col-md-12">
            <label>
              Comfortable with Pets <span style={{ color: "red" }}>*</span>
            </label>
            <div className="radio-group" style={{ display: "flex", gap: "20px" }}>
              <label className="radio-label" style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  name="comfortableWithPets"
                  checked={previousEmployer.comfortableWithPets === true}
                  onChange={() => handleEmployerChange("comfortableWithPets", true)}
                  required
                  style={{ transform: "scale(1.5)", marginRight: "8px" }}
                />
                <span style={{ fontSize: "1.1rem" }}>Yes</span>
              </label>
              <label className="radio-label" style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  name="comfortableWithPets"
                  checked={previousEmployer.comfortableWithPets === false}
                  onChange={() => handleEmployerChange("comfortableWithPets", false)}
                  style={{ transform: "scale(1.5)", marginRight: "8px" }}
                />
                <span style={{ fontSize: "1.1rem" }}>No</span>
              </label>
            </div>
          </div>

          <div className="form-group col-lg-12 col-md-12">
            <label>
              Employer Review <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              className="form-control"
              rows="4"
              value={previousEmployer.employerReview}
              onChange={(e) => handleEmployerChange("employerReview", e.target.value)}
              required
            />
          </div>

          <div className="form-group col-lg-12 col-md-12">
            <label>
              Rating (1–5 stars) <span style={{ color: "red" }}>*</span>
            </label>
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
                    color: star <= previousEmployer.rating ? "#facc15" : "#d1d5db",
                  }}
                >
                  ★
                </button>
              ))}
            </div>
            {previousEmployer.rating === 0 && (
              <input
                type="hidden"
                required
                value=""
                onChange={() => {}}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className="form-group mt-4"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <button type="submit" style={buttonStyle}>
          Save
        </button>
      </div>
    </form>
  );
};

export default JobExperienceCard;