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

const Document = () => {
  return (
      <form className="default-form">
          <div className="row">
          <div className="form-group col-lg-6 col-md-12">
              <label>Upload Visa</label>
              <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  className="form-control"
                  required
              />
          </div>
          <div className="form-group col-lg-6 col-md-12">
              <label>Upload Certiificates</label>
              <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  className="form-control"
                  required
              />
          </div>
          <div className="form-group col-lg-6 col-md-12">
              <label>Upload References</label>
              <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  className="form-control"
                  required
              />
          </div>

              {/* Submit Button */}
              <div className="form-group col-lg-12 col-md-12">
                  <button type="submit">Save Documents</button>
              </div>
          </div>
      </form>
  );
};
const InterviewAvailability = () => {
  return (
      <form className="default-form">
          <div className="row">
              {/* Preferred Interview Time */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>Preferred Interview Time</label>
                  <input type="text" name="interviewTime" placeholder="E.g., 10 AM - 12 PM" />
              </div>

              {/* Submit Button */}
              <div className="form-group col-lg-12 col-md-12">
                  <button type="submit">Save Availability</button>
              </div>
          </div>
      </form>
  );
};

const ApplicationManagement = () => {
  return (
      <form className="default-form">
          <div className="row">
              {/* View Job Applications */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>View Job Applications</label>
                  <input type="text" name="jobApplications" placeholder="Search applications..." />
              </div>

              {/* Track Application Status */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>Track Application Status</label>
                  <select name="applicationStatus">
                      <option>Pending</option>
                      <option>Reviewed</option>
                      <option>Accepted</option>
                      <option>Rejected</option>
                  </select>
              </div>

              {/* Submit Button */}
              <div className="form-group col-lg-12 col-md-12">
                  <button type="submit">Manage Applications</button>
              </div>
          </div>
      </form>
  );
};

const InterviewManagement = () => {
  return (
      <form className="default-form">
          <div className="row">
              {/* View & Respond to Interview Requests */}
              <div className="form-group col-lg-6 col-md-12">
                  <label>View & Respond to Interview Requests</label>
                  <input type="text" name="interviewRequests" placeholder="Search interviews..." />
              </div>

              {/* Submit Button */}
              <div className="form-group col-lg-12 col-md-12">
                  <button type="submit">Manage Interviews</button>
              </div>
          </div>
      </form>
  );
};

export { ApplicationManagement, InterviewManagement,EmploymentDetails ,InterviewAvailability,Document};

