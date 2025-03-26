"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import Image from "next/image";
import employersData from "../../../../../data/topCompany";
const WidgetContentBox = () => {
  return (
    <div className="widget-content">
      <div className="tabs-box">
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>Employer Directory</h6>

            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals">
                {" "}
                All Employers: {employersData.length}
              </Tab>
              <Tab className="tab-btn approved"> Active: 2</Tab>
              <Tab className="tab-btn rejected"> Inactive: 0</Tab>
            </TabList>
          </div>

          <div className="tabs-content">
            <TabPanel>
              <div className="row">
                {employersData.map((company) => (
                  <div
                    className="company-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12"
                    key={company.id}
                  >
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>

                      <div className="content-inner">
                        <span className="featured">Featured</span>
                        <span className="company-logo">
                          <Image
                            width={50}
                            height={50}
                            src={company.img}
                            alt="company brand"
                          />
                        </span>
                        <h4>
                          <Link href={`/employers-single-v3/${company.id}`}>
                            {company.name}
                          </Link>
                        </h4>
                        <ul className="job-info flex-column">
                          <li className="me-0">
                            <span className="icon flaticon-map-locator"></span>
                            {company.location}
                          </li>
                          <li className="me-0">
                            <span className="icon flaticon-briefcase"></span>
                            {company.jobType}
                          </li>
                        </ul>
                      </div>

                      <div className="job-type me-0">
                        Open Jobs – {company.jobNumber}
                      </div>
                      <div className="option-box   d-flex justify-content-center mt-4">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Approve Aplication">
                              <span className="la la-check"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Reject Aplication">
                              <span className="la la-times-circle"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* Active and Inactive panels would follow similar structure */}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default WidgetContentBox;
