import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import JobApplied from "./components/JobApplied";
import DsPageOuter from "@/templates/layouts/ds-page-outer";

const DashboardPage = () => {
  return (

    <DsPageOuter headerType={'candidate'} title="Welcome John!" subtitle="Ready to jump back in?">
      <div className="row">
        <TopCardBlock />
      </div>
     

     
      {/* End .row profile and notificatins */}
    </DsPageOuter>

  );
};

export default DashboardPage;
