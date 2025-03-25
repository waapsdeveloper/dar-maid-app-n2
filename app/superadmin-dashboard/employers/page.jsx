import dynamic from "next/dynamic";
import Employers from "@/components/dashboard-pages/superadmin-dashboard/employers";

export const metadata = {
  title: "All Employers || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Employers />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
