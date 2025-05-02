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
     
    </DsPageOuter>
  );
};

export default DashboardPage;
