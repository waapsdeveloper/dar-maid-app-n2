"use client";

import Register from "../register/Register";
import FormContent from "./FormContent";
import { userService } from "@/services/user.service";
import { utilityService } from "@/services/utility.service";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

// Handle registration form submission
const handleRegisterSubmit = async (formData) => {
  console.log("Received registration data:", formData);
  try {
    const res = await userService.loginUser(formData);
    console.log("Registration API Response:", res);

    if (!res || !res.success) {
      await utilityService.showAlert(
        "Error",
        res?.message || "Something went wrong, please try again later",
        "error"
      );
      return;
    }

    await utilityService.showAlert(
      "Success",
      "Registration successful!",
      "success"
    );
    // Close modal
    const modal = document.getElementById("registerModal");
    if (modal) {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  } catch (error) {
    console.error("Registration Error:", error);
    await utilityService.showAlert(
      "Error",
      error.message || "Something went wrong, please try again later",
      "error"
    );
  }
};

// Handle login form submission
const handleFormSubmit = async (formData) => {
  console.log("Received login data in LoginPopup:", formData);
  if (!formData || !formData.username || !formData.password) {
    console.error("Invalid login data:", formData);
    await utilityService.showAlert(
      "Error",
      "Please provide username and password",
      "error"
    );
    return;
  }

  try {
    const userData = await userService.loginUser(formData);
    console.log("Login API Response:", userData);

    if (!userData || !userData.success) {
      await utilityService.showAlert(
        "Error",
        userData?.message || "Invalid credentials",
        "error"
      );
      return;
    }

    const dispatch = useDispatch();
    const router = useRouter();

    // Dispatch login action
    dispatch(login(userData));

    // Close modal
    const modal = document.getElementById("loginPopupModal");
    if (modal) {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    }

    // Show success alert
    await utilityService.showAlert("Success", "Login successful!", "success");

    // Navigate based on role
    switch (userData.role) {
      case "employer":
        router.push("/panels/employer/dashboard");
        break;
      case "employee":
        router.push("/panels/employee/dashboard");
        break;
      case "agency":
        router.push("/panels/agency/dashboard");
        break;
      case "superadmin":
        router.push("/panels/superadmin/dashboard");
        break;
      default:
        router.push("/login");
    }
  } catch (error) {
    console.error("Login Error:", error);
    await utilityService.showAlert(
      "Error",
      error.message || "Something went wrong, please try again later",
      "error"
    );
  }
};

const LoginPopup = () => {
  return (
    <>
      <div className="modal fade" id="loginPopupModal">
        <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>
            {/* End close modal btn */}

            <div className="modal-body">
              <div id="login-modal">
                <div className="login-form default-form">
                  <FormContent onSubmit={handleFormSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="registerModal">
        <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>
            {/* End close modal btn */}

            <div className="modal-body">
              <div id="login-modal">
                <div className="login-form default-form">
                  <Register onSubmit={handleRegisterSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
