import dynamic from "next/dynamic";

import Terms from "@/components/pages-menu/terms";

export const metadata = {
  title: 'Terms ',
  description:
    'Domesta  - Listing Board',
  
}



const index = () => {
  return (
    <>
      
      <Terms />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
