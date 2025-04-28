'use client';

import { useState } from "react";
import FancyTable from "@/templates/tables/fancy-table";

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
    { key: "employerName", label: "Employer Name" },
    { key: "employmentLocation", label: "Employment Location" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    { key: "designation", label: "Designation" },    
  ];

  const rightOptionsHtml = `
    <button
      type="button"
      style="padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; background-color: #1a73e8; color: white; cursor: pointer; font-size: 1rem; font-weight: 600;"
      onclick="window.dispatchEvent(new CustomEvent('openAddExperienceModal'))"
    >
      + Add Experience
    </button>
  `;

  // Listen for the custom event to open the modal
  if (typeof window !== "undefined") {
    window.addEventListener("openAddExperienceModal", () => setIsModalOpen(true));
  }

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
            {/* Add form fields here */}
            <button
              type="button"
              style={buttonStyle}
              onClick={saveExperience}
            >
              Save Details
            </button>
          </div>
        </div>
      )}

      {/* FancyTable is always displayed */}
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