'use client'

import Select from "react-select";

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
        { value: "Indian", label: "Indian" },
        { value: "Pakistani", label: "Pakistani" },
        { value: "Filipino", label: "Filipino" },
        { value: "Other", label: "Other" },
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
                {/* Original Fields */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="employee@gmail.com"
                        readOnly
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Role</label>
                    <input
                        type="text"
                        name="role"
                        placeholder="Employee"
                        readOnly
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Profile Picture</label>
                    <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        className="form-control"
                    />
                </div>

                {/* Existing Basic Info Fields */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Gender</label>
                    <select name="gender" className="form-control" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter age"
                        min="18"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        className="form-control"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Nationality</label>
                    <Select
                        name="nationality"
                        options={nationalityOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Nationality"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Religion</label>
                    <Select
                        name="religion"
                        options={religionOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Religion"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Marital Status</label>
                    <Select
                        name="maritalStatus"
                        options={maritalStatusOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Marital Status"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Number of Children</label>
                    <input
                        type="number"
                        name="childrenCount"
                        placeholder="0"
                        min="0"
                    />
                </div>

                {/* NEW: Added Missing Basic Info Fields */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Passport Copy</label>
                    <input
                        type="file"
                        name="passport_copy"
                        accept=".pdf,.jpg,.png"
                        className="form-control"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Visa Copy</label>
                    <input
                        type="file"
                        name="visa_copy"
                        accept=".pdf,.jpg,.png"
                        className="form-control"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>CPR Copy</label>
                    <input
                        type="file"
                        name="cpr_copy"
                        accept=".pdf,.jpg,.png"
                        className="form-control"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Current Location</label>
                    <input
                        type="text"
                        name="current_location"
                        placeholder="Current city/country"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Currently in Bahrain?</label>
                    <select name="in_bahrain" className="form-control">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>If outside Bahrain, specify country</label>
                    <input
                        type="text"
                        name="outside_country"
                        placeholder="Country name"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Work Available</label>
                    <Select
                        name="work_available"
                        options={workAvailableOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select availability"
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Available after how many days?</label>
                    <input
                        type="text"
                        name="no_of_days_available"
                        placeholder="Number of days"
                    />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <button type="submit" className="theme-btn btn-style-one">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormInfoBox;