import dynamic from "next/dynamic";
import JobAlerts from "@/components/dashboard-pages/candidates-dashboard/job-alerts";

export const metadata = {
  title: "My Job Alerts || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <JobAlerts />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
