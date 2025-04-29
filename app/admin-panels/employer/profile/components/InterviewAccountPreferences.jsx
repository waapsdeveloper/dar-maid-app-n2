'use client'

import { useState } from "react";

const InterviewAccountPreferences = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        salaryRangeFlexible: "",
        incentiveBasedHiring: "",
    });

    // Dummy data for interviews and hirings
    const [interviews, setInterviews] = useState([
        { id: 1, label: "Upcoming", title: "Interview with John", date: "2025-05-01", status: "Pending" },
        { id: 2, label: "Upcoming", title: "Interview with Sarah", date: "2025-05-03", status: "Confirmed" },
        { id: 3, label: "Past", title: "Interview with Mike", date: "2025-04-20", status: "Confirmed" },
    ]);

    const [hirings, setHirings] = useState([
        { id: 1, name: "Alice Smith", position: "Nanny", hireDate: "2024-12-15" },
        { id: 2, name: "Bob Johnson", position: "Driver", hireDate: "2024-10-10" },
    ]);

    // Handle input changes
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    // Handle Confirm and Cancel for Interviews
    const handleConfirm = (id) => {
        setInterviews(interviews.map(interview =>
            interview.id === id ? { ...interview, status: "Confirmed" } : interview
        ));
    };

    const handleCancel = (id) => {
        setInterviews(interviews.filter(interview => interview.id !== id));
    };

    // Handle Contact and Remove for Hirings
    const handleContact = (id) => {
        console.log(`Contact employee with ID: ${id}`);
    };

    const handleRemove = (id) => {
        setHirings(hirings.filter(hiring => hiring.id !== id));
    };

    // Radio options
    const yesNoOptions = ["Yes", "No"];

    // Form field configurations
    const fields = [
        {
            type: "interviews",
            name: "interviews",
            label: "Interviews",
            data: interviews,
            colClass: "col-lg-12 col-md-12",
        },
        {
            type: "hirings",
            name: "hirings",
            label: "Hirings",
            data: hirings,
            colClass: "col-lg-12 col-md-12",
        },
        {
            type: "radio",
            name: "salaryRangeFlexible",
            label: "Is your salary range flexible?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "radio",
            name: "incentiveBasedHiring",
            label: "Would you consider incentive-based hiring?",
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
                        {field.type === "interviews" && (
                            <div>
                                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                                    <thead>
                                        <tr style={{ backgroundColor: "#f5f5f5" }}>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Title</th>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Date</th>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Label</th>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Status</th>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {field.data.map((interview, idx) => (
                                            <tr key={idx}>
                                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{interview.title}</td>
                                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{interview.date}</td>
                                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{interview.label}</td>
                                                <td style={{ padding: "10px", border: "1px solid #ddd", color: interview.status === "Confirmed" ? "green" : "orange" }}>
                                                    {interview.status}
                                                </td>
                                                <td style={{ padding: "10px", border: "1px solid #ddd", display: "flex", gap: "5px" }}>
                                                    {interview.status === "Pending" && (
                                                        <button
                                                            onClick={() => handleConfirm(interview.id)}
                                                            style={{
                                                                padding: "0.5rem 1rem",
                                                                border: "none",
                                                                borderRadius: "0.5rem",
                                                                backgroundColor: "#28a745",
                                                                color: "white",
                                                                cursor: "pointer",
                                                                fontSize: "0.9rem",
                                                            }}
                                                        >
                                                            Confirm
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => handleCancel(interview.id)}
                                                        style={{
                                                            padding: "0.5rem 1rem",
                                                            border: "none",
                                                            borderRadius: "0.5rem",
                                                            backgroundColor: "#dc3545",
                                                            color: "white",
                                                            cursor: "pointer",
                                                            fontSize: "0.9rem",
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {field.type === "hirings" && (
                            <div>
                                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                                    <thead>
                                        <tr style={{ backgroundColor: "#f5f5f5" }}>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Name</th>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Position</th>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Hire Date</th>
                                            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {field.data.map((hiring, idx) => (
                                            <tr key={idx}>
                                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{hiring.name}</td>
                                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{hiring.position}</td>
                                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{hiring.hireDate}</td>
                                                <td style={{ padding: "10px", border: "1px solid #ddd", display: "flex", gap: "5px" }}>
                                                    <button
                                                        onClick={() => handleContact(hiring.id)}
                                                        style={{
                                                            padding: "0.5rem 1rem",
                                                            border: "none",
                                                            borderRadius: "0.5rem",
                                                            backgroundColor: "#1a73e8",
                                                            color: "white",
                                                            cursor: "pointer",
                                                            fontSize: "0.9rem",
                                                        }}
                                                    >
                                                        Contact
                                                    </button>
                                                    <button
                                                        onClick={() => handleRemove(hiring.id)}
                                                        style={{
                                                            padding: "0.5rem 1rem",
                                                            border: "none",
                                                            borderRadius: "0.5rem",
                                                            backgroundColor: "#dc3545",
                                                            color: "white",
                                                            cursor: "pointer",
                                                            fontSize: "0.9rem",
                                                        }}
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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

export default InterviewAccountPreferences;