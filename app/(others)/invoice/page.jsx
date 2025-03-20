import dynamic from "next/dynamic";

import Invoice from "@/components/pages-menu/invoice";

export const metadata = {
  title: 'Invoice || DarMaid - Job Board',
  description:
    'DarMaid - Job Board',
  
}



const index = () => {
  return (
    <>
      
      <Invoice />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
