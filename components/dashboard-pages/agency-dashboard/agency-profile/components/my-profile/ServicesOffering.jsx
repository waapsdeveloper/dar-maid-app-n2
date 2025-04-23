'use client'

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
    // Add more services as needed
  ];

  const countryOptions = [
    { value: "Bahrain", label: "Bahrain" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
    { value: "Australia", label: "Australia" },
    // Add more countries as needed
  ];

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Services Provided */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Services Provided</label>
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
        <div className="form-group col-lg-6 col-md-12">
          <label>Countries of Operation</label>
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
        <div className="form-group col-lg-6 col-md-12">
          <label>Languages Spoken by Staff</label>
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
        <div className="form-group col-lg-6 col-md-12">
          <label>Employee Nationalities Typically Represented</label>
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
      </div>
    </form>
  );
};

export default ServiceOfferingDetails;