"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import Form from "./FormContent";
import Link from "next/link";

const Register = () => {
  return (
    <div className="form-inner">
      <h3>Create a Domesta Account</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList
            className="btn-box"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              width: "100%",
              gap: "5px", // Adds spacing between buttons
            }}
          >
            <Tab
              style={{
                flex: "0 0 33.33%",
                maxWidth: "33.33%",
              }}
            >
              <button
                className="theme-btn btn-style-four"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(12px, 1.5vw, 14px)", // Responsive font sizing
                  padding: "0.5em 0.2em", // Relative padding
                  lineHeight: 1.2,
                }}
              >
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>
            <Tab
              style={{
                flex: "0 0 33.33%",
                maxWidth: "33.33%",
              }}
            >
              <button
                className="theme-btn btn-style-four"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(12px, 1.5vw, 14px)",
                  padding: "0.5em 0.2em",
                  lineHeight: 1.2,
                }}
              >
                <i className="la la-user"></i> Agency
              </button>
            </Tab>
            <Tab
              style={{
                flex: "0 0 33.33%",
                maxWidth: "33.33%",
              }}
            >
              <button
                className="theme-btn btn-style-four"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(12px, 1.5vw, 14px)",
                  padding: "0.5em 0.2em",
                  lineHeight: 1.2,
                }}
              >
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>

        {/* TabPanels remain the same */}
        <TabPanel>
          <Form />
        </TabPanel>
        <TabPanel>
          <Form />
        </TabPanel>
        <TabPanel>
          <Form />
        </TabPanel>
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link
            href="#"
            className="call-modal login"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            data-bs-target="#loginPopupModal"
          >
            LogIn
          </Link>
        </div>
        {/* <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial /> */}
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register;
