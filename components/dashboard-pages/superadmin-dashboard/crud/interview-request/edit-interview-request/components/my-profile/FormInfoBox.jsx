'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const InterviewRequestForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestId = searchParams.get("id");

  const [formData, setFormData] = useState({
    employer_id: "",
    employee_id: "",
    interview_mode: "Online",
    interview_date: "",
    interview_time: "",
    status: "Pending",
    additional_notes: ""
  });

  // Simulated interview requests data
  const interviewRequests = [
    {
      id: "1",
      employer_id: "19",
      employee_id: "45",
      interview_mode: "In-Person",
      interview_date: "2024-03-15",
      interview_time: "14:30",
      status: "Pending",
      additional_notes: "Bring portfolio documents"
    }
  ];

  useEffect(() => {
    if (requestId) {
      const request = interviewRequests.find(r => r.id === requestId);
      if (request) {
        setFormData({
          employer_id: request.employer_id,
          employee_id: request.employee_id,
          interview_mode: request.interview_mode,
          interview_date: request.interview_date,
          interview_time: request.interview_time,
          status: request.status,
          additional_notes: request.additional_notes
        });
      }
    }
  }, [requestId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (requestId) {
      console.log("Updating request:", formData);
    } else {
      console.log("Creating request:", formData);
    }
    router.push("/superadmin/interview-requests");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Employer ID <span className="text-danger">*</span></label>
            <input
              type="text"
              name="employer_id"
              value={formData.employer_id}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Employee ID <span className="text-danger">*</span></label>
            <input
              type="text"
              name="employee_id"
              value={formData.employee_id}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Interview Mode <span className="text-danger">*</span></label>
            <select
              name="interview_mode"
              value={formData.interview_mode}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
            </select>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Interview Date <span className="text-danger">*</span></label>
            <input
              type="date"
              name="interview_date"
              value={formData.interview_date}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Interview Time <span className="text-danger">*</span></label>
            <input
              type="time"
              name="interview_time"
              value={formData.interview_time}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Declined">Declined</option>
            </select>
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <textarea
              name="additional_notes"
              value={formData.additional_notes}
              onChange={handleChange}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-light me-3"
          onClick={() => router.push("/superadmin/interview-requests")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {requestId ? "Update Request" : "Create Request"}
        </button>
      </div>
    </form>
  );
};

export default InterviewRequestForm;