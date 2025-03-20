import dynamic from "next/dynamic";
import Cart from "@/components/shop/cart";

export const metadata = {
  title: "Cart || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
