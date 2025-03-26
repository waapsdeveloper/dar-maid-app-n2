const EmploymentDetails = () => {
  return (
      <form className="default-form">
          <div className="row">
              {/* Work Experience */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>Work Experience (Years)</label>
                  <input type="number" name="experience" placeholder="5" min="0" required />
              </div>

              {/* Previous Employers */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>Previous Employers (optional)</label>
                  <input type="text" name="employers" placeholder="Company A, Company B" />
              </div>

              {/* Skills */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>Skills and Expertise</label>
                  <input type="text" name="skills" placeholder="Enter skills" />
              </div>

              {/* Working Hours */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>Preferred Working Hours</label>
                  <select name="workingHours" required>
                      <option>9 AM - 5 PM</option>
                      <option>Flexible Hours</option>
                      <option>Part-Time Morning</option>
                      <option>Part-Time Evening</option>
                  </select>
              </div>

              {/* Expected Salary */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>Expected Salary</label>
                  <input type="text" name="salary" placeholder="$800 - $1200" required />
              </div>

              {/* Submit Button */}
              <div className="form-group col-lg-12 col-md-12">
                  <button type="submit">Save Details</button>
              </div>
          </div>
      </form>
  );
};

export default EmploymentDetails;
