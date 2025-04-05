import dynamic from "next/dynamic";
import AddEmployee from "@/components/dashboard-pages/superadmin-dashboard/crud/employee/add-employee";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddEmployee />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
