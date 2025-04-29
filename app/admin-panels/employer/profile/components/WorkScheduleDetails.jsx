'use client'

import { useState } from "react";

const WorkScheduleOfferDetails = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        startDate: "",
        workDaysPerWeek: "",
        dailyHours: "",
        dayOffPreference: "",
        salaryRange: "",
        otherBenefits: "",
        visaSponsorship: "",
        budgetFlexibility: "",
    });

    // Handle input changes
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    // Radio options
    const yesNoOptions = ["Yes", "No"];

    // Form field configurations
    const fields = [
        {
            type: "date",
            name: "startDate",
            label: "Start Date",
            colClass: "col-lg-3 col-md-12",
            required: true,
            style: { backgroundColor: "#F0F5F7", height: "60px", border: "none" },
        },
        {
            type: "number",
            name: "workDaysPerWeek",
            label: "Work Days per Week",
            placeholder: "Enter number of days",
            colClass: "col-lg-3 col-md-12",
            required: true,
            min: "1",
            max: "7",
        },
        {
            type: "number",
            name: "dailyHours",
            label: "Daily Hours",
            placeholder: "Enter hours per day",
            colClass: "col-lg-3 col-md-12",
            required: true,
            min: "1",
            max: "24",
        },
        {
            type: "text",
            name: "dayOffPreference",
            label: "Day Off Preference",
            placeholder: "e.g., Sunday",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "number",
            name: "salaryRange",
            label: "Salary Range (BHD)",
            placeholder: "Enter amount in BHD",
            colClass: "col-lg-3 col-md-12",
            required: true,
            min: "0",
        },
        {
            type: "text",
            name: "otherBenefits",
            label: "Other Benefits Offered",
            placeholder: "e.g., Accommodation, Transport",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "radio",
            name: "visaSponsorship",
            label: "Visa Sponsorship Provided?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "radio",
            name: "budgetFlexibility",
            label: "Budget Flexibility?",
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
                        {field.type === "number" && (
                            <input
                                type="number"
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.required}
                                className="form-control"
                                min={field.min}
                                max={field.max}
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

export default WorkScheduleOfferDetails;