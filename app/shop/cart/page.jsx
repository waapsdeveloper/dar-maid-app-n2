import dynamic from "next/dynamic";
import Cart from "@/components/shop/cart";

export const metadata = {
  title: "Cart || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
