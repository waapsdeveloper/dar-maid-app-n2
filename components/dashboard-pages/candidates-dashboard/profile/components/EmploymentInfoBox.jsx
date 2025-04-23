const EmploymentInfoBox = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* Original Fields */}
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
            name="interview_timings"
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

        {/* Missing Fields from DB */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Expected Salary (BHD)</label>
          <input
            type="number"
            name="expected_salary"
            placeholder="Expected salary"
            step="0.01"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Notice Period</label>
          <input
            type="text"
            name="notice_period"
            placeholder="Notice period duration"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Need Air Ticket?</label>
          <select name="need_air_ticket" className="chosen-single form-select">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Employee Type</label>
          <select name="employee_type" className="chosen-single form-select">
            <option value="Independent">Independent</option>
            <option value="Agency Managed">Agency Managed</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Employee Category</label>
          <select name="employee_category" className="chosen-single form-select">
            <option value="Driver">Driver</option>
            <option value="Cook">Cook</option>
            <option value="Maid">Maid</option>
            <option value="Nanny">Nanny</option>
            <option value="Elderly Care">Elderly Care</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Visa Status</label>
          <select name="visa_status" className="chosen-single form-select">
            <option value="Own Visa">Own Visa</option>
            <option value="Needs Sponsorship">Needs Sponsorship</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Visa Expiry Date</label>
          <input
            type="date"
            name="visa_expiry_date"
            className="form-control"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Willing to Live-in?</label>
          <select name="willing_to_livein" className="chosen-single form-select">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Conditional">Conditional</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Max Work Hours/Day</label>
          <input
            type="number"
            name="max_work_hours"
            placeholder="8"
            min="1"
            max="24"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Flexible with Weekends?</label>
          <select name="flexible_weekends" className="chosen-single form-select">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Other Benefits Requirements</label>
          <textarea
            name="other_benefits"
            className="form-control"
            placeholder="List any other benefits you require"
          />
        </div>

        {/* Save Button */}
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