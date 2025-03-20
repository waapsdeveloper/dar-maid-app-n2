import dynamic from "next/dynamic";

import About from "@/components/pages-menu/about";

export const metadata = {
  title: 'About || DarMaid - Job Board',
  description:
    'DarMaid - Job Board',
  
}



const index = () => {
  return (
    <>
      
      <About />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
