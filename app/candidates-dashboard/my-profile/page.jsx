import dynamic from "next/dynamic";
import MyProfile from "@/components/dashboard-pages/candidates-dashboard/my-profile";

export const metadata = {
  title: "My Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
