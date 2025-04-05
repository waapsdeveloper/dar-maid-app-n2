'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EmployerForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const employerId = searchParams.get("id");

  const [formData, setFormData] = useState({
    user_id: "",
    company_name: "",
    contact_number: "",
    address: "",
    city: "",
    country: "",
    nationality: "",
    profile_verification_status: "Pending"
  });

  // Simulated employer data (Replace with API calls)
  const employersData = [
    {
      id: "1",
      user_id: "301",
      company_name: "Tech Corp Inc",
      contact_number: "+1 555-9876",
      address: "789 Business Ave",
      city: "San Francisco",
      country: "USA",
      nationality: "American",
      profile_verification_status: "Verified"
    }
  ];

  useEffect(() => {
    if (employerId) {
      const employer = employersData.find(e => e.id === employerId);
      if (employer) {
        setFormData({
          user_id: employer.user_id,
          company_name: employer.company_name,
          contact_number: employer.contact_number,
          address: employer.address,
          city: employer.city,
          country: employer.country,
          nationality: employer.nationality,
          profile_verification_status: employer.profile_verification_status
        });
      }
    }
  }, [employerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employerId) {
      console.log("Updating employer:", formData);
    } else {
      console.log("Creating employer:", formData);
    }
    router.push("/superadmin/employers");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>User ID <span className="text-danger">*</span></label>
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              className="form-control"
              pattern="[+][0-9]{1,4}[0-9]{6,14}"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
              rows="3"
            ></textarea>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>City <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Country <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Nationality <span className="text-danger">*</span></label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Verification Status</label>
            <select
              name="profile_verification_status"
              value={formData.profile_verification_status}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Pending">Pending</option>
              <option value="Verified">Verified</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-light me-3"
          onClick={() => router.push("/superadmin/employers")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {employerId ? "Update Employer" : "Create Employer"}
        </button>
      </div>
    </form>
  );
};

export default EmployerForm;