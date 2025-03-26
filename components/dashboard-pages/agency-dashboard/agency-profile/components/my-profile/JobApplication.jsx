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

export { ApplicationManagement, InterviewManagement };
