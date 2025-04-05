import dynamic from "next/dynamic";
import EditAgency from "@/components/dashboard-pages/superadmin-dashboard/crud/agency/edit-agency";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <EditAgency />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
