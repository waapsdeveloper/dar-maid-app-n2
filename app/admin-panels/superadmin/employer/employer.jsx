'use client'

import React, { useState } from "react";
import DsPageOuter from "@/templates/layouts/ds-page-outer";
import { ProfileTypes } from "@/data/globalKeys";
import FancyTable from "@/templates/tables/fancy-table";

export const metadata = {
  title: "Employer Profile || Domesta - Listing Board",
  description: "Domesta - Listing Board",
};

const EmployerList = () => {
  // Dummy data for employers
  const [employers, setEmployers] = useState([
    { id: 1, name: "ABC Corporation", industry: "Hospitality", startDate: "2024-10-01", status: "Active" },
    { id: 2, name: "XYZ Services", industry: "Transportation", startDate: "2024-08-15", status: "Active" },
    { id: 3, name: "Home Solutions", industry: "Domestic Services", startDate: "2024-06-20", status: "Inactive" },
  ]);

  // Handle Contact and Remove actions
  const handleContact = (id) => {
    console.log(`Contact employer with ID: ${id}`);
  };

  const handleRemove = (id) => {
    setEmployers(employers.filter(employer => employer.id !== id));
  };

  // Field configurations for employers table
  const employerFields = [
    { key: "name", label: "Company Name" },
    { key: "industry", label: "Industry" },
    { key: "startDate", label: "Start Date" },
    { key: "status", label: "Status" },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div style={{ display: "flex", gap: "5px" }}>
          <button
            onClick={() => handleContact(row?.id)}
            style={{
              padding: "0.3rem 0.8rem",
              border: "none",
              borderRadius: "0.3rem",
              backgroundColor: "#2563eb",
              color: "white",
              cursor: "pointer",
              fontSize: "0.8rem",
            }}
          >
            Contact
          </button>
          <button
            onClick={() => handleRemove(row?.id)}
            style={{
              padding: "0.3rem 0.8rem",
              border: "none",
              borderRadius: "0.3rem",
              backgroundColor: "#2563eb",
              color: "white",
              cursor: "pointer",
              fontSize: "0.8rem",
            }}
          >
            Remove
          </button>
        </div>
      ),
    },
  ];

  return (
    <DsPageOuter
      headerType={ProfileTypes.SUPERADMIN}
      title="Employers List!"
      subtitle="Manage Your Business Clients"
    >
      <FancyTable
        fields={employerFields}
        data={employers}
        title="Employers"
        filterOptions={[]}
      />
    </DsPageOuter>
  );
};

export default EmployerList;