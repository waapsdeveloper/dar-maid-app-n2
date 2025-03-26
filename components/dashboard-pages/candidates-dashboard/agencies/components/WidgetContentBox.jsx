"use client";

import jobFeaturedData from "../../../../../data/job-featured";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import Image from "next/image";

const WidgetContentBox = () => {
  return (
    <div className="widget-content">
      <div className="tabs-box">
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>Agency Job Postings</h6>

            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals"> Total(s): 2</Tab>
              <Tab className="tab-btn approved"> Active: 2</Tab>
              <Tab className="tab-btn rejected"> Closed: 0</Tab>
            </TabList>
          </div>

          <div className="tabs-content">
            <TabPanel>
              <div className="row">
                {jobFeaturedData.slice(17, 23).map((job) => (
                  <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={job.id}
                  >
                    <div className="inner-box">
                      <div className="content">
                        <figure className="image">
                          <Image
                            width={90}
                            height={90}
                            src={job.logo}
                            alt="agency-logo"
                          />
                        </figure>
                        <h4 className="name">
                          <Link href={`/jobs-single-v1/${job.id}`}>
                            {job.jobTitle}
                          </Link>
                        </h4>

                        <ul className="candidate-info">
                          <li className="category">
                            <span className="icon flaticon-briefcase"></span>
                            {job.category}
                          </li>
                          <li>
                            <span className="icon flaticon-map-locator"></span>{" "}
                            {job.location}
                          </li>
                          <li>
                            <span className="icon flaticon-money"></span>{" "}
                            {job.salary}
                          </li>
                          <li>
                            <span className="icon flaticon-clock"></span>{" "}
                            {job.experience} Experience
                          </li>
                        </ul>

                        <ul className="post-tags">
                          {job.jobType.map((val, i) => (
                            <li key={i} className={val.styleClass}>
                              <a href="#">{val.type}</a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Applications">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Edit Job">
                              <span className="la la-pencil"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Job">
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

            <TabPanel>
              <div className="row">
                {jobFeaturedData.slice(0, 2).map((job) => (
                  <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={job.id}
                  >
                    <div className="inner-box">
                      {/* Same structure as above */}
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row">
                {/* Closed jobs content */}
                <div className="col-12">
                  <div className="text-center py-5">
                    <h6>No closed positions currently</h6>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default WidgetContentBox;