'use client'

import React, { useState } from "react";
import DsPageOuter from "@/templates/layouts/ds-page-outer";
import { ProfileTypes } from "@/data/globalKeys";
import FancyTable from "@/templates/tables/fancy-table";

export const metadata = {
  title: "Agents || Domesta - Listing Board",
  description: "Domesta - Listing Board",
};

const Agents = () => {
  // Dummy data for agents
  const [agents, setAgents] = useState([
    { id: 1, name: "Lisa Carter", role: "Recruitment Agent", joinDate: "2024-06-10", status: "Active" },
    { id: 2, name: "Tom Wilson", role: "Visa Consultant", joinDate: "2024-08-22", status: "Active" },
    { id: 3, name: "Sarah Lee", role: "Hiring Manager", joinDate: "2024-03-15", status: "Inactive" },
  ]);

  // Handle Contact and Remove actions
  const handleContact = (id) => {
    console.log(`Contact agent with ID: ${id}`);
  };

  const handleRemove = (id) => {
    setAgents(agents.filter(agent => agent.id !== id));
  };

  // Field configurations for agents table
  const agentFields = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "joinDate", label: "Join Date" },
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
        headerType={ProfileTypes.SUPERADMIN}
        title="Agents"
        subtitle="Manage Your Agency's Agents!"
      >
        <FancyTable
          fields={agentFields}
          data={agents}
          title="Agents"
          filterOptions={[]}
        />
      </DsPageOuter>
    </>
  );
};

export default Agents;