'use client';

import { useState } from "react";
import FancyTable from "@/templates/tables/fancy-table";
import { useRouter } from "next/navigation";

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

  

  const router = useRouter();
  

  const navigateToAddExperience = () => {
    router.push("/candidate/profile/work-experience");
  };

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
          onClick={() => navigateToAddExperience()}
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
};

export default JobExperienceCard;