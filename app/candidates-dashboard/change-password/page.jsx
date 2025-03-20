import dynamic from "next/dynamic";
import ChangePassword from "@/components/dashboard-pages/candidates-dashboard/change-password";

export const metadata = {
  title: "Change Password || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
