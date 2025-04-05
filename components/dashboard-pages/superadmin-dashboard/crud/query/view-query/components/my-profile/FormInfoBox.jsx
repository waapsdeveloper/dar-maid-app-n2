'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ViewInterviewRequest = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestId = searchParams.get("id");

  const [requestData, setRequestData] = useState({
    employer_id: "",
    employee_id: "",
    interview_mode: "",
    interview_date: "",
    interview_time: "",
    status: "",
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
        setRequestData({
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

  return (
    <div className="default-form">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Employer ID</label>
            <input
              type="text"
              value={requestData.employer_id}
              readOnly
              className="form-control-plaintext"
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              value={requestData.employee_id}
              readOnly
              className="form-control-plaintext"
            />
          </div>

          <div className="form-group">
            <label>Interview Mode</label>
            <input
              type="text"
              value={requestData.interview_mode}
              readOnly
              className="form-control-plaintext"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Interview Date</label>
            <input
              type="text"
              value={requestData.interview_date}
              readOnly
              className="form-control-plaintext"
            />
          </div>

          <div className="form-group">
            <label>Interview Time</label>
            <input
              type="text"
              value={requestData.interview_time}
              readOnly
              className="form-control-plaintext"
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <input
              type="text"
              value={requestData.status}
              readOnly
              className="form-control-plaintext"
            />
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <input
              type="text"
              value={requestData.additional_notes}
              readOnly
              className="form-control-plaintext"
            />
          </div>
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push("/superadmin/interview-requests")}
        >
          Back to Requests
        </button>
      </div>
    </div>
  );
};

export default ViewInterviewRequest;