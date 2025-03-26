import dynamic from "next/dynamic";
import Checkout from "@/components/shop/checkout";

export const metadata = {
  title: "Checkout || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
