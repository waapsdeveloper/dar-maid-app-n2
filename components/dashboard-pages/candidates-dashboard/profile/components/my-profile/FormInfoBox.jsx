'use client'

import Select from "react-select";

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

const FormInfoBox = () => {
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
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="employee@gmail.com"
                        readOnly
                    />
                </div>

                {/* Role */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Role</label>
                    <input
                        type="text"
                        name="role"
                        placeholder="Employee"
                        readOnly
                    />
                </div>

                {/* Profile Picture */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>
                        Profile Picture <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        className="form-control"
                        required
                    />
                </div>

                {/* Gender */}
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
                    <label>
                        Date of Birth <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="date"
                        name="dob"
                        className="form-control"
                        required
                    />
                </div>

                {/* Nationality */}
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
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

                {/* Passport Copy */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>
                        Passport Copy <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="file"
                        name="passport_copy"
                        accept=".pdf,.jpg,.png"
                        className="form-control"
                        required
                    />
                </div>

                {/* Visa Copy */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>
                        Visa Copy <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="file"
                        name="visa_copy"
                        accept=".pdf,.jpg,.png"
                        className="form-control"
                        required
                    />
                </div>

                {/* CPR Copy */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>
                        CPR Copy <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="file"
                        name="cpr_copy"
                        accept=".pdf,.jpg,.png"
                        className="form-control"
                        required
                    />
                </div>

                {/* Current Location */}
                <div className="form-group col-lg-6 col-md-12">
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

                {/* Currently in Bahrain? */}
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
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
                <div className="form-group col-lg-6 col-md-12">
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