import dynamic from "next/dynamic";
import AllApplicants from "@/components/dashboard-pages/employers-dashboard/all-applicants";

export const metadata = {
  title: "All Applicants || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <AllApplicants />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
