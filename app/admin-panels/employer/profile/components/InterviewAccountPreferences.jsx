'use client'

import Select from "react-select";
import { useState } from "react";
import CardForm from "@/templates/forms/card-form";

// Define inputStyle for inputs
const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  backgroundColor: "#F0F5F7",
  boxSizing: "border-box",
};

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

    // Handle select changes for react-select
    const handleSelectChange = (field) => (selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : "" });
    };

    // Handle file changes (required by CardForm, even if unused)
    const handleFileChange = (field, file) => {
        setFormData({ ...formData, [field]: file });
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

    // Dropdown options for react-select
    const yesNoOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

    // Form field configurations
    const fields = [
        {
            type: "custom",
            name: "interviews",
            label: "Interviews",
            colClass: "col-lg-12 col-md-12",
            render: () => (
                <div>
                    <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f5f5f5", height: "35px" }}>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Title</th>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Date</th>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Label</th>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Status</th>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interviews.map((interview, idx) => (
                                <tr key={idx} style={{ height: "40px" }}>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", fontSize: "0.9rem" }}>{interview.title}</td>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", fontSize: "0.9rem" }}>{interview.date}</td>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", fontSize: "0.9rem" }}>{interview.label}</td>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", fontSize: "0.9rem", color: interview.status === "Confirmed" ? "green" : "orange" }}>
                                        {interview.status}
                                    </td>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", display: "flex", gap: "5px" }}>
                                        {interview.status === "Pending" && (
                                            <button
                                                onClick={() => handleConfirm(interview.id)}
                                                style={{
                                                    padding: "0.3rem 0.8rem",
                                                    border: "none",
                                                    borderRadius: "0.3rem",
                                                    backgroundColor: "#2563eb",
                                                    color: "white",
                                                    cursor: "pointer",
                                                    fontSize: "0.8rem",
                                                }}
                                            >
                                                Confirm
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleCancel(interview.id)}
                                            style={{
                                                padding: "0.3rem 0.8rem",
                                                border: "none",
                                                borderRadius: "0.3rem",
                                                backgroundColor: "#2563eb",
                                                color: "white",
                                                cursor: "pointer",
                                                fontSize: "0.8rem",
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
            ),
        },
        {
            type: "custom",
            name: "hirings",
            label: "Hirings",
            colClass: "col-lg-12 col-md-12",
            render: () => (
                <div>
                    <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f5f5f5", height: "35px" }}>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Name</th>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Position</th>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Hire Date</th>
                                <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left", fontSize: "0.9rem" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hirings.map((hiring, idx) => (
                                <tr key={idx} style={{ height: "40px" }}>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", fontSize: "0.9rem" }}>{hiring.name}</td>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", fontSize: "0.9rem" }}>{hiring.position}</td>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", fontSize: "0.9rem" }}>{hiring.hireDate}</td>
                                    <td style={{ padding: "5px", border: "1px solid #ddd", display: "flex", gap: "5px" }}>
                                        <button
                                            onClick={() => handleContact(hiring.id)}
                                            style={{
                                                padding: "0.3rem 0.8rem",
                                                border: "none",
                                                borderRadius: "0.3rem",
                                                backgroundColor: "#2563eb",
                                                color: "white",
                                                cursor: "pointer",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            Contact
                                        </button>
                                        <button
                                            onClick={() => handleRemove(hiring.id)}
                                            style={{
                                                padding: "0.3rem 0.8rem",
                                                border: "none",
                                                borderRadius: "0.3rem",
                                                backgroundColor: "#2563eb",
                                                color: "white",
                                                cursor: "pointer",
                                                fontSize: "0.8rem",
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
            ),
        },
        {
            type: "select",
            name: "salaryRangeFlexible",
            label: "Is your salary range flexible?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Option",
            required: true,
        },
        {
            type: "select",
            name: "incentiveBasedHiring",
            label: "Consider incentive hiring?",
            options: yesNoOptions,
            colClass: "col-lg-3 col-md-12",
            placeholder: "Select Option",
            required: true,
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
            handleFileChange={handleFileChange}
        />
    );
};

export default InterviewAccountPreferences;