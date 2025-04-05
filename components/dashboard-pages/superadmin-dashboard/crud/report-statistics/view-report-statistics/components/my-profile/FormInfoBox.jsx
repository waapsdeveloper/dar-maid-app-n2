'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ViewInterviewRequest = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestId = searchParams.get("id");

  // Sample data with additional entries
  const interviewRequests = [
    {
      id: "1",
      employer_id: "19",
      employee_id: "45",
      interview_mode: "In-Person",
      interview_date: "2024-03-15",
      interview_time: "14:30",
      status: "Pending",
      additional_notes: "Bring portfolio documents and ID proof"
    },
    {
      id: "2",
      employer_id: "22",
      employee_id: "78",
      interview_mode: "Online",
      interview_date: "2024-03-18",
      interview_time: "10:00",
      status: "Accepted",
      additional_notes: "Zoom meeting - Link shared via email"
    }
  ];

  const [requestData, setRequestData] = useState({
    employer_id: "",
    employee_id: "",
    interview_mode: "",
    interview_date: "",
    interview_time: "",
    status: "",
    additional_notes: ""
  });

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
            <label className="fw-bold text-secondary">Employer ID</label>
            <div className="form-control-plaintext">
              Employer #{requestData.employer_id}
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold text-secondary">Employee ID</label>
            <div className="form-control-plaintext">
              Employee #{requestData.employee_id}
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold text-secondary">Interview Mode</label>
            <div className="form-control-plaintext text-capitalize">
              {requestData.interview_mode}
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label className="fw-bold text-secondary">Interview Date</label>
            <div className="form-control-plaintext">
              {new Date(requestData.interview_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold text-secondary">Interview Time</label>
            <div className="form-control-plaintext">
              {new Date(`1970-01-01T${requestData.interview_time}`).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })}
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold text-secondary">Status</label>
            <div className={`badge ${requestData.status.toLowerCase()}-badge`}>
              {requestData.status}
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold text-secondary">Additional Notes</label>
            <div className="notes-container bg-light p-3 rounded">
              {requestData.additional_notes || "No additional notes provided"}
            </div>
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

      <style jsx>{`
        .pending-badge {
          background-color: #fff3cd;
          color: #856404;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }
        .accepted-badge {
          background-color: #d4edda;
          color: #155724;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }
        .declined-badge {
          background-color: #f8d7da;
          color: #721c24;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }
        .notes-container {
          min-height: 100px;
          white-space: pre-wrap;
          border: 1px solid #dee2e6;
        }
        .form-control-plaintext {
          padding: 0.5rem 0;
          color: #495057;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ViewInterviewRequest;