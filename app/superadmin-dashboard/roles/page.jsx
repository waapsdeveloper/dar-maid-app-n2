import dynamic from "next/dynamic";
import Roles from "@/components/dashboard-pages/superadmin-dashboard/roles";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Roles />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
