const ContactInfoBox = () => {
  // Define buttonStyle at the top level for consistent styling
  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: "#1a73e8",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
  };

  // Gulf countries and their cities/states
  const gulfCountries = [
    "Bahrain",
    "Kuwait",
    "Oman",
    "Qatar",
    "Saudi Arabia",
    "United Arab Emirates",
  ];

  const gulfCities = [
    "Manama", // Bahrain
    "Kuwait City", // Kuwait
    "Muscat", // Oman
    "Doha", // Qatar
    "Riyadh", // Saudi Arabia
    "Dubai", // UAE
  ];

  const gulfRegions = [
    "Capital Governorate", // Bahrain
    "Al Farwaniyah", // Kuwait
    "Muscat Governorate", // Oman
    "Al Rayyan", // Qatar
    "Makkah Region", // Saudi Arabia
    "Abu Dhabi", // UAE
  ];

  return (
    <form className="default-form">
      <div className="row">
        {/* Dial Code */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Dial Code <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            placeholder="+973"
            name="dialCode"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Phone Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            placeholder="12345678"
            name="phoneNumber"
            required
          />
        </div>

        {/* WhatsApp Number */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            WhatsApp Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            placeholder="WhatsApp number"
            name="whatsapp_number"
            required
          />
        </div>

        {/* Address */}
        <div className="form-group col-lg-12 col-md-12">
          <label>
            Address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="123 Example Street, Manama, Bahrain"
            required
          />
        </div>

        {/* City */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            City <span style={{ color: "red" }}>*</span>
          </label>
          <select className="chosen-single form-select" required>
            <option value="">Select City</option>
            {gulfCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            State <span style={{ color: "red" }}>*</span>
          </label>
          <select className="chosen-single form-select" required>
            <option value="">Select State/Region</option>
            {gulfRegions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Country */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Country <span style={{ color: "red" }}>*</span>
          </label>
          <select className="chosen-single form-select" required>
            <option value="">Select Country</option>
            {gulfCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Communication Language */}
        <div className="form-group col-lg-6 col-md-12">
          <label>
            Preferred Communication Language <span style={{ color: "red" }}>*</span>
          </label>
          <select className="chosen-single form-select" name="preferred_language" required>
            <option value="">Select Language</option>
            <option>English</option>
            <option>Arabic</option>
            <option>Hindi</option>
            <option>Urdu</option>
            <option>Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div
          className="form-group col-lg-12 col-md-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={buttonStyle}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;