import dynamic from "next/dynamic";
import ShortlistedResumes from "@/components/dashboard-pages/employers-dashboard/shortlisted-resumes";

export const metadata = {
  title: "Shortlisted Resumes || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <ShortlistedResumes />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
