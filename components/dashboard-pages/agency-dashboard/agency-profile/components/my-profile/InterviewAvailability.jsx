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

export default InterviewAvailability;