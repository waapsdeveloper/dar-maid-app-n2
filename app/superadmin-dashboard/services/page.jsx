import dynamic from "next/dynamic";
import Services from "@/components/dashboard-pages/superadmin-dashboard/services";

export const metadata = {
  title: "All Agencies || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
