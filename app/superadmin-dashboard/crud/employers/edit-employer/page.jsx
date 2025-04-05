import dynamic from "next/dynamic";
import EditEmployer from "@/components/dashboard-pages/superadmin-dashboard/crud/employer/edit-employer";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <EditEmployer />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
