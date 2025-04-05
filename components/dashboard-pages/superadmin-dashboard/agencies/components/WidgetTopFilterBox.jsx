"use client";
import { useRouter } from "next/navigation";

const WidgetTopFilterBox = () => {
  const router = useRouter();

  return (
    <div className="chosen-outer" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      <select className="chosen-single form-select chosen-container" style={{ flex: 1 }}>
        <option>Select Listing</option>
        <option>Last 12 Months</option>
        <option>Last 16 Months</option>
        <option>Last 24 Months</option>
        <option>Last 5 year</option>
      </select>

      <select className="chosen-single form-select chosen-container" style={{ flex: 1 }}>
        <option>All Status</option>
        <option>Last 12 Months</option>
        <option>Last 16 Months</option>
        <option>Last 24 Months</option>
        <option>Last 5 year</option>
      </select>

      <button
        className="theme-btn btn-style-one"
        onClick={() => router.push("/superadmin/add-agency")}
        style={{
          minWidth: '140px',
          padding: '12px 20px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
      >
        <span className="la la-plus-circle" style={{ fontSize: '20px' }}></span>
        <span>Add Agency</span>
      </button>
    </div>
  );
};

export default WidgetTopFilterBox;