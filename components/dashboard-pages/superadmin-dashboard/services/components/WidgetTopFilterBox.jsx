'use client'; // Add this directive at the top to mark it as a Client Component

import { useRouter } from 'next/navigation'; // Using Next.js router instead of react-router-dom

const WidgetTopFilterBox = () => {
  const router = useRouter();

  const handleAddNewItem = () => {
    router.push('/'); // Use Next.js router navigation
  };

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
        onClick={handleAddNewItem}
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