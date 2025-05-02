'use client'

import { useState } from "react";
import CardForm from "@/templates/forms/card-form";

// Define buttonStyle at the top level for consistent styling
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

// Define inputStyle for file and date inputs
const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  backgroundColor: "#F0F5F7",
  boxSizing: "border-box",
  height: "60px"
};

// Define tickBoxStyle for the tick container
const tickBoxStyle = (isFileSelected) => ({
  position: "absolute",
  right: "20px",
  top: "30%",
  transform: "translateY(-30%)",
  width: "24px",
  height: "24px",
  border: `1px solid ${isFileSelected ? "#28a745" : "#d0d0d0"}`,
  borderRadius: "50%",
  backgroundColor: isFileSelected ? "#28a745" : "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
});

const LegalCompliance = () => {
    const [formData, setFormData] = useState({
        registeredLegalName: "",
        tradeLicenseNumber: "",
        licenseExpiryDate: "",
        yearsInOperation: "",
        agencyType: "",
        tradeLicense: null,
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSelectChange = (field) => (selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : "" });
    };

    const handleFileChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.files[0] });
    };

    const agencyTypeOptions = [
        { value: "Local", label: "Local" },
        { value: "International", label: "International" },
        { value: "Referral Only", label: "Referral Only" },
        { value: "Full-Service", label: "Full-Service" },
    ];

    const fields = [
        {
            type: "text",
            name: "registeredLegalName",
            label: "Registered Legal Name",
            placeholder: "Enter registered legal name",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "tradeLicenseNumber",
            label: "Trade License Number",
            placeholder: "Enter trade license number",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
       
        {
            type: "number",
            name: "yearsInOperation",
            label: "Years in Operation",
            placeholder: "Enter years in operation",
            colClass: "col-lg-3 col-md-12",
            min: "0",
            required: true,
        },
        {
            type: "select",
            name: "agencyType",
            label: "Agency Type",
            options: agencyTypeOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select agency type",
            required: true,
        },
        {
            type: "date",
            name: "licenseExpiryDate",
            label: "License Expiry Date",
            colClass: "col-lg-6 col-md-12",
            required: true,
            style: inputStyle,
        },
        {
            type: "file",
            name: "tradeLicense",
            label: "Upload Trade License",
            accept: ".pdf",
            colClass: "col-lg-6 col-md-12",
            required: true,
            style: inputStyle,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        // Add your form submission logic here, such as API calls
    };

    return (
        <CardForm
            fields={fields}
            formData={formData}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            handleFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
};

export default LegalCompliance;