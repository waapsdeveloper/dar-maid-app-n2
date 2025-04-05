const EmploymentInfoBox = () => {
  return (
    <form className="default-form">
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Work Experience (Years)</label>
          <input type="number" name="experience" placeholder="5" min="0" required />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Availability</label>
          <select name="availability" className="chosen-single form-select" required>
            <option value="available" selected>Available</option>
            <option value="not_available">Not Available</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Preferred Interview Timings</label>
          <input
            type="text"
            name="fullName"
            placeholder="3 - 5 PM"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Document Verification Status</label>
          <select name="verification_status" className="chosen-single form-select" required>
            <option value="pending" selected>Pending</option>
            <option value="verified">Verified</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmploymentInfoBox;
