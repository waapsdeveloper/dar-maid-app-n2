import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/candidates-dashboard/messages";

export const metadata = {
  title: "Messages || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
