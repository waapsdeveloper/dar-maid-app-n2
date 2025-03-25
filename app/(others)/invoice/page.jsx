import dynamic from "next/dynamic";

import Invoice from "@/components/pages-menu/invoice";

export const metadata = {
  title: 'Invoice || Domesta  - Job Board',
  description:
    'Domesta  - Job Board',
  
}



const index = () => {
  return (
    <>
      
      <Invoice />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
