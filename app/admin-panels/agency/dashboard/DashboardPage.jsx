import JobApplied from "./components/JobApplied";
import CopyrightFooter from "@/globals/footer/CopyrightFooter";
import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import Applicants from "./components/Applicants";
import DsPageOuter from "@/templates/layouts/ds-page-outer";

const DashboardPage = () => {
  return (
    <DsPageOuter
      headerType={"agency"}
      title="Welcome John!"
      subtitle="Ready to jump back in?"
    >
      <div className="row">
        <TopCardBlock />
      </div>

      <div className="row">
        <div className="col-xl-7 col-lg-12">
          {/* <!-- Graph widget --> */}
          <div className="graph-widget ls-widget">
            <ProfileChart />
          </div>
        </div>
        <div className="col-xl-5 col-lg-12">
          {/* <!-- Notification Widget --> */}
          <div className="notification-widget ls-widget">
            <div className="widget-title">
              <h4>Notifications</h4>
            </div>
            <div className="widget-content">
              <Notification />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          {/* <!-- applicants Widget --> */}
          <div className="applicants-widget ls-widget">
            <div className="widget-title">
              <h4>Jobs Applied Recently</h4>
            </div>
            <div className="widget-content">
              <div className="row">
                <JobApplied />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="applicants-widget ls-widget">
            <div className="widget-title">
              <h4>Agency Employees</h4>
            </div>
            <div className="widget-content">
              <div className="row">
                {/* <!-- Candidate block three --> */}

                <Applicants />
              </div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>

      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
    </DsPageOuter>

    // End page-wrapper
  );
};

export default DashboardPage;
