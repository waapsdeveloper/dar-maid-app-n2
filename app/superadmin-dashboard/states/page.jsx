import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/superadmin-dashboard/states";

export const metadata = {
  title: "Queries || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
