'use client'

import Select from "react-select";
import { useState } from "react";

const JobExperienceCard = () => {
  const [jobExperiences, setJobExperiences] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newExperience, setNewExperience] = useState({
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

  const gulfCountriesOptions = [
    { value: "Bahrain", label: "Bahrain" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Oman", label: "Oman" },
    { value: "Qatar", label: "Qatar" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
  ];

  const yesNoOptions = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  const handleNewExperienceChange = (field, value) => {
    setNewExperience({ ...newExperience, [field]: value });
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
  };

  const deleteExperience = (id) => {
    setJobExperiences(jobExperiences.filter((exp) => exp.id !== id));
  };

  const editExperience = (exp) => {
    setNewExperience({
      employerName: exp.employerName,
      employmentLocation: exp.employmentLocation,
      employerPhone: exp.employerPhone,
      employerEmail: exp.employerEmail,
      country: exp.country,
      startDate: exp.startDate,
      endDate: exp.endDate,
      designation: exp.designation,
      previousSalary: exp.previousSalary,
      benefits: exp.benefits,
      rating: exp.rating,
      employerReview: exp.employerReview,
      petsExperience: exp.petsExperience,
      comfortableWithPets: exp.comfortableWithPets,
    });
    setIsEditing(true);
    setEditId(exp.id);
    setIsModalOpen(true);
  };

  const fields = [
    {
      type: "text",
      name: "employerName",
      label: "Previous Employer Name",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "text",
      name: "employmentLocation",
      label: "Employment Location",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "number",
      name: "employerPhone",
      label: "Employer Phone",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "email",
      name: "employerEmail",
      label: "Employer Email Address",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "select",
      name: "country",
      label: "Country",
      options: gulfCountriesOptions,
      colClass: "col-lg-3 col-md-12",
      placeholder: "Select Country",
      required: true,
    },
    {
      type: "text",
      name: "designation",
      label: "Designation / Position",
      placeholder: "Maid, Gardener, etc.",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "number",
      name: "previousSalary",
      label: "Previous Salary",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "text",
      name: "benefits",
      label: "Benefits",
      placeholder: "Visa, Accommodation, Fuel, etc.",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "date",
      name: "startDate",
      label: "Start Date",
      colClass: "col-lg-3 col-md-12",
      required: true,
      style: inputStyle,
    },
    {
      type: "date",
      name: "endDate",
      label: "End Date",
      colClass: "col-lg-3 col-md-12",
      required: true,
      style: inputStyle,
    },
    {
      type: "text",
      name: "petsExperience",
      label: "Pets Experience",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "select",
      name: "comfortableWithPets",
      label: "Comfortable with Pets",
      options: yesNoOptions,
      colClass: "col-lg-3 col-md-12",
      placeholder: "Select Option",
      required: true,
    },
    {
      type: "textarea",
      name: "employerReview",
      label: "Employer Review",
      colClass: "col-lg-12 col-md-12",
      required: true,
      rows: 4,
    },
    {
      type: "rating",
      name: "rating",
      label: "Rating (1–5 stars)",
      colClass: "col-lg-12 col-md-12",
      required: true,
    },
  ];

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
              {fields.map((field, index) => (
                <div
                  key={index}
                  className={`form-group ${field.colClass}`}
                >
                  <label>
                    {field.label} {field.required && <span style={{ color: "red" }}>*</span>}
                  </label>
                  {field.type === "text" || field.type === "number" || field.type === "email" ? (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={newExperience[field.name]}
                      onChange={(e) => handleNewExperienceChange(field.name, e.target.value)}
                      required={field.required}
                      className="form-control"
                    />
                  ) : field.type === "date" ? (
                    <input
                      type="date"
                      name={field.name}
                      value={newExperience[field.name]}
                      onChange={(e) => handleNewExperienceChange(field.name, e.target.value)}
                      required={field.required}
                      style={field.style}
                    />
                  ) : field.type === "select" ? (
                    <Select
                      name={field.name}
                      options={field.options}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder={field.placeholder}
                      value={field.options.find(option => option.value === newExperience[field.name]) || null}
                      onChange={(selectedOption) =>
                        handleNewExperienceChange(field.name, selectedOption ? selectedOption.value : "")
                      }
                      required={field.required}
                    />
                  ) : field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      rows={field.rows}
                      value={newExperience[field.name]}
                      onChange={(e) => handleNewExperienceChange(field.name, e.target.value)}
                      required={field.required}
                      className="form-control"
                    />
                  ) : field.type === "rating" ? (
                    <div className="rating-stars" style={{ display: "flex", gap: "8px" }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleNewExperienceChange("rating", star)}
                          style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "24px",
                            color: star <= newExperience.rating ? "#facc15" : "#d1d5db",
                          }}
                        >
                          ★
                        </button>
                      ))}
                      {newExperience.rating === 0 && (
                        <input
                          type="hidden"
                          required
                          value=""
                          onChange={() => {}}
                        />
                      )}
                    </div>
                  ) : null}
                </div>
              ))}
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

      {jobExperiences.length > 0 && (
        <div className="mt-4">
          <h4>Work Experiences</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Previous Employer Name</th>
                <th>Employment Location</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Designation / Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobExperiences.map((exp) => (
                <tr key={exp.id}>
                  <td>{exp.employerName}</td>
                  <td>{exp.employmentLocation}</td>
                  <td>{exp.startDate}</td>
                  <td>{exp.endDate}</td>
                  <td>{exp.designation}</td>
                  <td>
                    <button
                      style={removeButtonStyle}
                      onClick={() => deleteExperience(exp.id)}
                    >
                      Delete
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
    </form>
  );
};

export default JobExperienceCard;