'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AgencyForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const agencyId = searchParams.get("id");

  const [formData, setFormData] = useState({
    user_id: "",
    contact_number: "",
    address: "",
    city: "",
    country: "",
    nationality: "",
    agency_name: "",
    contact_person: "",
    registration_number: "",
    managed_employees_count: 0,
    profile_verification_status: "Pending"
  });

  // Simulated agency data (Replace with API calls)
  const agenciesData = [
    {
      id: "1",
      user_id: "201",
      contact_number: "+1 555-1234",
      address: "456 Agency Street",
      city: "London",
      country: "UK",
      nationality: "British",
      agency_name: "Tech Talent Ltd",
      contact_person: "John Smith",
      registration_number: "REG-12345",
      managed_employees_count: 50,
      profile_verification_status: "Verified"
    }
  ];

  useEffect(() => {
    if (agencyId) {
      const agency = agenciesData.find(a => a.id === agencyId);
      if (agency) {
        setFormData({
          user_id: agency.user_id,
          contact_number: agency.contact_number,
          address: agency.address,
          city: agency.city,
          country: agency.country,
          nationality: agency.nationality,
          agency_name: agency.agency_name,
          contact_person: agency.contact_person,
          registration_number: agency.registration_number,
          managed_employees_count: agency.managed_employees_count,
          profile_verification_status: agency.profile_verification_status
        });
      }
    }
  }, [agencyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "managed_employees_count" ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agencyId) {
      console.log("Updating agency:", formData);
    } else {
      console.log("Adding new agency:", formData);
    }
    router.push("/superadmin/agencies");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Agency Name <span className="text-danger">*</span></label>
            <input
              type="text"
              name="agency_name"
              value={formData.agency_name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Contact Person <span className="text-danger">*</span></label>
            <input
              type="text"
              name="contact_person"
              value={formData.contact_person}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

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
            <label>Registration Number</label>
            <input
              type="text"
              name="registration_number"
              value={formData.registration_number}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 col-md-12">
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
            <label>Managed Employees Count</label>
            <input
              type="number"
              name="managed_employees_count"
              value={formData.managed_employees_count}
              onChange={handleChange}
              min="0"
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
          onClick={() => router.push("/superadmin/agencies")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {agencyId ? "Update Agency" : "Create Agency"}
        </button>
      </div>
    </form>
  );
};

export default AgencyForm;