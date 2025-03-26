
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
                <label>Full Name / Company Name</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe / Company XYZ"
                    required
                />
            </div>
    
           
            {/* Type Selection */}
            <div className="form-group col-lg-6 col-md-12">
                <label>Type</label>
                <select className="chosen-single form-select" required>
                    <option value="individual">Individual</option>
                    <option value="organization">Organization</option>
                </select>
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
        </div>
    </form>
    );
};

export default FormInfoBox;
