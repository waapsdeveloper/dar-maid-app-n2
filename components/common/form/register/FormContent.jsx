import { useState } from "react";

const FormContent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Custom form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Custom logic (You can send data to API, validate, etc.)
    console.log("Form Data Submitted:", formData);

    // Example: Custom validation (you can replace with API call)
    if (!formData.username.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    
    // Pass form data to parent component
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="username"
          placeholder="Username"
          required
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
