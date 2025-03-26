import dynamic from "next/dynamic";
import Interview from "@/components/dashboard-pages/employers-dashboard/interview";

export const metadata = {
  title: "All Applicants || Domesta - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Interview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
