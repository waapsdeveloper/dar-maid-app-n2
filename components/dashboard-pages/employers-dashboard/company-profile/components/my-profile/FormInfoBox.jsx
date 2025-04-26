'use client'

import { useState } from "react";
import Select from "react-select";

const FormInfoBox = () => {
    const [formData, setFormData] = useState({
        gender: "",
        dateOfBirth: "",
        nationality: "",
        religion: "",
        householdType: "",
        adults: "",
        children: "",
        childrenAgeRange: "",
        elderlyDependents: "",
        specialNeeds: "",
        specialNeedsCare: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSelectChange = (field) => (selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : "" });
    };

    const genderOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
    ];
    const nationalityOptions = [
        { value: "Bahrain", label: "Bahrain" },
        { value: "Kuwait", label: "Kuwait" },
        { value: "Oman", label: "Oman" },
        { value: "Qatar", label: "Qatar" },
        { value: "Saudi Arabia", label: "Saudi Arabia" },
        { value: "United Arab Emirates", label: "United Arab Emirates" },
    ];
    const religionOptions = [
        { value: "Islam", label: "Islam" },
        { value: "Christianity", label: "Christianity" },
        { value: "Hinduism", label: "Hinduism" },
        { value: "Sikh", label: "Sikh" },
        { value: "Other", label: "Other" },
    ];
    const householdTypeOptions = [
        { value: "Local", label: "Local" },
        { value: "Expat", label: "Expat" },
    ];
    const childrenAgeRangeOptions = [
        { value: "Infant", label: "Infant" },
        { value: "Toddler", label: "Toddler" },
        { value: "Teen", label: "Teen" },
    ];
    const yesNoOptions = ["Yes", "No"];

    const fields = [
        {
            type: "select",
            name: "gender",
            label: "Gender",
            options: genderOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "date",
            name: "dateOfBirth",
            label: "Date of Birth",
            colClass: "col-lg-3 col-md-12",
            required: true,
            style: { backgroundColor: "#F0F5F7", height: "60px", border: "none" },
        },
        {
            type: "select",
            name: "nationality",
            label: "Nationality",
            options: nationalityOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "religion",
            label: "Religion",
            options: religionOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "householdType",
            label: "Household Type",
            options: householdTypeOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "number",
            name: "adults",
            label: "Household Size - Adults",
            placeholder: "Number of Adults",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "number",
            name: "children",
            label: "Household Size - Children",
            placeholder: "Number of Children",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "childrenAgeRange",
            label: "Children’s Age Range",
            options: childrenAgeRangeOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "radio",
            name: "elderlyDependents",
            label: "Do you have elderly dependents?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "radio",
            name: "specialNeeds",
            label: "Do you have people with special needs?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "radio",
            name: "specialNeedsCare",
            label: "Do they require care?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
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
                        {field.type === "radio" && (
                            <div style={{ display: "flex", gap: "20px" }}>
                                {field.options.map((option, idx) => (
                                    <label key={idx} style={{ display: "flex", alignItems: "center" }}>
                                        <input
                                            type="radio"
                                            name={field.name}
                                            value={option.toLowerCase()}
                                            checked={formData[field.name] === option.toLowerCase()}
                                            onChange={(e) => handleChange(field.name, e.target.value)}
                                            required={field.required}
                                            style={{ transform: "scale(1.5)", marginRight: "8px" }}
                                        />
                                        <span style={{ fontSize: "1.1rem" }}>{option}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                        {field.type === "date" && (
                            <input
                                type="date"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.required}
                                className="form-control"
                                style={field.style}
                            />
                        )}
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
                        {field.type === "number" && (
                            <input
                                type="number"
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.required}
                                className="form-control"
                                min="0"
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

export default FormInfoBox;