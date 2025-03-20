import dynamic from "next/dynamic";
import MyResume from "@/components/dashboard-pages/candidates-dashboard/my-resume";

export const metadata = {
  title: "My Resume || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <MyResume />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
