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

  // Gulf countries and their dial codes
  const gulfCountries = [
    { country: "Bahrain", dialCode: "+973" },
    { country: "Kuwait", dialCode: "+965" },
    { country: "Oman", dialCode: "+968" },
    { country: "Qatar", dialCode: "+974" },
    { country: "Saudi Arabia", dialCode: "+966" },
    { country: "United Arab Emirates", dialCode: "+971" },
  ];

  return (
    <form className="default-form">
      <div className="row">
        {/* Dial Code */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Dial Code <span style={{ color: "red" }}>*</span>
          </label>
          <select className="chosen-single form-select" name="dialCode" required>
            <option value="">Select Dial Code</option>
            {gulfCountries.map((item) => (
              <option key={item.country} value={item.dialCode}>
                {item.dialCode} ({item.country})
              </option>
            ))}
          </select>
        </div>

        {/* Phone Number */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Phone Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            placeholder="12345678"
            name="phoneNumber"
            required
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }}
          />
        </div>

        {/* WhatsApp Number */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            WhatsApp Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            placeholder="WhatsApp number"
            name="whatsapp_number"
            required
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }}
          />
        </div>
         {/* Preferred Communication Language */}
         <div className="form-group col-lg-3 col-md-12">
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

        {/* House/Flat/Apartment/Villa */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            House/Flat/Apartment/Villa <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="houseType"
            placeholder="E.g., Villa"
            required
          />
        </div>

        {/* Building No */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Building No <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="buildingNo"
            placeholder="E.g., 123"
            required
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }}
          />
        </div>

        {/* Road No */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Road No <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="roadNo"
            placeholder="E.g., 456"
            required
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }}
          />
        </div>

        {/* Block No */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Block No <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="blockNo"
            placeholder="E.g., 789"
            required
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }}
          />
        </div>

        {/* City */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            City <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="city"
            placeholder="E.g., Manama"
            required
          />
        </div>

        {/* Country */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Country <span style={{ color: "red" }}>*</span>
          </label>
          <select className="chosen-single form-select" name="country" required>
            <option value="">Select Country</option>
            {gulfCountries.map((item) => (
              <option key={item.country} value={item.country}>
                {item.country}
              </option>
            ))}
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