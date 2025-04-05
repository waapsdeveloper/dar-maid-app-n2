import dynamic from "next/dynamic";
import AddRequest from "@/components/dashboard-pages/superadmin-dashboard/crud/interview-request/add-interview-request";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddRequest />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
