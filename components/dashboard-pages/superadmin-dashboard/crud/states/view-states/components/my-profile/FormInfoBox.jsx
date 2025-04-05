'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ViewState = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stateId = searchParams.get("id");

  // Sample data - in real app you would fetch from API
  const states = [
    { 
      id: "1", 
      name: "California",
      country_id: "1",
      created_at: "2023-08-15T10:00:00",
      updated_at: "2023-08-16T14:30:00"
    }
  ];

  const countries = [
    { id: "1", name: "United States" },
    { id: "2", name: "United Kingdom" },
  ];

  const [stateData, setStateData] = useState({
    name: "",
    country_id: "",
    created_at: "",
    updated_at: ""
  });

  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    if (stateId) {
      const state = states.find(s => s.id === stateId);
      if (state) {
        setStateData({
          name: state.name,
          country_id: state.country_id,
          created_at: state.created_at,
          updated_at: state.updated_at
        });
        
        const country = countries.find(c => c.id === state.country_id);
        setSelectedCountry(country?.name || "");
      }
    }
  }, [stateId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="default-form">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>State Name</label>
            <input
              type="text"
              className="form-control"
              value={stateData.name}
              readOnly
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              value={selectedCountry}
              readOnly
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Created At</label>
            <input
              type="text"
              className="form-control"
              value={formatDate(stateData.created_at)}
              readOnly
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Updated At</label>
            <input
              type="text"
              className="form-control"
              value={formatDate(stateData.updated_at)}
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push("/superadmin/states")}
        >
          Back to States
        </button>
      </div>
    </div>
  );
};

export default ViewState;