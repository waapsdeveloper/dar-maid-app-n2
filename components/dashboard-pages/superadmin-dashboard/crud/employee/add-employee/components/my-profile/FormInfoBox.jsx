'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FormInfoBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const employeeId = searchParams.get("id");

  const [formData, setFormData] = useState({
    user_id: "",
    dail_code: "",
    contact_number: "",
    address: "",
    city: "",
    state: "",
    country: "",
    experience_years: 0,
    availability: "Available",
    preferred_interview_time: "",
    document_verification_status: "Pending"
  });

  // Simulated database (Replace with API calls)
  const employeesData = [
    {
      id: "1",
      user_id: "101",
      dail_code: "+1",
      contact_number: "555-1234",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      experience_years: 5,
      availability: "Available",
      preferred_interview_time: "Morning",
      document_verification_status: "Verified"
    }
  ];

  useEffect(() => {
    if (employeeId) {
      const employee = employeesData.find(e => e.id === employeeId);
      if (employee) {
        setFormData({
          user_id: employee.user_id,
          dail_code: employee.dail_code,
          contact_number: employee.contact_number,
          address: employee.address,
          city: employee.city,
          state: employee.state,
          country: employee.country,
          experience_years: employee.experience_years,
          availability: employee.availability,
          preferred_interview_time: employee.preferred_interview_time,
          document_verification_status: employee.document_verification_status
        });
      }
    }
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "experience_years" ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId) {
      console.log("Updating employee:", formData);
    } else {
      console.log("Adding new employee:", formData);
    }
    router.push("/superadmin/employees");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>User Name</label>
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-lg-1 col-md-12">
          <label>Dial Code</label>
          <input
            type="text"
            name="dail_code"
            value={formData.dail_code}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col-lg-5 col-md-12">
          <label>Contact Number</label>
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col-lg-4 col-md-12">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-lg-4 col-md-12">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-lg-4 col-md-12">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Experience Years</label>
          <input
            type="number"
            name="experience_years"
            value={formData.experience_years}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Preferred Interview Time</label>
          <input
            type="text"
            name="preferred_interview_time"
            value={formData.preferred_interview_time}
            onChange={handleChange}
            placeholder="e.g., 9:00 AM - 5:00 PM"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Document Status</label>
          <select
            name="document_verification_status"
            value={formData.document_verification_status}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Pending">Pending</option>
            <option value="Verified">Verified</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <button type="submit" className="theme-btn btn-style-one">
          {employeeId ? "Update Employee" : "Add Employee"}
        </button>
      </div>
    </form>
  );
};

export default FormInfoBox;