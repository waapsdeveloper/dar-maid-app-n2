
const ApplicationManagement = () => {
  const [formData, setFormData] = useState({
    jobApplications: "",
    applicationStatus: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSelectChange = (field) => (selectedOption) => {
    setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : "" });
  };

  const applicationStatusOptions = [
    { value: "Pending", label: "Pending" },
    { value: "Reviewed", label: "Reviewed" },
    { value: "Accepted", label: "Accepted" },
    { value: "Rejected", label: "Rejected" },
  ];

  const fields = [
    {
      type: "text",
      name: "jobApplications",
      label: "View Job Applications",
      placeholder: "Search applications...",
      colClass: "col-lg-6 col-md-12",
      required: true,
    },
    {
      type: "select",
      name: "applicationStatus",
      label: "Track Application Status",
      options: applicationStatusOptions,
      colClass: "col-lg-6 col-md-12",
      placeholder: "Select Status",
      required: true,
    },
  ];

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {fields.map((field, index) => (
          <div
            key={index}
            className={`form-group ${field.colClass}`}
          >
            <label>
              {field.label} {field.required && <span style={{ color: "red" }}>*</span>}
            </label>
            {field.type === "text" ? (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                required={field.required}
              />
            ) : field.type === "select" ? (
              <Select
                name={field.name}
                options={field.options}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder={field.placeholder}
                value={field.options.find(option => option.value === formData[field.name]) || null}
                onChange={handleSelectChange(field.name)}
                required={field.required}
              />
            ) : null}
          </div>
        ))}

        {/* Submit Button */}
        <div
          className="form-group col-lg-12 col-md-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={buttonStyle}>
            Manage Applications
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApplicationManagement;