import dynamic from "next/dynamic";
import ReportStatistics from "@/components/dashboard-pages/superadmin-dashboard/report-statistics";

export const metadata = {
  title: "Queries || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <ReportStatistics/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
