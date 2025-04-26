'use client'

import { useState } from "react";

const ContactInfoBox = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        phoneNumber: "",
        email: "",
        whatsappNumber: "",
        alternateContact: "",
    });

    // Handle input changes
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    // Form field configurations
    const fields = [
        {
            type: "number",
            name: "phoneNumber",
            label: "Phone Number",
            placeholder: "+924322321133",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "email",
            name: "email",
            label: "Email Address",
            placeholder: "contact@example.com",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "number",
            name: "whatsappNumber",
            label: "WhatsApp Number",
            placeholder: "+924322321133",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
        {
            type: "number",
            name: "alternateContact",
            label: "Alternate Contact",
            placeholder: "+924322321133",
            colClass: "col-lg-3 col-md-12",
            required: true,
        },
    ];

    return (
        <form className="default-form" style={{ overflow: "hidden" }}>
            <div className="row" style={{ margin: "0",padding: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
                {fields.map((field, index) => (
                    <div key={index} className={`form-group ${field.colClass}`}>
                        <label
                         style={{
                          color: "#696969",
                          fontWeight: "500",
                          minHeight: "2rem",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                      }}
                        >{field.label} {field.required && <span style={{ color: "red" }}>*</span>}</label>
                        {field.type === "number" && (
                            <input
                                type="number"
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.required}
                                className="form-control"
                                style={{
                                    WebkitAppearance: "none",
                                    MozAppearance: "textfield",
                                    appearance: "none",
                                }}
                                onWheel={(e) => e.target.blur()}
                            />
                        )}
                        {field.type === "email" && (
                            <input
                                type="email"
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
            <style jsx global>{`
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none !important;
                    margin: 0 !important;
                }
                input[type="number"] {
                    -moz-appearance: textfield !important;
                    appearance: none !important;
                }
            `}</style>
        </form>
    );
};

export default ContactInfoBox;