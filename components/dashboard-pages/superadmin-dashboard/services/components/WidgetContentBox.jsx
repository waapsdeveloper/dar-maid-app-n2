"use client";

import jobCatContent from "../../../../../data/job-catergories";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import Image from "next/image";

const WidgetContentBox = () => {
  return (
    <div className="widget-content">
      <div className="tabs-box">
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>Service Categories</h6>

            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals"> All Services: {jobCatContent.length}</Tab>
              <Tab className="tab-btn approved"> Popular: {jobCatContent.filter(cat => cat.jobNumber > 50).length}</Tab>
              <Tab className="tab-btn rejected"> Featured: {jobCatContent.filter(cat => cat.featured).length}</Tab>
            </TabList>
          </div>

          <div className="tabs-content">
            <TabPanel>
              <div className="row">
              {jobCatContent.map((item) => (
                      <div
                        className="category-block col-lg-4 col-md-6 col-sm-12"
                        key={item.id}
                      >
                        <div className="inner-box">
                          <div className="content">
                            <span className={`icon ${item.icon}`}></span>
                            <h4>
                              <Link href="/candidates">{item.catTitle}</Link>
                            </h4>
                            <p>{item.jobDescription}</p>
                            <p className="mt-2">
                              <strong>({item.jobNumber} open positions)</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
export default WidgetContentBox;