import dynamic from "next/dynamic";

import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v1";

export const metadata = {
  title: 'Candidates List V1 || Domesta - Listing Board',
  description:
    'Domesta - Listing Board',
  
}


const index = () => {
  return (
    <>
      
      <CandidatesList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
