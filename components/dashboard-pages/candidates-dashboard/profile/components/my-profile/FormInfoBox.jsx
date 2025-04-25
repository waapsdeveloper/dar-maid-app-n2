'use client';

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
//   border: "1px solid #ccc",
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
    const [profileImage, setProfileImage] = useState(null);
    const [passportCopy, setPassportCopy] = useState(null);
    const [visaCopy, setVisaCopy] = useState(null);
    const [cprCopy, setCprCopy] = useState(null);
    const [dob, setDob] = useState("");

    const handleFileChange = (setter) => (e) => {
        setter(e.target.files[0]);
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

    return (
        <form className="default-form">
            <div className="row">
                {/* Full Name */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Full Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        required
                    />
                </div>

                {/* Email */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="employee@gmail.com"
                        readOnly
                    />
                </div>

                {/* Role */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>Role</label>
                    <input
                        type="text"
                        name="role"
                        placeholder="Employee"
                        readOnly
                    />
                </div>
                {/* Gender */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Gender <span style={{ color: "red" }}>*</span>
                    </label>
                    <select name="gender" className="form-control" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Address */}
                <div className="form-group col-lg-12 col-md-12">
                    <label>
                        Address <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        required
                    />
                </div>

                {/* Age */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Age <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter age"
                        min="18"
                        required
                    />
                </div>

                {/* Date of Birth */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Date of Birth <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>

                {/* Nationality */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Nationality <span style={{ color: "red" }}>*</span>
                    </label>
                    <Select
                        name="nationality"
                        options={nationalityOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Nationality"
                        required
                    />
                </div>

                {/* Religion */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Religion <span style={{ color: "red" }}>*</span>
                    </label>
                    <Select
                        name="religion"
                        options={religionOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Religion"
                        required
                    />
                </div>

                {/* Marital Status */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Marital Status <span style={{ color: "red" }}>*</span>
                    </label>
                    <Select
                        name="maritalStatus"
                        options={maritalStatusOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Marital Status"
                        required
                    />
                </div>

                {/* Number of Children */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Number of Children <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="number"
                        name="childrenCount"
                        placeholder="0"
                        min="0"
                        required
                    />
                </div>
                 {/* Currently in Bahrain? */}
                 <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Currently in Bahrain? <span style={{ color: "red" }}>*</span>
                    </label>
                    <select name="in_bahrain" className="form-control" required>
                        <option value="">Select Option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                {/* If outside Bahrain, specify country */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        If outside Bahrain, specify country <span style={{ color: "red" }}>*</span>
                    </label>
                    <Select
                        name="outside_country"
                        options={gulfCountries}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Country"
                        required
                    />
                </div>

                {/* Work Available */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Work Available <span style={{ color: "red" }}>*</span>
                    </label>
                    <Select
                        name="work_available"
                        options={workAvailableOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select availability"
                        required
                    />
                </div>

                {/* Available after how many days? */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Available after how many days? <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="no_of_days_available"
                        placeholder="Number of days"
                        required
                    />
                </div>
                 {/* Current Location */}
                 <div className="form-group col-lg-3 col-md-12">
                    <label>
                        Current Location <span style={{ color: "red" }}>*</span>
                    </label>
                    <Select
                        name="current_location"
                        options={gulfCountries}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Country"
                        required
                    />
                </div>
                 {/* Profile Picture */}
                 <div className="form-group col-lg-6 col-md-12" style={{ position: "relative", minHeight: "60px" }}>
                    <label>
                        Profile Picture <span style={{ color: "red" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                        <div>
                            <input
                                type="file"
                                name="profileImage"
                                accept="image/*"
                                onChange={handleFileChange(setProfileImage)}
                                required
                                style={inputStyle}
                            />
                            {profileImage && (
                                <div className="mt-2 text-muted small">
                                    Selected: {profileImage.name}
                                </div>
                            )}
                        </div>
                        <div style={tickBoxStyle(!!profileImage)}>
                            <span
                                style={{
                                    color: profileImage ? "#ffffff" : "gray",
                                    fontSize: "1rem",
                                }}
                            >
                                ✔
                            </span>
                        </div>
                    </div>
                </div>

                {/* Passport Copy */}
                <div className="form-group col-lg-6 col-md-12" style={{ position: "relative", minHeight: "60px" }}>
                    <label>
                        Passport Copy <span style={{ color: "red" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                        <div>
                            <input
                                type="file"
                                name="passport_copy"
                                accept=".pdf,.jpg,.png"
                                onChange={handleFileChange(setPassportCopy)}
                                required
                                style={inputStyle}
                            />
                            {passportCopy && (
                                <div className="mt-2 text-muted small">
                                    Selected: {passportCopy.name}
                                </div>
                            )}
                        </div>
                        <div style={tickBoxStyle(!!passportCopy)}>
                            <span
                                style={{
                                    color: passportCopy ? "#ffffff" : "gray",
                                    fontSize: "1rem",
                                }}
                            >
                                ✔
                            </span>
                        </div>
                    </div>
                </div>

                {/* Visa Copy */}
                <div className="form-group col-lg-6 col-md-12" style={{ position: "relative", minHeight: "60px" }}>
                    <label>
                        Visa Copy <span style={{ color: "red" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                        <div>
                            <input
                                type="file"
                                name="visa_copy"
                                accept=".pdf,.jpg,.png"
                                onChange={handleFileChange(setVisaCopy)}
                                required
                                style={inputStyle}
                            />
                            {visaCopy && (
                                <div className="mt-2 text-muted small">
                                    Selected: {visaCopy.name}
                                </div>
                            )}
                        </div>
                        <div style={tickBoxStyle(!!visaCopy)}>
                            <span
                                style={{
                                    color: visaCopy ? "#ffffff" : "gray",
                                    fontSize: "1rem",
                                }}
                            >
                                ✔
                            </span>
                        </div>
                    </div>
                </div>

                {/* CPR Copy */}
                <div className="form-group col-lg-6 col-md-12" style={{ position: "relative", minHeight: "60px" }}>
                    <label>
                        CPR Copy <span style={{ color: "red" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                        <div>
                            <input
                                type="file"
                                name="cpr_copy"
                                accept=".pdf,.jpg,.png"
                                onChange={handleFileChange(setCprCopy)}
                                required
                                style={inputStyle}
                            />
                            {cprCopy && (
                                <div className="mt-2 text-muted small">
                                    Selected: {cprCopy.name}
                                </div>
                            )}
                        </div>
                        <div style={tickBoxStyle(!!cprCopy)}>
                            <span
                                style={{
                                    color: cprCopy ? "#ffffff" : "gray",
                                    fontSize: "1rem",
                                }}
                            >
                                ✔
                            </span>
                        </div>
                    </div>
                </div>

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