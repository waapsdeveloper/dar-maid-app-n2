import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/employers-dashboard/messages";

export const metadata = {
  title: "Messages || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
