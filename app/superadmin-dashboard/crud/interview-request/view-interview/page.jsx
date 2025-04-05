import dynamic from "next/dynamic";
import ViewRequest from "@/components/dashboard-pages/superadmin-dashboard/crud/interview-request/view-interview-requests";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ViewRequest />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
