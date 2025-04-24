'use client';

import React, { useState } from "react";
import Select from "react-select";

const ServiceOfferingDetails = () => {
  const [formData, setFormData] = useState({
    servicesProvided: [],
    countriesOfOperation: [],
    languagesSpoken: "",
    employeeNationalities: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, selectedOptions) => {
    setFormData({
      ...formData,
      [name]: selectedOptions ? selectedOptions.map((option) => option.value) : [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const serviceOptions = [
    { value: "Recruitment", label: "Recruitment" },
    { value: "Visa Sponsorship", label: "Visa Sponsorship" },
    { value: "Housing", label: "Housing" },
    { value: "Airport Pickup", label: "Airport Pickup" },
  ];

  // Updated countryOptions to include only Gulf countries
  const countryOptions = [
    { value: "Bahrain", label: "Bahrain" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Oman", label: "Oman" },
    { value: "Qatar", label: "Qatar" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
  ];

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row" style={{ gap: "0" }}>
        {/* Services Provided */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Services Provided <span style={{ color: "red" }}>*</span>
          </label>
          <Select
            isMulti
            name="servicesProvided"
            options={serviceOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(selected) => handleSelectChange("servicesProvided", selected)}
            placeholder="Select services..."
            required
          />
        </div>

        {/* Countries of Operation */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Countries of Operation <span style={{ color: "red" }}>*</span>
          </label>
          <Select
            isMulti
            name="countriesOfOperation"
            options={countryOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(selected) => handleSelectChange("countriesOfOperation", selected)}
            placeholder="Select countries..."
            required
          />
        </div>

        {/* Languages Spoken by Staff */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Languages Spoken by Staff <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="languagesSpoken"
            placeholder="E.g., English, Arabic, Hindi"
            value={formData.languagesSpoken}
            onChange={handleChange}
            required
          />
        </div>

        {/* Employee Nationalities Typically Represented */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Employee Nationalities Typically Represented <span style={{ color: "red" }}>*</span>
          </label>
          <Select
            isMulti
            name="employeeNationalities"
            options={countryOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(selected) => handleSelectChange("employeeNationalities", selected)}
            placeholder="Select nationalities..."
            required
          />
        </div>

        {/* Submit Button */}
        <div
          className="form-group col-lg-12 col-md-12"
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "0.5rem",
              backgroundColor: "#1a73e8",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Save Details
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceOfferingDetails;