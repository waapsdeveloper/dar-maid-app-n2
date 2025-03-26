import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v12";

export const metadata = {
  title: "Job List V12 || Domesta  - Listing Board",
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
