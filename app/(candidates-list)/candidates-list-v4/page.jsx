import dynamic from "next/dynamic";

import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v4";

export const metadata = {
  title: 'Candidates List V4 || Domesta  - Job Board',
  description:
    'Domesta  - Job Board',
  
}


const index = () => {
  return (
    <>
      
      <CandidatesList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
