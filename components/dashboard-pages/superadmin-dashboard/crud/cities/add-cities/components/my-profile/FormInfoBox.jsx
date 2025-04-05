'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CityForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cityId = searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    state_id: "",
  });

  // Sample data - in real   app you would fetch from API
  const cities = [
    { id: "1", name: "Los Angeles", state_id: "1" },
    { id: "2", name: "Houston", state_id: "2" },
  ];

  // Sample states - should come from API/context
  const states = [
    { id: "1", name: "California" },
    { id: "2", name: "Texas" },
  ];

  useEffect(() => {
    if (cityId) {
      const city = cities.find(c => c.id === cityId);
      if (city) {
        setFormData({
          name: city.name,
          state_id: city.state_id,
        });
      }
    }
  }, [cityId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityId) {
      console.log("Updating city:", formData);
    } else {
      console.log("Creating city:", formData);
    }
    router.push("/superadmin/cities");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>City Name <span className="text-danger">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter city name"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>State <span className="text-danger">*</span></label>
            <select
              name="state_id"
              value={formData.state_id}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state.id} value={state.id}>
                  {state.name}
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
          onClick={() => router.push("/superadmin/cities")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {cityId ? "Update City" : "Create City"}
        </button>
      </div>
    </form>
  );
};

export default CityForm;