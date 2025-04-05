import dynamic from "next/dynamic";
import ViewRoles from "@/components/dashboard-pages/superadmin-dashboard/crud/roles/view-roles";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ViewRoles />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
