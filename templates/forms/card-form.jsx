import React from "react";
import PropTypes from "prop-types";
import InputField from "@/templates/inputs/input-field";
import SelectField from "@/templates/inputs/select-field";
import ImageField from "@/templates/inputs/image-field";

const CardForm = ({ fields, formData, handleChange, handleSelectChange, handleFileChange, onSubmit }) => {
  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const labelStyle = {
    color: "#69697C", 
    fontWeight: "450",
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "number":
      case "date":
        return (
          <InputField
            field={field}
            value={formData[field.name]}
            handleChange={handleChange}
          />
        );
      case "select":
        return (
          <SelectField
            field={field}
            value={formData[field.name]}
            handleSelectChange={handleSelectChange}
          />
        );
      case "file":
        return (
          <ImageField
            field={field}
            value={formData[field.name]}
            handleFileChange={handleFileChange}
          />
        );
      case "custom":
        return field.render ? field.render() : null;
      default:
        return null;
    }
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
            <label style={labelStyle}>
              {field.label} {field.required && <span style={{ color: "red" }}>*</span>}
            </label>
            {renderField(field)}
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
      render: PropTypes.func,
    })
  ).isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CardForm;