import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const CardForm = ({ fields, formData, onSubmit }) => {
  const tickBoxStyle = (isSelected) => ({
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    backgroundColor: isSelected ? "#28a745" : "#e9ecef",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <form className="default-form card p-4" onSubmit={onSubmit}>
      <div className="row">
        {fields.map((field, index) => (
          <div
            key={index}
            className={`form-group ${field.colClass}`}
            style={field.type === "file" ? { position: "relative", minHeight: "60px" } : {}}
          >
            <label>
              {field.label} {field.required && <span style={{ color: "red" }}>*</span>}
            </label>
            {field.type === "text" || field.type === "number" ? (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                required={field.required}
                readOnly={field.readOnly}
                min={field.min}
              />
            ) : field.type === "date" ? (
              <input
                type="date"
                name={field.name}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                required={field.required}
                style={field.style}
              />
            ) : field.type === "select" ? (
              <Select
                name={field.name}
                options={field.options}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder={field.placeholder}
                value={field.options.find((option) => option.value === formData[field.name]) || null}
                onChange={handleSelectChange(field.name)}
                required={field.required}
              />
            ) : field.type === "file" ? (
              <div style={{ position: "relative" }}>
                <div>
                  <input
                    type="file"
                    name={field.name}
                    accept={field.accept}
                    onChange={handleFileChange(field.name)}
                    required={field.required}
                    style={field.style}
                  />
                  {formData[field.name] && (
                    <div className="mt-2 text-muted small">
                      Selected: {formData[field.name].name}
                    </div>
                  )}
                </div>
                <div style={tickBoxStyle(!!formData[field.name])}>
                  <span
                    style={{
                      color: formData[field.name] ? "#ffffff" : "gray",
                      fontSize: "1rem",
                    }}
                  >
                    ✔
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        ))}

        {/* Submit Button */}
        <div
          className="form-group col-lg-12 col-md-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={buttonStyle}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

CardForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      required: PropTypes.bool,
      readOnly: PropTypes.bool,
      colClass: PropTypes.string,
      options: PropTypes.array,
      accept: PropTypes.string,
      style: PropTypes.object,
    })
  ).isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CardForm;