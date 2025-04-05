import dynamic from "next/dynamic";
import EditAuditLog from "@/components/dashboard-pages/superadmin-dashboard/crud/auditlog/edit-auditlog";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <EditAuditLog />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
