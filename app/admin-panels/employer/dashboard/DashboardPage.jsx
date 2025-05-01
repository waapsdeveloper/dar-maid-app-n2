import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import Applicants from "./components/Applicants";
import { ProfileTypes } from "@/data/globalKeys";
import DsPageOuter from "@/templates/layouts/ds-page-outer";

const DashboardPage = () => {
  return (
    <DsPageOuter
      headerType={ProfileTypes.EMPLOYER}
      title="Welcome Peter!"
      subtitle="Ready to jump back in?"
    >
      <div className="row">
        <div className="col-xl-7 col-lg-12">
          {/* <!-- Graph widget --> */}
          <div className="graph-widget ls-widget">
            <ProfileChart />
          </div>
          {/* End profile chart */}
        </div>
        {/* End .col */}

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
        {/* End .col */}

        <div className="col-lg-12">
          {/* <!-- applicants Widget --> */}
          <div className="applicants-widget ls-widget">
            <div className="widget-title">
              <h4>Recent Applicants</h4>
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
    </DsPageOuter>

    // End page-wrapper
  );
};

export default DashboardPage;
