'use client'

import { useState } from "react";

const ResidenceInfo = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        residenceType: "",
        buildingNo: "",
        roadNo: "",
        blockNo: "",
        city: "",
        country: "",
        typeOfResidence: "",
        accommodationProvided: "",
    });

    // Handle input changes
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    // Dropdown and radio options
    // const residenceTypeOptions = ["House", "Flat", "Apartment", "Villa"];
    const countryOptions = [
        "Bahrain",
        "Kuwait",
        "Oman",
        "Qatar",
        "Saudi Arabia",
        "United Arab Emirates",
    ];
    const typeOfResidenceOptions = ["House", "Flat","Villa", "Apartment"];
    const yesNoOptions = ["Yes", "No"];

    // Form field configurations
    const fields = [
        // {
        //     type: "select",
        //     name: "residenceType",
        //     label: "House/Flat/Apartment/Villa",
        //     options: residenceTypeOptions,
        //     colClass: "col-lg-3 col-md-12",
        //     required: true,
        // },
        {
            type: "select",
            name: "typeOfResidence",
            label: "Type of Residence",
            options: typeOfResidenceOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "buildingNo",
            label: "Building No",
            placeholder: "Enter building number",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "roadNo",
            label: "Road No",
            placeholder: "Enter road number",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "blockNo",
            label: "Block No",
            placeholder: "Enter block number",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "text",
            name: "city",
            label: "City / Area",
            placeholder: "Enter city or area",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "country",
            label: "Country",
            options: countryOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        
        {
            type: "radio",
            name: "accommodationProvided",
            label: "Accommodation Provided?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
    ];

    return (
        <form className="default-form">
            <div className="row" style={{ padding: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
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
                        {field.type === "select" && (
                            <select
                                className="chosen-single form-select"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.required}
                            >
                                <option value="">Select {field.label}</option>
                                {field.options.map((option, idx) => (
                                    <option key={idx} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
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

export default ResidenceInfo;