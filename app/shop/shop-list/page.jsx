import dynamic from "next/dynamic";
import ShopList from "@/components/shop/shop-list";

export const metadata = {
  title: "Shop List || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ShopList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
