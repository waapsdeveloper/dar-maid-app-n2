import dynamic from "next/dynamic";

import Terms from "@/components/pages-menu/terms";

export const metadata = {
  title: 'Terms || DarMaid - Job Board',
  description:
    'DarMaid - Job Board',
  
}



const index = () => {
  return (
    <>
      
      <Terms />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
