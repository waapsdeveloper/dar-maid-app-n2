import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import Applicants from "./components/Applicants";
import DsPageOuter from "@/templates/layouts/ds-page-outer";

const DashboardPage = () => {
  return (
    <DsPageOuter
      headerType={"superadmin"}
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
              <h4>Recent Applicants</h4>
            </div>
            <div className="widget-content">
              <div className="row">
                <Applicants />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DsPageOuter>
  );
};

export default DashboardPage;
