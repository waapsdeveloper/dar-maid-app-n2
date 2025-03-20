import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v14";

export const metadata = {
  title: "Job List V14 || DarMaid - Job Board",
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
