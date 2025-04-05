'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CountryForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const countryId = searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    dail_code: "",
    currency: "USD",
    iso_code: ""
  });

  // Simulated country data
  const countries = [
    {
      id: "1",
      name: "United States",
      dail_code: "+1",
      currency: "USD",
      iso_code: "USA",
      created_at: "2023-08-15",
      updated_at: "2023-08-15"
    }
  ];

  useEffect(() => {
    if (countryId) {
      const country = countries.find(c => c.id === countryId);
      if (country) {
        setFormData({
          name: country.name,
          dail_code: country.dail_code,
          currency: country.currency,
          iso_code: country.iso_code
        });
      }
    }
  }, [countryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (countryId) {
      console.log("Updating country:", formData);
    } else {
      console.log("Creating country:", formData);
    }
    router.push("/superadmin/countries");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Country Name <span className="text-danger">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter country name"
            />
          </div>

          <div className="form-group">
            <label>Dial Code <span className="text-danger">*</span></label>
            <input
              type="text"
              name="dail_code"
              value={formData.dail_code}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Example: +1"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Currency <span className="text-danger">*</span></label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="USD">US Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">British Pound (GBP)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
            </select>
          </div>

          <div className="form-group">
            <label>ISO Code <span className="text-danger">*</span></label>
            <input
              type="text"
              name="iso_code"
              value={formData.iso_code}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="3-letter code (e.g., USA)"
              maxLength={3}
              pattern="[A-Za-z]{3}"
              title="3-letter country code"
            />
          </div>
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-light me-3"
          onClick={() => router.push("/superadmin/countries")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {countryId ? "Update Country" : "Create Country"}
        </button>
      </div>
    </form>
  );
};

export default CountryForm;