'use client'

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

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Registered Legal Name */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Registered Legal Name</label>
          <input
            type="text"
            name="registeredLegalName"
            placeholder="XYZ Agency"
            value={formData.registeredLegalName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Trade License Number */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Trade License Number</label>
          <input
            type="text"
            name="tradeLicenseNumber"
            placeholder="TL123456"
            value={formData.tradeLicenseNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* License Expiry Date */}
        <div className="form-group col-lg-6 col-md-12">
          <label>License Expiry Date</label>
          <input
            type="date"
            name="licenseExpiryDate"
            className="form-control"
            placeholder="Select date"
            value={formData.licenseExpiryDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Years in Operation */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Years in Operation</label>
          <input
            type="number"
            name="yearsInOperation"
            placeholder="E.g., 5"
            min="0"
            value={formData.yearsInOperation}
            onChange={handleChange}
            required
          />
        </div>

        {/* Agency Type */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Agency Type</label>
          <select
            name="agencyType"
            value={formData.agencyType}
            onChange={handleChange}
            required
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
        <div className="form-group col-lg-6 col-md-12">
          <label>Upload Trade License</label>
          <input
            type="file"
            name="tradeLicense"
            accept=".pdf"
            className="form-control"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default LegalComplianceInfo;