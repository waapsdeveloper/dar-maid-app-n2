import React, { useState } from "react";

// Define buttonStyle at the top level for consistent styling
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

// Define removeButtonStyle for the "Remove Document" button
const removeButtonStyle = {
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "0.5rem",
  backgroundColor: "#e63946", // Red color for delete action
  color: "white",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
};

// Define tickBoxStyle for the tick container (same as EmploymentDetails)
const tickBoxStyle = (isFileSelected) => ({
  position: "absolute",
  right: "20px",
  top: "30%",
  transform: "translateY(-50%)",
  width: "24px",
  height: "24px",
  border: `1px solid ${isFileSelected ? "#28a745" : "#d0d0d0"}`,
  borderRadius: "50%",
  backgroundColor: isFileSelected ? "#28a745" : "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
});

// Define actionButtonStyle for table action buttons (View, Edit, Delete)
const actionButtonStyle = {
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "0.5rem",
  color: "white",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: "500",
  margin: "0 4px",
};

const Document = () => {
  const [savedDocuments, setSavedDocuments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [viewFile, setViewFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({
    id: Date.now(),
    category: "",
    file: null,
    expiryDate: "",
    currentStatus: "",
    issuingCountry: "",
    currentLocation: "",
    workAvailableImmediately: "",
    numberOfDays: "",
  });

  const documentCategories = [
    "Visa",
    "Passport",
    "CRP/National ID",
    "Certificate",
    "License",
  ];

  const gulfCountries = [
    "Bahrain",
    "Kuwait",
    "Oman",
    "Qatar",
    "Saudi Arabia",
    "United Arab Emirates",
  ];

  const handleFieldChange = (field, value) => {
    setCurrentEntry((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (file) => {
    setCurrentEntry((prev) => ({ ...prev, file: file }));
  };

  const handleSaveEntry = () => {
    if (isEditing) {
      setSavedDocuments(
        savedDocuments.map((doc) =>
          doc.id === currentEntry.id ? currentEntry : doc
        )
      );
    } else {
      setSavedDocuments([...savedDocuments, currentEntry]);
    }
    setModalOpen(false);
    resetForm();
    setIsEditing(false);
  };

  const handleEditEntry = (doc) => {
    setCurrentEntry(doc);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDeleteEntry = (id) => {
    setSavedDocuments(savedDocuments.filter((doc) => doc.id !== id));
  };

  const handleViewFile = (file) => {
    if (file) {
      setViewFile(file);
      setViewModalOpen(true);
    }
  };

  const resetForm = () => {
    setCurrentEntry({
      id: Date.now(),
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

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    backgroundColor: "#F0F5F7",
    boxSizing: "border-box",
  };

  return (
    <div>
      {/* Add Document Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setModalOpen(true)}
        >
          {savedDocuments.length === 0 ? "Add Document" : "Add Another Document"}
        </button>
      </div>

      {/* Modal for Adding/Editing Document */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "800px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <h3>{isEditing ? "Edit Document" : "Add Document"}</h3>
            <form className="default-form">
              <div className="row">
                {/* Document Type */}
                <div className="form-group col-lg-3 col-md-12">
                  <label>
                    Document Type <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="chosen-single form-select"
                    value={currentEntry.category}
                    onChange={(e) =>
                      handleFieldChange("category", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Document Type</option>
                    {documentCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Expiry Date */}
                <div className="form-group col-lg-3 col-md-12">
                  <label>
                    Expiry Date <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="date"
                    value={currentEntry.expiryDate}
                    onChange={(e) =>
                      handleFieldChange("expiryDate", e.target.value)
                    }
                    required
                    style={inputStyle}
                  />
                </div>
                {/* Current Status */}
                <div className="form-group col-lg-3 col-md-12">
                  <label>
                    Current Status <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="chosen-single form-select"
                    value={currentEntry.currentStatus}
                    onChange={(e) =>
                      handleFieldChange("currentStatus", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="Valid">Valid</option>
                    <option value="Expired">Expired</option>
                  </select>
                </div>
                {/* Issuing Country */}
                <div className="form-group col-lg-3 col-md-12">
                  <label>
                    Issuing Country <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="chosen-single form-select"
                    value={currentEntry.issuingCountry}
                    onChange={(e) =>
                      handleFieldChange("issuingCountry", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Country</option>
                    {gulfCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Current Location */}
                <div className="form-group col-lg-3 col-md-12">
                  <label>
                    Current Location <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="chosen-single form-select"
                    value={currentEntry.currentLocation}
                    onChange={(e) =>
                      handleFieldChange("currentLocation", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Country</option>
                    {gulfCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Work Available Immediately */}
                <div className="form-group col-lg-3 col-md-12">
                  <label>
                    Work Immediately <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="chosen-single form-select"
                    value={currentEntry.workAvailableImmediately}
                    onChange={(e) =>
                      handleFieldChange("workAvailableImmediately", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {/* Number of Days */}
                <div className="form-group col-lg-3 col-md-12">
                  <label>
                    Number of Days <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="E.g., 30 days"
                    value={currentEntry.numberOfDays}
                    onChange={(e) =>
                      handleFieldChange("numberOfDays", e.target.value)
                    }
                    required
                  />
                </div>
                {/* Document Copy (PDF or Image) with Green Tick Circle */}
                <div className="form-group col-lg-6 col-md-12" style={{ position: "relative", minHeight: "60px" }}>
                  <label>
                    Document Copy (PDF or Image){" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <div>
                      <input
                        type="file"
                        accept=".pdf,image/*"
                        onChange={(e) => handleFileChange(e.target.files[0])}
                        required={!isEditing && !currentEntry.file} // Required only if not editing or no file exists
                        style={inputStyle}
                      />
                      {currentEntry.file && (
                        <div className="mt-2 text-muted small">
                          Selected: {currentEntry.file.name}
                        </div>
                      )}
                    </div>
                    <div style={tickBoxStyle(!!currentEntry.file)}>
                      <span
                        style={{
                          color: !!currentEntry.file ? "#ffffff" : "gray",
                          fontSize: "1rem",
                        }}
                      >
                        ✔
                      </span>
                    </div>
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div
                  className="form-group col-lg-12 col-md-12"
                  style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
                >
                  <button
                    type="button"
                    style={{ ...buttonStyle, backgroundColor: "#6b7280" }}
                    onClick={() => {
                      setModalOpen(false);
                      resetForm();
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    style={buttonStyle}
                    onClick={handleSaveEntry}
                  >
                    Save Details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View File Modal */}
      {viewModalOpen && viewFile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "600px",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setViewModalOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
            <h3>View Document</h3>
            {viewFile.type.includes("image") ? (
              <img
                src={URL.createObjectURL(viewFile)}
                alt="Uploaded document"
                style={{ maxWidth: "100%", maxHeight: "60vh", marginTop: "1rem" }}
              />
            ) : (
              <embed
                src={URL.createObjectURL(viewFile)}
                type="application/pdf"
                style={{ width: "100%", height: "60vh", marginTop: "1rem" }}
              />
            )}
          </div>
        </div>
      )}

      {/* Table to Display Saved Documents */}
      {savedDocuments.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Saved Documents</h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1rem",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Document Type</th>
                <th style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Expiry Date</th>
                <th style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Current Status</th>
                <th style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Issuing Country</th>
                <th style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Current Location</th>
                <th style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Work Available Immediately</th>
                <th style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Number of Days</th>
                <th style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {savedDocuments.map((doc) => (
                <tr key={doc.id}>
                  <td style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "center" }}>
                    {doc.category}
                  </td>
                  <td style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "center" }}>
                    {doc.expiryDate}
                  </td>
                  <td style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "center" }}>
                    {doc.currentStatus}
                  </td>
                  <td style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "center" }}>
                    {doc.issuingCountry}
                  </td>
                  <td style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "center" }}>
                    {doc.currentLocation}
                  </td>
                  <td style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "center" }}>
                    {doc.workAvailableImmediately}
                  </td>
                  <td style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "center" }}>
                    {doc.numberOfDays}
                  </td>
                  <td style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "center" }}>
                    <button
                      style={{ ...actionButtonStyle, backgroundColor: "#1a73e8" }}
                      onClick={() => handleViewFile(doc.file)}
                    >
                      View
                    </button>
                    <button
                      style={{ ...actionButtonStyle, backgroundColor: "#f59e0b" }}
                      onClick={() => handleEditEntry(doc)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ ...actionButtonStyle, backgroundColor: "#e63946" }}
                      onClick={() => handleDeleteEntry(doc.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const FileCard = () => {
  const [files, setFiles] = useState([
    { id: 1, name: "project.pdf", type: "pdf", size: "2.5 MB" },
    { id: 2, name: "document.docx", type: "doc", size: "1.2 MB" },
    { id: 3, name: "image.png", type: "image", size: "3.8 MB" },
    { id: 4, name: "data.csv", type: "file", size: "512 KB" },
  ]);

  const getFileIcon = (type) => {
    const iconStyle = { width: "50px", height: "50px" };

    switch (type) {
      case "pdf":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="red">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm-4-6V3.5L18.5 9H13z" />
          </svg>
        );
      case "doc":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="blue">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm-4-6V3.5L18.5 9H13z" />
          </svg>
        );
      case "image":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="green">
            <path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
          </svg>
        );
      default:
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="gray">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm-4-6V3.5L18.5 9H13z" />
          </svg>
        );
    }
  };

  const handleDelete = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  return (
    <div
      style={{
        margin: "0",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "flex-start",
      }}
    >
      {files.map((file) => (
        <div
          key={file.id}
          style={{
            position: "relative",
            width: "280px",
            height: "160px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => handleDelete(file.id)}
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
            }}
          >
            <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            {getFileIcon(file.type)}
            <div style={{ overflow: "hidden" }}>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {file.name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "2px",
                }}
              >
                {file.type.toUpperCase()} • {file.size}
              </div>
            </div>
          </div>
          <div
            style={{
              background: "#f3f4f6",
              borderRadius: "4px",
              padding: "6px",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "auto",
            }}
          >
            {file.type === "image" ? "Preview Available" : "Click to Preview"}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Document, FileCard };