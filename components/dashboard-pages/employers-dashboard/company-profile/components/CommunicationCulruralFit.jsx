'use client'

import { useState } from "react";
import Select from "react-select";

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
        setFormData({ ...formData, [field]: value });
    };

    // Handle react-select changes
    const handleSelectChange = (field) => (selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : "" });
    };

    // Dropdown options
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
            required: true,
        },
        {
            type: "text",
            name: "preferredEmployeeLanguage",
            label: "Preferred Employee Language(s)",
            placeholder: "Enter preferred language(s)",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "dietaryPreferences",
            label: "Dietary Preferences",
            options: dietaryOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "culturalExpectations",
            label: "Cultural Expectations / Notes",
            placeholder: "Enter cultural expectations or notes",
            colClass: "col-lg-12 col-md-12",
            required: true,
        },
    ];

    return (
        <form className="default-form" style={{ overflow: "hidden" }}>
            <div className="row" style={{ padding: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap", margin: "0" }}>
                {fields.map((field, index) => (
                    <div
                        key={index}
                        className={`form-group ${field.colClass}`}
                        style={{ display: "flex", flexDirection: "column", marginBottom: "1.5rem" }}
                    >
                        <label
                            style={{
                                color: "#696969",
                                fontWeight: "500",
                                minHeight: "2rem",
                                whiteSpace: "normal",
                                wordWrap: "break-word",
                            }}
                        >
                            {field.label} {field.required && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {field.type === "select" && (
                            <Select
                                name={field.name}
                                options={field.options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder={`Select ${field.label}`}
                                value={field.options.find(option => option.value === formData[field.name]) || null}
                                onChange={handleSelectChange(field.name)}
                                required={field.required}
                            />
                        )}
                        {field.type === "text" && (
                            <input
                                type="text"
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.required}
                                className="form-control"
                            />
                        )}
                    </div>
                ))}
                <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", marginTop: "1rem", paddingRight: "2.5rem" }}>
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

export default CommunicationCulturalFit;