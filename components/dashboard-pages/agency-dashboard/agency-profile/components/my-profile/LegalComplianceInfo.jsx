'use client';

import React, { useState } from "react";
import Select from "react-select";

const LegalComplianceInfo = () => {
  const [formData, setFormData] = useState({
    registeredLegalName: "",
    tradeLicenseNumber: "",
    licenseExpiryDate: "",
    yearsInOperation: "",
    agencyType: "",
    tradeLicense: null,
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

  const agencyTypes = [
    "Local",
    "International",
    "Referral Only",
    "Full-Service",
  ];

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row" style={{ gap: "0" }}>
        {/* Registered Legal Name */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Registered Legal Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="registeredLegalName"
            placeholder="XYZ Agency"
            value={formData.registeredLegalName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Trade License Number */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Trade License Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="tradeLicenseNumber"
            placeholder="TL123456"
            value={formData.tradeLicenseNumber}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* License Expiry Date */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            License Expiry Date <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="date"
            name="licenseExpiryDate"
            className="form-control"
            placeholder="Select date"
            value={formData.licenseExpiryDate}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Years in Operation */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Years in Operation <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="yearsInOperation"
            placeholder="E.g., 5"
            min="0"
            value={formData.yearsInOperation}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Agency Type */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Agency Type <span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="agencyType"
            value={formData.agencyType}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Agency Type</option>
            {agencyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Upload Trade License */}
        <div className="form-group col-lg-6 col-md-12" style={{ marginBottom: "1rem" }}>
          <label>
            Upload Trade License <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="file"
            name="tradeLicense"
            accept=".pdf"
            className="form-control"
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* Submit Button */}
        {/* <div className="form-group col-lg-12 col-md-12" style={{ marginBottom: "1rem" }}>
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
        </div> */}
      </div>
    </form>
  );
};

export default LegalComplianceInfo;