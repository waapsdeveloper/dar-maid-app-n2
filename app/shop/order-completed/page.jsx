import dynamic from "next/dynamic";
import OrderCompleted from "@/components/shop/order-completed";

export const metadata = {
  title: "Order Completed || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <OrderCompleted />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
