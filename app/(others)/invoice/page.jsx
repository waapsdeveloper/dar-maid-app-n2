import dynamic from "next/dynamic";

import Invoice from "@/components/pages-menu/invoice";

export const metadata = {
  title: 'Invoice || Domesta  - Listing Board',
  description:
    'Domesta  - Listing Board',
  
}



const index = () => {
  return (
    <>
      
      <Invoice />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
