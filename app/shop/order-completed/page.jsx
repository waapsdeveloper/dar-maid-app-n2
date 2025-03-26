import dynamic from "next/dynamic";
import OrderCompleted from "@/components/shop/order-completed";

export const metadata = {
  title: "Order Completed || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <OrderCompleted />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
