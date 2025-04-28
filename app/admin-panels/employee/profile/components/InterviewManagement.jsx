
const InterviewManagement = () => {
    const [formData, setFormData] = useState({
      interviewTime: "",
      liveInWithFamily: "",
      relocationInsideCountry: "",
      maxHoursPerDay: "",
      flexibleWeekends: "",
      householdType: "",
      communicationLanguage: "",
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
  
    const languages = [
      { value: "English", label: "English" },
      { value: "Arabic", label: "Arabic" },
      { value: "French", label: "French" },
      { value: "Spanish", label: "Spanish" },
      { value: "Hindi", label: "Hindi" },
    ];
  
    const yesNoOptions = [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ];
  
    const liveInOptions = [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
      { value: "Conditional", label: "Conditional" },
    ];
  
    const householdTypeOptions = [
      { value: "Local", label: "Local" },
      { value: "Expat", label: "Expat" },
      { value: "No Preference", label: "No Preference" },
    ];
  
    const fields = [
      {
        type: "text",
        name: "interviewTime",
        label: "Preferred Interview Time",
        placeholder: "E.g., 10 AM - 12 PM",
        colClass: "col-lg-3 col-md-12",
        required: true,
      },
      {
        type: "number",
        name: "maxHoursPerDay",
        label: "Maximum hours per day",
        placeholder: "E.g., 8",
        colClass: "col-lg-3 col-md-12",
        min: "1",
        required: true,
      },
      {
        type: "select",
        name: "householdType",
        label: "Preferred household type",
        options: householdTypeOptions,
        colClass: "col-lg-3 col-md-12",
        placeholder: "Select Preference",
        required: true,
      },
      {
        type: "select",
        name: "communicationLanguage",
        label: "Languages preferred",
        options: languages,
        colClass: "col-lg-3 col-md-12",
        placeholder: "Select Language",
        required: true,
      },
      {
        type: "select",
        name: "liveInWithFamily",
        label: "Willing to live-in with family?",
        options: liveInOptions,
        colClass: "col-lg-3 col-md-12",
        placeholder: "Select Option",
        required: true,
      },
      {
        type: "select",
        name: "relocationInsideCountry",
        label: "Comfortable with relocation?",
        options: yesNoOptions,
        colClass: "col-lg-3 col-md-12",
        placeholder: "Select Option",
        required: true,
      },
      {
        type: "select",
        name: "flexibleWeekends",
        label: "Flexible with weekends?",
        options: yesNoOptions,
        colClass: "col-lg-3 col-md-12",
        placeholder: "Select Option",
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
              {field.type === "text" || field.type === "number" ? (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  min={field.min}
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
              Save Preferences
            </button>
          </div>
        </div>
      </form>
    );
  };

  export default InterviewManagement;