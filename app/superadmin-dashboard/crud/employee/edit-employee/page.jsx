import dynamic from "next/dynamic";
import EditEmployee from "@/components/dashboard-pages/superadmin-dashboard/crud/employee/edit-employee";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <EditEmployee />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
