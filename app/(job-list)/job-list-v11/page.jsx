import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v11";

export const metadata = {
  title: "Job List V11 || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
