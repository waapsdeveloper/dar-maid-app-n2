import dynamic from "next/dynamic";
import AuditLog from "@/components/dashboard-pages/superadmin-dashboard/auditlog";

export const metadata = {
  title: "Queries || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <AuditLog />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
