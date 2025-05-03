import { useState } from "react";

const FormContent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Custom form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Custom logic
    console.log("Form Data Submitted:", formData);

    // Validation: Check if email contains '@'
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validation: Check if password and password_confirmation match
    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match.");
      return;
    }

    // Pass form data to parent component
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {/* email */}

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
        <label>Confirm Password</label>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          required
          value={formData.password_confirmation}
          onChange={handleChange}
        />
      </div>
      {/* password_confirmation */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* submit */}
    </form>
  );
};

export default FormContent;