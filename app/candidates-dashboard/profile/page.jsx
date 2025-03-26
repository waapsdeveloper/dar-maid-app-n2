import dynamic from "next/dynamic";
import Profile from "@/components/dashboard-pages/candidates-dashboard/profile";

export const metadata = {
  title: "Company Profile || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
