import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/agency-dashboard/dashboard";

export const metadata = {
  title: "Candidates Dashboard || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
