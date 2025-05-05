"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Form from "./FormContent";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { userService } from "@/services/user.service";
import { login } from "@/features/auth/authSlice";


const Register = () => {
  
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize router
  const modalRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(0); // Track active tab

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      window.bootstrap = bootstrap; // Make Bootstrap available globally
    });
  }, []);

  // Handle tab change
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const closeModal = () => {
    const modalElement = document.getElementById("registerModal");

    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide(); // Close modal
      }
    }

    // Wait for animation to complete, then remove the backdrop
    setTimeout(() => {
      const modalBackdrop = document.querySelector(".modal-backdrop");
      if (modalBackdrop) {
        modalBackdrop.classList.remove("show"); // Remove "show" class
        // modalBackdrop.classList.add("fade"); // Ensure it fades out
        modalBackdrop.remove(); // Remove the remaining backdrop div after fading out
      }

      document.body.classList.remove("modal-open"); // Remove Bootstrap's modal-open class
      document.querySelector(".modal-backdrop").classList.remove("show")
      document.querySelector(".modal-backdrop").remove();

    }, 300); // Adjust delay to match modal fade animation
  };



  // Form submission handler with redirect
  const handleFormSubmit = async (formData) => {
    console.log("Received data in parent:", formData);

    try {

      // here we call the API to register the user
      // After successful registration, we can redirect the user to the appropriate dashboard
      // For example, if the user is a candidate, redirect to "/panels/employee/profile"
      const res = await userService.registerUser(formData);

      // Dispatch login action
      dispatch(login(res));

      // Close modal
      const modal = document.getElementById("loginPopupModal");
      if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
          modalInstance.hide();
        }
      }

      // Remove modal-backdrop if it remains
      const backdrop = document.querySelector(".modal-backdrop.fade.show");
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }

      let userData = res.user;
      // Navigate based on role
      switch (userData.role.slug) {
        case "employer":
          router.push("/panels/employer/dashboard");
          break;
        case "employee":
          router.push("/panels/employee/dashboard");
          break;
        case "agency":
          router.push("/panels/agency/dashboard");
          break;
        case "super-admin":
          router.push("/panels/superadmin/dashboard");
          break;
        default:
          router.push("/login");
          console.log("role:", userData.role);
      }
    } catch (error) {
      console.error("register  Error:", error);
    }

    // if(!res){
    //   utilityService.showToast("error", "Error", "Something went wrong, please try again later")
    //   return
    // }



    // // Determine redirect route based on selected tab
    // let redirectRoute = "/";
    // if (selectedTab === 0) {
    //   redirectRoute ="/panels/employee/profile";
    // } else if (selectedTab === 1) {
    //   redirectRoute = "/panels/agency/profile";
    // } else if (selectedTab === 2) {
    //   redirectRoute ="/panels/employer/profile";
    // }

    // // alert(`Redirecting to: ${redirectRoute}`);
    // setTimeout(() => {
    //   closeModal(); // Close the modal
    //   router.push(redirectRoute); // Redirect to the appropriate dashboard
    // }, 1000);

  };

  return (
    <div className="form-inner">
      <h3>Create a Domesta Account</h3>

      <Form onSubmit={handleFormSubmit} />

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link href="#" className="call-modal login" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#loginPopupModal">
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
