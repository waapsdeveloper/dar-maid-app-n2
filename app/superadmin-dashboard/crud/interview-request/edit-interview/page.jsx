import dynamic from "next/dynamic";
import EditRequest from "@/components/dashboard-pages/superadmin-dashboard/crud/interview-request/edit-interview-request";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <EditRequest />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
