import dynamic from "next/dynamic";

import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v2";

export const metadata = {
  title: 'Candidates',
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
