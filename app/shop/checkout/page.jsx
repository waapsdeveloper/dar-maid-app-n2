import dynamic from "next/dynamic";
import Checkout from "@/components/shop/checkout";

export const metadata = {
  title: "Checkout || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
