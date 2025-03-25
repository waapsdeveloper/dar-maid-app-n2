import dynamic from "next/dynamic";

import Pricing from "@/components/pages-menu/pricing";

export const metadata = {
  title: 'Pricing || Domesta  - Job Board',
  description:
    'Domesta  - Job Board',
  
}



const index = () => {
  return (
    <>
      
      <Pricing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
