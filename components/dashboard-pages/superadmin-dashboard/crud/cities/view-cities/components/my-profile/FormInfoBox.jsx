'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ViewCity = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cityId = searchParams.get("id");

  // Sample data - in real app you would fetch from API
  const cities = [
    { 
      id: "1", 
      name: "Los Angeles", 
      state_id: "1",
      created_at: "2023-08-15T10:00:00",
      updated_at: "2023-08-16T14:30:00"
    },
    { 
      id: "2", 
      name: "Houston", 
      state_id: "2",
      created_at: "2023-08-14T09:15:00",
      updated_at: "2023-08-14T09:15:00"
    },
  ];

  const states = [
    { id: "1", name: "California" },
    { id: "2", name: "Texas" },
  ];

  const [cityData, setCityData] = useState({
    name: "",
    state_id: "",
    created_at: "",
    updated_at: ""
  });

  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    if (cityId) {
      const city = cities.find(c => c.id === cityId);
      if (city) {
        setCityData({
          name: city.name,
          state_id: city.state_id,
          created_at: city.created_at,
          updated_at: city.updated_at
        });
        
        const state = states.find(s => s.id === city.state_id);
        setSelectedState(state?.name || "");
      }
    }
  }, [cityId]);

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
            <label>City Name</label>
            <input
              type="text"
              className="form-control"
              value={cityData.name}
              readOnly
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              value={selectedState}
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
              value={formatDate(cityData.created_at)}
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
              value={formatDate(cityData.updated_at)}
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push("/superadmin/cities")}
        >
          Back to Cities
        </button>
      </div>
    </div>
  );
};

export default ViewCity;