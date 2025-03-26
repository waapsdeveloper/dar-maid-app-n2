import dynamic from "next/dynamic";
import InterviewRequests from "@/components/dashboard-pages/superadmin-dashboard/interview-requests";

export const metadata = {
  title: "Queries || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <InterviewRequests />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
