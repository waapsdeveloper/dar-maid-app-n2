
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

    return (
        <form className="default-form">
            <div className="row">
                {/* Full Name/Company Name */}
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
                        name="fullName"
                        placeholder="employee@gmail.com"
                        readOnly
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Role</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Employee"
                        readOnly
                    />
                </div>

                {/* Profile Picture/Logo Upload */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Profile Picture / Logo</label>
                    <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        className="form-control"
                        required
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
