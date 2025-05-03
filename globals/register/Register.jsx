"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Form from "./FormContent";
import Link from "next/link";

import { userService } from "@/services/user.service";
import { utilityService } from "@/services/utility.service";


const Register = () => {
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


    // here we call the API to register the user
    // After successful registration, we can redirect the user to the appropriate dashboard
    // For example, if the user is a candidate, redirect to "/panels/employee/profile"
    const res = await userService.registerUser(formData);

    if(!res){
      utilityService.showToast("error", "Error", "Something went wrong, please try again later")
      return
    }
    


    // Determine redirect route based on selected tab
    let redirectRoute = "/";
    if (selectedTab === 0) {
      redirectRoute ="/panels/employee/profile";
    } else if (selectedTab === 1) {
      redirectRoute = "/panels/agency/profile";
    } else if (selectedTab === 2) {
      redirectRoute ="/panels/employer/profile";
    }

    // alert(`Redirecting to: ${redirectRoute}`);
    setTimeout(() => {
      closeModal(); // Close the modal
      router.push(redirectRoute); // Redirect to the appropriate dashboard
    }, 1000);

  };

  return (
    <div className="form-inner">
      <h3>Create a Domesta Account</h3>

      <Tabs selectedIndex={selectedTab} onSelect={handleTabChange}>
        <div className="form-group register-dual">
          <TabList
            className="btn-box"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              width: "100%",
              gap: "5px",
            }}
          >
            <Tab style={{ flex: "0 0 33.33%", maxWidth: "33.33%" }}>
              <button className="theme-btn btn-style-four" style={{ width: "100%" }}>
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>
            <Tab style={{ flex: "0 0 33.33%", maxWidth: "33.33%" }}>
              <button className="theme-btn btn-style-four" style={{ width: "100%" }}>
                <i className="la la-user"></i> Agency
              </button>
            </Tab>
            <Tab style={{ flex: "0 0 33.33%", maxWidth: "33.33%" }}>
              <button className="theme-btn btn-style-four" style={{ width: "100%" }}>
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>

        {/* Forms for each tab */}
        <TabPanel>
          <Form onSubmit={handleFormSubmit} />
        </TabPanel>
        <TabPanel>
          <Form onSubmit={handleFormSubmit} />
        </TabPanel>
        <TabPanel>
          <Form onSubmit={handleFormSubmit} />
        </TabPanel>
      </Tabs>

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
