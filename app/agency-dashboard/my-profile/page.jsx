import dynamic from "next/dynamic";
import MyProfile from "@/components/dashboard-pages/candidates-dashboard/my-profile";

export const metadata = {
  title: "My Profile || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
