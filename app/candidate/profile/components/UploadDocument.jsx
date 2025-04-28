'use client';

import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique IDs
import FancyTable from "@/templates/tables/fancy-table";

const UploadDocument = () => {
  const [savedDocuments, setSavedDocuments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({
    id: uuidv4(), // Generate a unique ID
    category: "",
    file: null,
    expiryDate: "",
    currentStatus: "",
    issuingCountry: "",
    currentLocation: "",
    workAvailableImmediately: "",
    numberOfDays: "",
  });

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: "#1a73e8",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
  };

  const handleFieldChange = (field, value) => {
    setCurrentEntry((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (file) => {
    setCurrentEntry((prev) => ({ ...prev, file: file }));
  };

  const saveDocument = () => {
    if (isEditing) {
      setSavedDocuments(
        savedDocuments.map((doc) =>
          doc.id === currentEntry.id ? currentEntry : doc
        )
      );
    } else {
      setSavedDocuments([...savedDocuments, { ...currentEntry, id: uuidv4() }]); // Generate a new unique ID
    }
    setIsModalOpen(false);
    resetForm();
    setIsEditing(false);
  };

  const editDocument = (doc) => {
    setCurrentEntry(doc);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const deleteDocument = (id) => {
    setSavedDocuments(savedDocuments.filter((doc) => doc.id !== id));
  };

  const resetForm = () => {
    setCurrentEntry({
      id: uuidv4(), // Generate a new unique ID
      category: "",
      file: null,
      expiryDate: "",
      currentStatus: "",
      issuingCountry: "",
      currentLocation: "",
      workAvailableImmediately: "",
      numberOfDays: "",
    });
  };

  const fields = [
    { key: "category", label: "Document Type" },
    { key: "expiryDate", label: "Expiry Date" },
    { key: "currentStatus", label: "Current Status" },
    { key: "issuingCountry", label: "Issuing Country" },
    { key: "currentLocation", label: "Current Location" },
    { key: "workAvailableImmediately", label: "Work Immediately" },
    { key: "numberOfDays", label: "Number of Days" },   
  ];

  return (
    <div>
      {/* Modal for Adding/Editing Document */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "2rem",
              borderRadius: "8px",
              width: "80%",
              maxWidth: "800px",
              zIndex: 1000,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4>{isEditing ? "Edit Document" : "Add Document"}</h4>
            {/* Add form fields here */}
            <button
              type="button"
              style={buttonStyle}
              onClick={saveDocument}
            >
              Save Details
            </button>
          </div>
        </div>
      )}

      {/* FancyTable to Display Documents */}
      <FancyTable
        fields={fields}
        data={savedDocuments}
        title="Uploaded Documents"
        filterOptions={[]}
      />

      {/* Add Document Button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setIsModalOpen(true)}
        >
          + Add Document
        </button>
      </div>
    </div>
  );
};

export default UploadDocument;