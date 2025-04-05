import dynamic from "next/dynamic";
import AddWebsite from "@/components/dashboard-pages/superadmin-dashboard/crud/report-statistics/add-report-statistics";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddWebsite/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
