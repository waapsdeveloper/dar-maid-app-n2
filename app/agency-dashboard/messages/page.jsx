import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/candidates-dashboard/messages";

export const metadata = {
  title: "Messages || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
