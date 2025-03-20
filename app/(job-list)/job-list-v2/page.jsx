import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v2";

export const metadata = {
  title: "Job List V2 || DarMaid - Job Board",
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
