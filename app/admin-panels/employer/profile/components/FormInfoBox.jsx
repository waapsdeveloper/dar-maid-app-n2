'use client'

import { useState } from "react";
import CardForm from "@/templates/forms/card-form";

const FormInfoBox = () => {
    // State to manage form data
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

    // Handle input changes
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    // Dropdown and radio options
    const genderOptions = ["Male", "Female", "Other"];
    const nationalityOptions = [
        "Bahrain",
        "Kuwait",
        "Oman",
        "Qatar",
        "Saudi Arabia",
        "United Arab Emirates",
    ];
    const religionOptions = ["Islam", "Christianity", "Hinduism", "Sikh", "Other"];
    const householdTypeOptions = ["Local", "Expat"];
    const childrenAgeRangeOptions = ["Infant", "Toddler", "Teen"];
    const yesNoOptions = ["Yes", "No"];

    // Form field configurations
    const fields = [
        // Personal & Household Info
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
                />
    );
};

export default FormInfoBox;