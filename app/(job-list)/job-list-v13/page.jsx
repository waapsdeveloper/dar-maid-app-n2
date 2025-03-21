import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v13";

export const metadata = {
  title: "Job List V13 || DarMaid - Job Board",
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
