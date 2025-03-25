import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/superadmin-dashboard/packages";

export const metadata = {
  title: "Queries || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
