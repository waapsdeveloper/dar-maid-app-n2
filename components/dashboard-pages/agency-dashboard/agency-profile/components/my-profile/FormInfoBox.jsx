'use client';

import React, { useState } from "react";
import Select from "react-select";

const FormInfoBox = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactPersonName: "",
    agencyRegistrationNumber: "",
    profileImage: null,
    officeAddress: "",
    country: "",
    contractInfo: "",
    phoneNumber: "",
    emailAddress: "",
    agencyWebsite: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row" style={{ gap: "0" }}>
        {/* Full Name/Agency Name */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Full Name / Agency Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe / Company XYZ"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contact Person Name */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Contact Person Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="contactPersonName"
            placeholder="John Doe"
            value={formData.contactPersonName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Agency Registration Number */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Agency Registration Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="agencyRegistrationNumber"
            placeholder="dfaj21132"
            value={formData.agencyRegistrationNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Profile Picture/Logo Upload */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Profile Picture / Logo <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        {/* Office Address */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Office Address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="officeAddress"
            placeholder="123 Main St, Manama"
            value={formData.officeAddress}
            onChange={handleChange}
            required
          />
        </div>

        {/* Country */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Country <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="country"
            placeholder="Bahrain"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contract Info */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Contract Info <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="contractInfo"
            placeholder="Contract details"
            value={formData.contractInfo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Phone Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="+973 1234 5678"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }}
            className="form-control"
          />
          <style jsx>{`
            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          `}</style>
        </div>

        {/* Email Address */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            name="emailAddress"
            placeholder="example@agency.com"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>

        {/* Agency Website */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Agency Website <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="url"
            name="agencyWebsite"
            placeholder="https://www.agency.com"
            value={formData.agencyWebsite}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-12 col-md-12" style={{ marginBottom: "1rem" }}>
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

export default FormInfoBox;