'use client'

import React, { useState } from "react";
import DsPageOuter from "@/templates/layouts/ds-page-outer";
import { ProfileTypes } from "@/data/globalKeys";
import FancyTable from "@/templates/tables/fancy-table";

export const metadata = {
  title: "Agency Profile || Domesta - Listing Board",
  description: "Domesta - Listing Board",
};

const EmployeesList = () => {
  // Dummy data for employees
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", position: "Nanny", hireDate: "2024-11-01", status: "Active" },
    { id: 2, name: "Jane Smith", position: "Driver", hireDate: "2024-09-15", status: "Active" },
    { id: 3, name: "Mike Brown", position: "Housekeeper", hireDate: "2024-07-20", status: "Inactive" },
  ]);

  // Handle Contact and Remove actions
  const handleContact = (id) => {
    console.log(`Contact employee with ID: ${id}`);
  };

  const handleRemove = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  // Field configurations for employees table
  const employeeFields = [
    { key: "name", label: "Name" },
    { key: "position", label: "Position" },
    { key: "hireDate", label: "Hire Date" },
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
    <>
      <DsPageOuter
        headerType={ProfileTypes.AGENCY}
        title="Employees List!"
        subtitle="Keep Your Crew Connected"
      >
        <FancyTable
          fields={employeeFields}
          data={employees}
          title="Employees"
          filterOptions={[]}
        />
      </DsPageOuter>
    </>
  );
};

export default EmployeesList;