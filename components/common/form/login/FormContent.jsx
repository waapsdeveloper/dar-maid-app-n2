"use client";

import { useState } from "react";
import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { userService } from "@/services/user.service";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const FormContent = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const router = useRouter();

  // State to hold form values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    let obj = {
      username,
      password,
      rememberMe,
    };

    const userData = await userService.loginUser(obj);
    console.log(userData);
    if (!userData) {
      alert("Invalid credentials");
      return false;
    }

    // Dispatch login action

    dispatch(login(userData));
    if (modalRef.current) {
      const modalInstance = bootstrap.Modal.getInstance(modalRef.current);
      if (modalInstance) {
        modalInstance.hide();
      }
    }    

    switch (userData.role) {
      case "employer":
        router.push("/employer/dashboard");
        break;
      case "employee":
        router.push("/candidate/dashboard");
        break;
      case "agency":
        router.push("/agency/dashboard");
        break;
      case "superadmin":
        router.push("/superadmin/dashboard");
        break;
      default:
        router.push("/login"); // Default fallback
    }
  };

  return (
    <div className="form-inner">
      <h3>Login to Domesta </h3>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={username} // Controlled input
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password} // Controlled input
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
        </div>

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input
                type="checkbox"
                name="remember-me"
                id="remember"
                checked={rememberMe} // Controlled input
                onChange={(e) => setRememberMe(e.target.checked)} // Update state on checkbox change
              />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
            data-bs-dismiss="modal"
          >
            Log In
          </button>
        </div>
      </form>

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
