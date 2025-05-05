import dynamic from "next/dynamic";

export const metadata = {
  title: "FAQs || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <About />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
