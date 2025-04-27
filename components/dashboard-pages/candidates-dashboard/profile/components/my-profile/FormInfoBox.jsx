'use client'

import Select from "react-select";
import { useState } from "react";

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

// Define inputStyle for file inputs (matching Document.jsx)
const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  backgroundColor: "#F0F5F7",
  boxSizing: "border-box",
};

// Define tickBoxStyle for the tick container
const tickBoxStyle = (isFileSelected) => ({
  position: "absolute",
  right: "20px",
  top: "30%",
  transform: "translateY(-50%)",
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

const FormInfoBox = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        role: "",
        age: "",
        childrenCount: "",
        no_of_days_available: "",
        profileImage: null,
        passportCopy: null,
        visaCopy: null,
        cprCopy: null,
        dob: "",
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

    const catOptions = [
        { value: "Banking", label: "Banking" },
        { value: "Digital & Creative", label: "Digital & Creative" },
        { value: "Retail", label: "Retail" },
        { value: "Human Resources", label: "Human Resources" },
        { value: "Managemnet", label: "Managemnet" },
        { value: "Accounting & Finance", label: "Accounting & Finance" },
        { value: "Digital", label: "Digital" },
        { value: "Creative Art", label: "Creative Art" },
    ];

    const nationalityOptions = [
        { value: "Bahraini", label: "Bahraini" },
        { value: "Kuwaiti", label: "Kuwaiti" },
        { value: "Omani", label: "Omani" },
        { value: "Qatari", label: "Qatari" },
        { value: "Saudi", label: "Saudi" },
        { value: "Emirati", label: "Emirati" },
    ];

    const gulfCountries = [
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

    const maritalStatusOptions = [
        { value: "Single", label: "Single" },
        { value: "Married", label: "Married" },
        { value: "Divorced", label: "Divorced" },
        { value: "Widowed", label: "Widowed" },
    ];

    const workAvailableOptions = [
        { value: "Immediately", label: "Immediately" },
        { value: "After Days", label: "After Days" },
    ];

    const genderOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
    ];

    const yesNoOptions = [
        { value: "true", label: "Yes" },
        { value: "false", label: "No" },
    ];

    const fields = [
        {
            type: "text",
            name: "fullName",
            label: "Full Name",
            placeholder: "John Doe",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "email",
            label: "Email",
            placeholder: "employee@gmail.com",
            colClass: "col-lg-3 col-md-12",
            readOnly: true,
        },
        {
            type: "text",
            name: "role",
            label: "Role",
            placeholder: "Employee",
            colClass: "col-lg-3 col-md-12",
            readOnly: true,
        },
        {
            type: "select",
            name: "gender",
            label: "Gender",
            options: genderOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Gender",
            required: true,
        },
        {
            type: "text",
            name: "address",
            label: "Address",
            placeholder: "Enter your address",
            colClass: "col-lg-12 col-md-12",
            required: true,
        },
        {
            type: "number",
            name: "age",
            label: "Age",
            placeholder: "Enter age",
            colClass: "col-lg-3 col-md-12",
            min: "18",
            required: true,
        },
        {
            type: "date",
            name: "dob",
            label: "Date of Birth",
            colClass: "col-lg-3 col-md-12",
            required: true,
            style: inputStyle,
        },
        {
            type: "select",
            name: "nationality",
            label: "Nationality",
            options: nationalityOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Nationality",
            required: true,
        },
        {
            type: "select",
            name: "religion",
            label: "Religion",
            options: religionOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Religion",
            required: true,
        },
        {
            type: "select",
            name: "maritalStatus",
            label: "Marital Status",
            options: maritalStatusOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Marital Status",
            required: true,
        },
        {
            type: "number",
            name: "childrenCount",
            label: "Number of Children",
            placeholder: "0",
            colClass: "col-lg-3 col-md-12",
            min: "0",
            required: true,
        },
        {
            type: "select",
            name: "in_bahrain",
            label: "Currently in Bahrain?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Option",
            required: true,
        },
        {
            type: "select",
            name: "outside_country",
            label: "If outside Bahrain, specify country",
            options: gulfCountries,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Country",
            required: true,
        },
        {
            type: "select",
            name: "work_available",
            label: "Work Available",
            options: workAvailableOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select availability",
            required: true,
        },
        {
            type: "text",
            name: "no_of_days_available",
            label: "Available after how many days?",
            placeholder: "Number of days",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "current_location",
            label: "Current Location",
            options: gulfCountries,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Country",
            required: true,
        },
        {
            type: "file",
            name: "profileImage",
            label: "Profile Picture",
            accept: "image/*",
            colClass: "col-lg-6 col-md-12",
            required: true,
            style: inputStyle,
        },
        {
            type: "file",
            name: "passport_copy",
            label: "Passport Copy",
            accept: ".pdf,.jpg,.png",
            colClass: "col-lg-6 col-md-12",
            required: true,
            style: inputStyle,
        },
        {
            type: "file",
            name: "visa_copy",
            label: "Visa Copy",
            accept: ".pdf,.jpg,.png",
            colClass: "col-lg-6 col-md-12",
            required: true,
            style: inputStyle,
        },
        {
            type: "file",
            name: "cpr_copy",
            label: "CPR Copy",
            accept: ".pdf,.jpg,.png",
            colClass: "col-lg-6 col-md-12",
            required: true,
            style: inputStyle,
        },
    ];

    return (
        <form className="default-form">
            <div className="row">
                {fields.map((field, index) => (
                    <div
                        key={index}
                        className={`form-group ${field.colClass}`}
                        style={field.type === "file" ? { position: "relative", minHeight: "60px" } : {}}
                    >
                        <label>
                            {field.label} {field.required && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {field.type === "text" || field.type === "number" ? (
                            <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.required}
                                readOnly={field.readOnly}
                                min={field.min}
                            />
                        ) : field.type === "date" ? (
                            <input
                                type="date"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.required}
                                style={field.style}
                            />
                        ) : field.type === "select" ? (
                            <Select
                                name={field.name}
                                options={field.options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder={field.placeholder}
                                value={field.options.find(option => option.value === formData[field.name]) || null}
                                onChange={handleSelectChange(field.name)}
                                required={field.required}
                            />
                        ) : field.type === "file" ? (
                            <div style={{ position: "relative" }}>
                                <div>
                                    <input
                                        type="file"
                                        name={field.name}
                                        accept={field.accept}
                                        onChange={handleFileChange(field.name)}
                                        required={field.required}
                                        style={field.style}
                                    />
                                    {formData[field.name] && (
                                        <div className="mt-2 text-muted small">
                                            Selected: {formData[field.name].name}
                                        </div>
                                    )}
                                </div>
                                <div style={tickBoxStyle(!!formData[field.name])}>
                                    <span
                                        style={{
                                            color: formData[field.name] ? "#ffffff" : "gray",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        ✔
                                    </span>
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}

                {/* Submit Button */}
                <div
                    className="form-group col-lg-12 col-md-12"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <button type="submit" style={buttonStyle}>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormInfoBox;