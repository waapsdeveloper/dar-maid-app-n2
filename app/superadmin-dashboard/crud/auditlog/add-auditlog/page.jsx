import dynamic from "next/dynamic";
import AddAuditlog from "@/components/dashboard-pages/superadmin-dashboard/crud/auditlog/add-auditlog";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddAuditlog/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
