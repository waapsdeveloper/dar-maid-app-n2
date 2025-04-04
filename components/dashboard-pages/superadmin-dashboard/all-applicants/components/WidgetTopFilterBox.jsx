"use client";
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
        className="theme-btn btn-style-one"
        onClick={() => router.push("/superadmin/add-employee")}
      >
        <span className="la la-plus-circle mr-1"></span>
        Add
      </button>
    </div>
  );
};

export default WidgetTopFilterBox;