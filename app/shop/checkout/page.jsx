import dynamic from "next/dynamic";
import Checkout from "@/components/shop/checkout";

export const metadata = {
  title: "Checkout || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
