
'use client'

import Link from "next/link";
import Select from "react-select";

const FormInfoBox = () => {
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* <!-- Interviewee Information --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Employee Name</label>
          <input type="text" name="employee_name" placeholder="John Doe" readOnly />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Role</label>
          <input type="text" name="job_role" placeholder="Housemaid" readOnly />
        </div>

        {/* <!-- Employer Details --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Employer Name</label>
          <input type="text" name="employer_name" placeholder="Michael Smith" readOnly />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Employer Contact</label>
          <input type="text" name="employer_contact" placeholder="+123 456 7890" readOnly />
        </div>

        {/* <!-- Interview Mode --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Interview Mode</label>
          <select className="chosen-single form-select" required>
            <option value="google_meet">Online (Google Meet)</option>
            <option value="in_person">In-Person</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* <!-- Interview Date & Time --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Interview Date</label>
          <input type="date" name="interview_date" required />
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Interview Time</label>
          <input type="time" name="interview_time" required />
        </div>

        {/* <!-- Interview Location (If In-Person) --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Interview Location (If In-Person)</label>
          <input type="text" name="interview_location" placeholder="Office Address" />
        </div>

        {/* <!-- Additional Notes --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Additional Notes</label>
          <textarea
            name="notes"
            placeholder="Mention any special requests or details for the interview."
          ></textarea>
        </div>

        {/* <!-- Actions --> */}
        <div className="form-group col-lg-6 col-md-12">
          {/* <button type="submit" className="theme-btn btn-style-one">
            Submit Interview Request
          </button> */}
          <Link href="/employer-dashboard/interviews" className="theme-btn btn-style-one">
            Submit Interview Request
          </Link>

        </div>
      </div>
    </form>

  );
};

export default FormInfoBox;
