import dynamic from "next/dynamic";
import Agencies from "@/components/dashboard-pages/superadmin-dashboard/agencies";

export const metadata = {
  title: "All Agencies || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Agencies />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
