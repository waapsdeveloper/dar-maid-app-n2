import React, { useState } from "react";
const Document = () => {
  const [documents, setDocuments] = useState([
    { id: Date.now(), category: "", file: null },
  ]);

  const documentCategories = [
    "Visa",
    "Certificates",
    "References",
    "Passport",
    "Contract",
    "Other",
  ];

  const handleAddDocument = () => {
    setDocuments([...documents, { id: Date.now(), category: "", file: null }]);
  };

  const handleRemoveDocument = (id) => {
    if (documents.length > 1) {
      setDocuments(documents.filter((doc) => doc.id !== id));
    }
  };

  const handleCategoryChange = (id, value) => {
    const updatedDocs = documents.map((doc) =>
      doc.id === id ? { ...doc, category: value } : doc
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
    // Handle form submission here
    console.log("Submitted documents:", documents);
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {documents.map((doc) => (
          <div key={doc.id} className="form-group col-lg-12 col-md-12 mb-4">
            <div className="document-upload-container border p-3 rounded-3 bg-light">
              <div className="d-flex align-items-center gap-3">
                {/* Enhanced Dropdown */}
                <div className="flex-grow-1 position-relative">
                  <select
                    className="form-select form-select-lg py-3"
                    style={{
                      border: "2px solid #0d6efd",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                    }}
                    value={doc.category}
                    onChange={(e) =>
                      handleCategoryChange(doc.id, e.target.value)
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

                {/* Enhanced File Input */}
                <div className="flex-grow-1">
                  <label
                    className="btn btn-lg d-block w-100 py-3"
                    style={{
                      border: "2px dashed #0d6efd",
                      backgroundColor: "rgba(13, 110, 253, 0.1)",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                    }}
                  >
                    📤 Upload File
                    <input
                      type="file"
                      className="d-none"
                      accept=".pdf,.doc,.docx,image/*"
                      onChange={(e) =>
                        handleFileChange(doc.id, e.target.files[0])
                      }
                      required
                    />
                  </label>
                </div>

                {/* Remove Button */}
                {documents.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger btn-lg px-3 py-2"
                    onClick={() => handleRemoveDocument(doc.id)}
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Selected File Name */}
              {doc.file && (
                <div className="mt-2 text-muted small">
                  Selected: {doc.file.name}
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
            width: "280px", // Increased width
            height: "160px", // Increased height
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "12px", // Reduced padding
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Delete Button */}
          <button
            onClick={() => handleDelete(file.id)}
            style={{
              position: "absolute",
              top: "4px", // Moved closer to top
              right: "4px", // Moved closer to right
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

          {/* File Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px", // Reduced gap
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
                  marginTop: "2px", // Reduced spacing
                }}
              >
                {file.type.toUpperCase()} • {file.size}
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div
            style={{
              background: "#f3f4f6",
              borderRadius: "4px",
              padding: "6px", // Reduced padding
              fontSize: "12px",
              textAlign: "center",
              marginTop: "auto", // Pushes to bottom
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
