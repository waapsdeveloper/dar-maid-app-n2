import dynamic from "next/dynamic";

import Faq from "@/components/pages-menu/faq";

export const metadata = {
  title: 'Faq ',
  description:
    'Domesta  - Job Board',
  
}



const index = () => {
  return (
    <>
      
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
