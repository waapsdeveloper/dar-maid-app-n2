import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const SelectField = ({ field, value, handleSelectChange }) => {
  return (
    <Select
      name={field.name}
      options={field.options}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={field.placeholder}
      value={field.options.find((option) => option.value === value) || null}
      onChange={(selectedOption) => handleSelectChange(field.name, selectedOption)}
      required={field.required}
    />
  );
};

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.any,
  handleSelectChange: PropTypes.func.isRequired,
};

export default SelectField;