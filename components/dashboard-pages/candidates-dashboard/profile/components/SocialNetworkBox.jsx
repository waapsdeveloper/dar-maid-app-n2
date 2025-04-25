const SocialNetworkBox = () => {
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

  return (
    <form className="default-form">
      <div className="row">
        {/* Facebook */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Facebook <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="facebook"
            placeholder="www.facebook.com/Invision"
            required
          />
        </div>

        {/* Twitter */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Twitter <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="twitter"
            placeholder=""
            required
          />
        </div>

        {/* Linkedin */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Linkedin <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="linkedin"
            placeholder=""
            required
          />
        </div>

        {/* Google Plus */}
        <div className="form-group col-lg-3 col-md-12">
          <label>
            Google Plus <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="googlePlus"
            placeholder=""
            required
          />
        </div>

        {/* Save Button */}
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

export default SocialNetworkBox;