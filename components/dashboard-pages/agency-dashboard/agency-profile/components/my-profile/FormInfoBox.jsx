
'use client'

import Select from "react-select";

const FormInfoBox = () => {
  
    return (
        <form className="default-form">
        <div className="row">
            {/* Full Name/Company Name */}
            <div className="form-group col-lg-6 col-md-12">
                <label>Full Name / Agency Name</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe / Company XYZ"
                    required
                />
            </div>
            <div className="form-group col-lg-6 col-md-12">
                <label>Contact Person Name</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe / Company XYZ"
                    required
                />
            </div>
            <div className="form-group col-lg-6 col-md-12">
                <label>Agency Registration Number</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="dfaj21132"
                    required
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
        </div>
    </form>
    );
};

export default FormInfoBox;
