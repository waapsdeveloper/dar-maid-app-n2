'use client'

import Select from "react-select";
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

// Define inputStyle for inputs
const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  backgroundColor: "#F0F5F7",
  boxSizing: "border-box",
};

// Define tickBoxStyle for the tick container
const tickBoxStyle = (isSelected) => ({
  position: "absolute",
  right: "20px",
  top: "30%",
  transform: "translateY(-50%)",
  width: "24px",
  height: "24px",
  border: `1px solid ${isSelected ? "#28a745" : "#d0d0d0"}`,
  borderRadius: "50%",
  backgroundColor: isSelected ? "#28a745" : "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
});

const CommunicationCulturalFit = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        languagesSpoken: "",
        preferredEmployeeLanguage: "",
        dietaryPreferences: "",
        culturalExpectations: "",
    });

    // Handle input changes
    const handleChange = (field, value) => {
        setFormFormData({ ...formData, [field]: value });
    };

    // Handle select changes for react-select
    const handleSelectChange = (field) => (selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : "" });
    };

    // Dropdown options formatted for react-select
    const languageOptions = [
        { value: "English", label: "English" },
        { value: "Arabic", label: "Arabic" },
        { value: "Other", label: "Other" },
    ];

    const dietaryOptions = [
        { value: "Halal", label: "Halal" },
        { value: "Vegetarian", label: "Vegetarian" },
        { value: "No Pork", label: "No Pork" },
        { value: "Vegan", label: "Vegan" },
        { value: "Gluten-Free", label: "Gluten-Free" },
        { value: "Other", label: "Other" },
    ];

    // Form field configurations
    const fields = [
        {
            type: "select",
            name: "languagesSpoken",
            label: "Languages Spoken at Home",
            options: languageOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Languages",
            required: true,
        },
        {
            type: "text",
            name: "preferredEmployeeLanguage",
            label: "Preferred Employee Language(s)",
            placeholder: "Enter preferred language(s)",
            colClass: "col-lg-3 col-md-12",
            required: true,
            style: inputStyle,
        },
        {
            type: "select",
            name: "dietaryPreferences",
            label: "Dietary Preferences",
            options: dietaryOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Dietary Preferences",
            required: true,
        },
        {
            type: "text",
            name: "culturalExpectations",
            label: "Cultural Expectations / Notes",
            placeholder: "Enter cultural expectations or notes",
            colClass: "col-lg-12 col-md-12",
            required: true,
            style: inputStyle,
        },
    ];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        // Add your form submission logic here, such as API calls
    };

    return (
        <CardForm
            fields={fields}
            formData={formData}
            onSubmit={handleSubmit}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
        />
    );
};

export default CommunicationCulturalFit;