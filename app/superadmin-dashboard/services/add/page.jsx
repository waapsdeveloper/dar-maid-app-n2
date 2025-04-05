import dynamic from "next/dynamic";
import Services from "@/components/dashboard-pages/superadmin-dashboard/services/Forms";

export const metadata = {
  title: "All Agencies || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
