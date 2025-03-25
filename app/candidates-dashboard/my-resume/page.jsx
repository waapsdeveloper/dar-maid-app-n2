import dynamic from "next/dynamic";
import MyResume from "@/components/dashboard-pages/candidates-dashboard/my-resume";

export const metadata = {
  title: "My Resume || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <MyResume />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
