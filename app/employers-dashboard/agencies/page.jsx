import dynamic from "next/dynamic";
import Agencies from "@/components/dashboard-pages/employers-dashboard/agencies";

export const metadata = {
  title: "All Agencies || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Agencies />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
