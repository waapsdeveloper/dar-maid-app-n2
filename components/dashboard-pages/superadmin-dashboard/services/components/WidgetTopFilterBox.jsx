'use client';

import { useRouter } from "next/navigation";

const WidgetTopFilterBox = () => {
  const router = useRouter();

  return (
    <div className="chosen-outer">
      <select className="chosen-single form-select chosen-container">
        <option>Select Listing</option>
        <option>Last 12 Months</option>
        <option>Last 16 Months</option>
        <option>Last 24 Months</option>
        <option>Last 5 year</option>
      </select>

      <select className="chosen-single form-select chosen-container">
        <option>All Status</option>
        <option>Last 12 Months</option>
        <option>Last 16 Months</option>
        <option>Last 24 Months</option>
        <option>Last 5 year</option>
      </select>

      <button 
        className="btn btn-main" 
        onClick={() => router.push("/superadmin-dashboard/services/add")} // Navigate to add service page
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          transition: 'background-color 0.3s',
        }}
      >
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>+</span>
        Add
      </button>
    </div>
  );
};

export default WidgetTopFilterBox;
