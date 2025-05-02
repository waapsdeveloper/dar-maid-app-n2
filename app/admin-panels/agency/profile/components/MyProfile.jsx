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

// Define inputStyle for file inputs
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

const MyProfile = () => {
    const [formData, setFormData] = useState({
        name: "",
        logo: null,
        agencyName: "",
        officeAddress: "",
        country: "",
        contractInfo: "",
        phoneNumber: "",
        emailAddress: "",
        agencyWebsite: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleFileChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.files[0] });
    };

    const fields = [
        {
            type: "text",
            name: "name",
            label: "Name",
            placeholder: "Enter name",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
       
        {
            type: "text",
            name: "agencyName",
            label: "Agency Name",
            placeholder: "Enter agency name",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "officeAddress",
            label: "Office Address",
            placeholder: "Enter office address",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "country",
            label: "Country",
            placeholder: "Enter country",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "contractInfo",
            label: "Contract Info",
            placeholder: "Enter contract information",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "number",
            name: "phoneNumber",
            label: "Phone Number",
            placeholder: "Enter phone number",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "email",
            name: "emailAddress",
            label: "Email Address",
            placeholder: "Enter email address",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "agencyWebsite",
            label: "Agency Website",
            placeholder: "Enter website URL",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "file",
            name: "logo",
            label: "Logo",
            accept: "image/*",
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
            handleFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
};

export default MyProfile;