import dynamic from "next/dynamic";

import BlogList from "@/components/blog-meu-pages/blog-list-v2";

export const metadata = {
  title: 'Blog List V2 || DarMaid - Job Board',
  description:
    'DarMaid - Job Board',
  
}



const index = () => {
  return (
    <>

      <BlogList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });