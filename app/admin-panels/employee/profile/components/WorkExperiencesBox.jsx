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
    router.push("/panels/employee/profile/work-experience");
  };

  return (
    <div>      

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