import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v3";

export const metadata = {
  title: "Job List V3 || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
