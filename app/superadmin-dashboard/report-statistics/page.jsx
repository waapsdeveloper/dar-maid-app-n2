import dynamic from "next/dynamic";
import ReportStatistics from "@/components/dashboard-pages/superadmin-dashboard/report-statistics";

export const metadata = {
  title: "Queries || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ReportStatistics/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
