'use client'

import { useState } from "react";

const JobPreference = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        jobType: "",
        specificTasks: {
            cleaning: [],
            laundry: [],
            careAndEscortOfChildren: [],
            cooking: [],
            cookingType: "",
            childcareInfants: [],
            elderlyCare: [],
            driving: [],
            petCare: [],
            specialNeedsCare: [],
        },
        genderPreference: "",
        nationalityPreference: "",
        experienceLevel: "",
        requireReferences: "",
        expectTravel: "",
    });

    // Handle input changes
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    // Handle specific tasks changes (multi-select)
    const handleTaskChange = (task, selectedOptions) => {
        const values = Array.from(selectedOptions).map(option => option.value);
        setFormData({
            ...formData,
            specificTasks: {
                ...formData.specificTasks,
                [task]: values,
                ...(task === "cooking" && !values.includes("Must Have") && !values.includes("Nice to Have") ? { cookingType: "" } : {}),
            },
        });
    };

    // Handle cooking type change
    const handleCookingTypeChange = (value) => {
        setFormData({
            ...formData,
            specificTasks: {
                ...formData.specificTasks,
                cookingType: value,
            },
        });
    };

    // Handle form submission with validation
    const handleSubmit = (e) => {
        e.preventDefault();
        const specificTasks = formData.specificTasks;
        const tasks = [
            "cleaning",
            "laundry",
            "careAndEscortOfChildren",
            "cooking",
            "childcareInfants",
            "elderlyCare",
            "driving",
            "petCare",
            "specialNeedsCare",
        ];

        // Check if all specific tasks have at least one option selected
        const allTasksFilled = tasks.every(task => specificTasks[task].length > 0);

        if (!allTasksFilled) {
            alert("Please select at least one option for each Specific Task.");
            return;
        }

        // If validation passes, proceed with form submission logic
        console.log("Form submitted:", formData);
    };

    // Dropdown and radio options
    const jobTypeOptions = [
        "Full-Time",
        "Part-Time",
        "Live-in",
        "Live-out",
        "Temporary",
        "Monthly",
        "Newborn Nanny",
    ];
    const specificTaskOptions = ["Must Have", "Nice to Have", "Not Required"];
    const genderOptions = ["Male", "Female", "No Preference"];
    const nationalityOptions = [
        "Bahrain",
        "Kuwait",
        "Oman",
        "Qatar",
        "Saudi Arabia",
        "United Arab Emirates",
    ];
    const experienceLevelOptions = ["Beginner", "Intermediate", "Expert"];
    const yesNoOptions = ["Yes", "No"];
    const travelOptions = ["Yes", "Occasionally", "No"];

    // Form field configurations
    const fields = [
        {
            type: "select",
            name: "jobType",
            label: "Job Type",
            options: jobTypeOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "specificTasks",
            name: "specificTasks",
            label: "Specific Tasks",
            tasks: [
                { name: "cleaning", label: "Cleaning", required: true },
                { name: "laundry", label: "Laundry", required: true },
                { name: "careAndEscortOfChildren", label: "Care and Escort of Children", required: true },
                { name: "cooking", label: "Cooking", required: true },
                { name: "childcareInfants", label: "Childcare (infants)", required: true },
                { name: "elderlyCare", label: "Elderly Care", required: true },
                { name: "driving", label: "Driving", required: true },
                { name: "petCare", label: "Care of Domestic Animals (Pet Care)", required: true },
                { name: "specialNeedsCare", label: "Care of People with Special Needs", required: true },
            ],
            options: specificTaskOptions,
            colClass: "col-lg-12 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "genderPreference",
            label: "Gender Preference",
            options: genderOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "nationalityPreference",
            label: "Nationality Preference",
            options: nationalityOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "select",
            name: "experienceLevel",
            label: "Experience Level",
            options: experienceLevelOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "radio",
            name: "requireReferences",
            label: "Do You Require References?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "radio",
            name: "expectTravel",
            label: "Do You Expect Employee to Travel?",
            options: travelOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
    ];

    return (
        <form className="default-form" style={{ overflow: "hidden" }} onSubmit={handleSubmit}>
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
                        {field.type === "specificTasks" && (
                            <div className="row">
                                {field.tasks.map((task, idx) => (
                                    <div
                                        key={idx}
                                        className="form-group col-lg-3 col-md-12"
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
                                            {task.label} {task.required && <span style={{ color: "red" }}>*</span>}
                                        </label>
                                        <select
                                            className="chosen-single form-select"
                                            multiple
                                            value={formData.specificTasks[task.name]}
                                            onChange={(e) => handleTaskChange(task.name, e.target.selectedOptions)}
                                            required={field.required}
                                        >
                                            {field.options.map((option, optIdx) => (
                                                <option key={optIdx} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {task.name === "cooking" &&
                                            (formData.specificTasks.cooking.includes("Must Have") ||
                                                formData.specificTasks.cooking.includes("Nice to Have")) && (
                                                <input
                                                    type="text"
                                                    placeholder="Specify cooking type"
                                                    value={formData.specificTasks.cookingType}
                                                    onChange={(e) => handleCookingTypeChange(e.target.value)}
                                                    className="form-control"
                                                    style={{ marginTop: "0.5rem" }}
                                                />
                                            )}
                                    </div>
                                ))}
                            </div>
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

export default JobPreference;