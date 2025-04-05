'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const StateForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stateId = searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    country_id: ""
  });

  // Sample data - in real app you would fetch from API
  const states = [
    { 
      id: "1",
      name: "California",
      country_id: "1",
      created_at: "2023-08-15",
      updated_at: "2023-08-15"
    }
  ];

  // Sample countries - should come from API/context
  const countries = [
    { id: "1", name: "United States" },
    { id: "2", name: "United Kingdom" },
  ];

  useEffect(() => {
    if (stateId) {
      const state = states.find(s => s.id === stateId);
      if (state) {
        setFormData({
          name: state.name,
          country_id: state.country_id
        });
      }
    }
  }, [stateId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateId) {
      console.log("Updating state:", formData);
    } else {
      console.log("Creating state:", formData);
    }
    router.push("/superadmin/states");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>State Name <span className="text-danger">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter state name"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Country <span className="text-danger">*</span></label>
            <select
              name="country_id"
              value={formData.country_id}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-light me-3"
          onClick={() => router.push("/superadmin/states")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {stateId ? "Update State" : "Create State"}
        </button>
      </div>
    </form>
  );
};

export default StateForm;