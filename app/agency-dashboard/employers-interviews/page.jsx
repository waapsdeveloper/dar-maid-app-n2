import dynamic from "next/dynamic";
import Employers from "@/components/dashboard-pages/agency-dashboard/employers-interviews";

export const metadata = {
  title: "All Employers || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Employers />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
