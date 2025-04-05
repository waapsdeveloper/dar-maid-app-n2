import dynamic from "next/dynamic";
import AddAgency from "@/components/dashboard-pages/superadmin-dashboard/crud/agency/add-agency";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddAgency />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
