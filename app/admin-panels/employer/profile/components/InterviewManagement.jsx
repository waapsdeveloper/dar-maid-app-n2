const InterviewManagement = () => {
    return (
      <form className="default-form">
        <div className="row">
          {/* Interview Date */}
          <div className="form-group col-lg-6 col-md-12 gap-2">
            <label>Schedule Interview</label> 
            <br />
            <input
              type="datetime-local"
              name="interviewDate"
              required
            />
          </div>
  
          {/* Interview Mode */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Preferred Interview Mode</label>
            <select className="chosen-single form-select" required>
              <option>Online</option>
              <option>In-Person</option>
            </select>
          </div>
  
          {/* Submit Button */}
          <div className="form-group col-lg-12 col-md-12">
            <button type="submit" className="theme-btn btn-style-one">
              Save Schedule
            </button>
          </div>
        </div>
      </form>
    );
  };
  
  export default InterviewManagement;