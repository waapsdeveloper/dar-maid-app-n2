import dynamic from "next/dynamic";
import Interview from "@/components/dashboard-pages/employers-dashboard/interview";

export const metadata = {
  title: "All Applicants || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Interview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
