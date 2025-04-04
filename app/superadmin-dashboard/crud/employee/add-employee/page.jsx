import dynamic from "next/dynamic";
import AddEmployee from "@/components/dashboard-pages/superadmin-dashboard/crud/";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddRoles />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
