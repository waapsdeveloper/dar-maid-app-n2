"use client";
import { useState } from "react";

const JobExperienceCard = () => {
  const [experiences, setExperiences] = useState([]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { id: Date.now(), jobTitle: "", company: "", years: "" },
    ]);
  };

  const updateExperience = (id, field, value) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <form className="default-form">

      <div className="form-group col-lg-6 col-md-12">
        <label>Expereinces</label>


        {experiences.map((exp) => (
          <div key={exp.id} >
            <div className="form-group col-lg-6 col-md-12">
              <input
                type="text"
                placeholder="Job Title"
                value={exp.jobTitle}
                onChange={(e) => updateExperience(exp.id, "jobTitle", e.target.value)}
                required
              />
            </div>

            <div className="form-group col-lg-6 col-md-12">
              <input
                type="text"
                placeholder="Company Name"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                required
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <input
                type="number"
                placeholder="Years Worked"
                value={exp.years}
                min="0"
                onChange={(e) => updateExperience(exp.id, "years", e.target.value)}
                required
              />
            </div>
            <div className="form-group col-lg-12 col-md-12">
              <button className="theme-btn btn-style-three" onClick={() => deleteExperience(exp.id)}>
                Delete Experience
              </button>
            </div>
          </div>
        ))}
        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-one" onClick={addExperience}>
            Add Experience
          </button>
        </div>
      </div>
    </form>
  );
};

export default JobExperienceCard;
