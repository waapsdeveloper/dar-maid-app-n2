import dynamic from "next/dynamic";
import EditWebsite from "@/components/dashboard-pages/superadmin-dashboard/crud/report-statistics/edit-report-statistics";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <EditWebsite />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
