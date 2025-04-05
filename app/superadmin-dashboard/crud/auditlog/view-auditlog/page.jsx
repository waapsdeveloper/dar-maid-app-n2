import dynamic from "next/dynamic";
import ViewAuditLog from "@/components/dashboard-pages/superadmin-dashboard/crud/auditlog/view-auditlog";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ViewAuditLog />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
