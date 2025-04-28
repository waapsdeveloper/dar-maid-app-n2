'use client';

import { useState } from "react";
import FancyTable from "@/templates/tables/fancy-table";
import CardForm from "@/templates/forms/card-form";

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
    resetForm();
  };

  const resetForm = () => {
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
    setIsEditing(false);
    setEditId(null);
  };

  const editExperience = (exp) => {
    setNewExperience(exp);
    setIsEditing(true);
    setEditId(exp.id);
    setIsModalOpen(true);
  };

  const deleteExperience = (id) => {
    setJobExperiences(jobExperiences.filter((exp) => exp.id !== id));
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

  const fields = [
    {
      type: "text",
      name: "employerName",
      label: "Employer Name",
      placeholder: "Enter employer name",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "text",
      name: "employmentLocation",
      label: "Employment Location",
      placeholder: "Enter employment location",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "number",
      name: "employerPhone",
      label: "Employer Phone",
      placeholder: "Enter employer phone number",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "email",
      name: "employerEmail",
      label: "Employer Email Address",
      placeholder: "Enter employer email address",
      colClass: "col-lg-3 col-md-12",
      required: true,
    },
    {
      type: "select",
      name: "country",
      label: "Country",
      options: gulfCountriesOptions,
      placeholder: "Select Country",
      colClass: "col-lg-3 col-md-12",
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
    },
    {
      type: "date",
      name: "endDate",
      label: "End Date",
      colClass: "col-lg-3 col-md-12",
      required: true,
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
    <div>
      {isModalOpen && (
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
        >
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
            {fields.map((field, index) => (
              <div key={index} className={`form-group ${field.colClass}`}>
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
                  />
                ) : field.type === "select" ? (
                  <select
                    name={field.name}
                    value={newExperience[field.name]}
                    onChange={(e) => handleNewExperienceChange(field.name, e.target.value)}
                    required={field.required}
                  >
                    <option value="">Select Option</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows={4}
                    value={newExperience[field.name]}
                    onChange={(e) => handleNewExperienceChange(field.name, e.target.value)}
                    required={field.required}
                  />
                ) : null}
              </div>
            ))}
            <div className="form-group col-lg-12 col-md-12">
              <button
                type="button"
                style={buttonStyle}
                onClick={saveExperience}
              >
                {isEditing ? "Update Experience" : "Add Experience"}
              </button>
              <button
                type="button"
                style={{ ...buttonStyle, backgroundColor: "#dc3545", marginLeft: "1rem" }}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <FancyTable
        fields={fields}
        data={jobExperiences}
        title="Work Experiences"
        filterOptions={[]}
      />
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setIsModalOpen(true)}
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
};

export default JobExperienceCard;