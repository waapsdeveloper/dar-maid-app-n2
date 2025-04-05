import dynamic from "next/dynamic";
import EditQuery from "@/components/dashboard-pages/superadmin-dashboard/crud/states/edit-states";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <EditQuery />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
