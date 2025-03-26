import dynamic from "next/dynamic";

import About from "@/components/pages-menu/about";

export const metadata = {
  title: 'About',
  description:
    'Domesta  - Listing Board',
  
}



const index = () => {
  return (
    <>
      
      <About />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
