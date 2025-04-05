import dynamic from "next/dynamic";
import AddEmployer from "@/components/dashboard-pages/superadmin-dashboard/crud/employer/add-employer";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddEmployer />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
