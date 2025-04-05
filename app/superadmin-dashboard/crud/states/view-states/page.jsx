import dynamic from "next/dynamic";
import ViewQuery from "@/components/dashboard-pages/superadmin-dashboard/crud/states/view-states";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ViewQuery />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
