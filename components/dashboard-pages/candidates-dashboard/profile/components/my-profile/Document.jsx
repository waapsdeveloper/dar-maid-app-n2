import React, { useState } from "react";

const Document = () => {
  const [documents, setDocuments] = useState([
    {
      id: Date.now(),
      category: "",
      file: null,
      expiryDate: "",
      currentStatus: "",
      issuingCountry: "",
      currentLocation: "",
      workAvailableImmediately: "",
      numberOfDays: "",
    },
  ]);

  const documentCategories = [
    "Visa",
    "Passport",
    "CRP/National ID",
    "Certificate",
    "License",
  ];

  const countries = [
    "Bahrain",
    "USA",
    "Canada",
    "UK",
    "Australia",
    // Add more countries as needed
  ];

  const handleAddDocument = () => {
    setDocuments([
      ...documents,
      {
        id: Date.now(),
        category: "",
        file: null,
        expiryDate: "",
        currentStatus: "",
        issuingCountry: "",
        currentLocation: "",
        workAvailableImmediately: "",
        numberOfDays: "",
      },
    ]);
  };

  const handleRemoveDocument = (id) => {
    if (documents.length > 1) {
      setDocuments(documents.filter((doc) => doc.id !== id));
    }
  };

  const handleFieldChange = (id, field, value) => {
    const updatedDocs = documents.map((doc) =>
      doc.id === id ? { ...doc, [field]: value } : doc
    );
    setDocuments(updatedDocs);
  };

  const handleFileChange = (id, file) => {
    const updatedDocs = documents.map((doc) =>
      doc.id === id ? { ...doc, file: file } : doc
    );
    setDocuments(updatedDocs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted documents:", documents);
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {documents.map((doc) => (
          <div key={doc.id} className="form-group col-lg-12 col-md-12 mb-4">
            <div
              className="document-upload-container border p-3 rounded-3 bg-light"
              style={{
                border: "2px solid #e2e8f0",
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <div className="d-flex flex-column gap-3">
                {/* Document Type and File Upload */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ flex: "1 1 300px" }}>
                    <label
                      className="form-label"
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#4a5568",
                        fontWeight: "600",
                      }}
                    >
                      Document Type
                    </label>
                    <div className="position-relative">
                      <select
                        className="form-select form-select-lg py-3"
                        style={{
                          border: "2px solid #0d6efd",
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          width: "100%",
                          padding: "0.75rem",
                          borderRadius: "0.5rem",
                        }}
                        value={doc.category}
                        onChange={(e) =>
                          handleFieldChange(doc.id, "category", e.target.value)
                        }
                        required
                      >
                        <option value="">📄 Select Document Type</option>
                        {documentCategories.map((category) => (
                          <option key={category} value={category}>
                            📁 {category}
                          </option>
                        ))}
                      </select>
                      <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                        ▼
                      </span>
                    </div>
                  </div>
                  <div style={{ flex: "1 1 300px" }}>
                    <label
                      className="form-label"
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#4a5568",
                        fontWeight: "600",
                      }}
                    >
                      Document Copy (PDF or Image)
                    </label>
                    <label
                      className="btn btn-lg d-block w-100 py-3"
                      style={{
                        border: "2px dashed #0d6efd",
                        backgroundColor: "rgba(13, 110, 253, 0.1)",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        textAlign: "center",
                      }}
                    >
                      📤 Upload File
                      <input
                        type="file"
                        className="d-none"
                        accept=".pdf,image/*"
                        onChange={(e) =>
                          handleFileChange(doc.id, e.target.files[0])
                        }
                        required
                      />
                    </label>
                    {doc.file && (
                      <div className="mt-2 text-muted small">
                        Selected: {doc.file.name}
                      </div>
                    )}
                  </div>
                </div>

                {/* Expiry Date and Current Status */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ flex: "1 1 300px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#4a5568",
                        fontWeight: "600",
                      }}
                    >
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid #cbd5e0",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                      }}
                      value={doc.expiryDate}
                      onChange={(e) =>
                        handleFieldChange(doc.id, "expiryDate", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div style={{ flex: "1 1 300px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#4a5568",
                        fontWeight: "600",
                      }}
                    >
                      Current Status
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid #cbd5e0",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                        backgroundColor: "white",
                      }}
                      value={doc.currentStatus}
                      onChange={(e) =>
                        handleFieldChange(doc.id, "currentStatus", e.target.value)
                      }
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="Valid">Valid</option>
                      <option value="Expired">Expired</option>
                    </select>
                  </div>
                </div>

                {/* Issuing Country and Current Location */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ flex: "1 1 300px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#4a5568",
                        fontWeight: "600",
                      }}
                    >
                      Issuing Country
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid #cbd5e0",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                        backgroundColor: "white",
                      }}
                      value={doc.issuingCountry}
                      onChange={(e) =>
                        handleFieldChange(
                          doc.id,
                          "issuingCountry",
                          e.target.value
                        )
                      }
                      required
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={{ flex: "1 1 300px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#4a5568",
                        fontWeight: "600",
                      }}
                    >
                      Current Location
                    </label>
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid #cbd5e0",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                      }}
                      placeholder="In Bahrain or specify country"
                      value={doc.currentLocation}
                      onChange={(e) =>
                        handleFieldChange(
                          doc.id,
                          "currentLocation",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                </div>

                {/* Work Available Immediately and Number of Days */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ flex: "1 1 300px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#4a5568",
                        fontWeight: "600",
                      }}
                    >
                      Work Available Immediately
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid #cbd5e0",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                        backgroundColor: "white",
                      }}
                      value={doc.workAvailableImmediately}
                      onChange={(e) =>
                        handleFieldChange(
                          doc.id,
                          "workAvailableImmediately",
                          e.target.value
                        )
                      }
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div style={{ flex: "1 1 300px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#4a5568",
                        fontWeight: "600",
                      }}
                    >
                      Number of Days
                    </label>
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid #cbd5e0",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                      }}
                      placeholder="E.g., 30 days"
                      value={doc.numberOfDays}
                      onChange={(e) =>
                        handleFieldChange(doc.id, "numberOfDays", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Remove Button */}
              {documents.length > 1 && (
                <div className="mt-3">
                  <button
                    type="button"
                    className="btn btn-danger btn-lg px-3 py-2"
                    onClick={() => handleRemoveDocument(doc.id)}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="form-group col-lg-12 col-md-12 mt-4 d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-secondary btn-lg px-4 py-2"
            onClick={handleAddDocument}
          >
            ➕ Add Another Document
          </button>
          <button
            type="submit"
            className="btn btn-primary btn-lg px-4 py-2"
            style={{ minWidth: "200px" }}
          >
            💾 Save Documents
          </button>
        </div>
      </div>
    </form>
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