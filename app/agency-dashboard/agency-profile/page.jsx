import dynamic from "next/dynamic";
import AgencyProfile from "@/components/dashboard-pages/agency-dashboard/agency-profile";

export const metadata = {
  title: "Agency Profile || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <AgencyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
