import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v11";

export const metadata = {
  title: "Job List V11 || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
