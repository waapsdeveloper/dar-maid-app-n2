import dynamic from "next/dynamic";

import BlogList from "@/components/blog-meu-pages/blog-list-v3";

export const metadata = {
  title: "Blog List V3 || Domesta - Listing Board",
  description: "Domesta - Listing Board",
};

const index = () => {
  return (
    <>
      <BlogList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
