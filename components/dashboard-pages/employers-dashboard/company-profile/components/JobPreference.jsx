const JobPreferences = () => {
    return (
      <form className="default-form">
        <div className="row">
          {/* Job Type */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Looking for</label>
            <select className="chosen-single form-select" required>
              <option>Maid</option>
              <option>Babysitter</option>
              <option>Cook</option>
              <option>Driver</option>
              <option>Caregiver</option>
            </select>
          </div>
  
          {/* Work Schedule */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Work Schedule</label>
            <select className="chosen-single form-select" required>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </select>
          </div>
  
          {/* Salary Range */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Salary Range Offered</label>
            <input
              type="text"
              name="salary"
              placeholder="$800 - $1200"
              required
            />
          </div>
  
          {/* Special Requirements */}
          <div className="form-group col-lg-12 col-md-12">
            <label>Special Requirements</label>
            <textarea
              placeholder="List any specific skills, certifications, or requirements needed"
              rows={5}
            />
          </div>
  
          {/* Submit Button */}
          <div className="form-group col-lg-12 col-md-12">
            <button type="submit" className="theme-btn btn-style-one">
              Save Preferences
            </button>
          </div>
        </div>
      </form>
    );
  };
  
  export default JobPreferences;