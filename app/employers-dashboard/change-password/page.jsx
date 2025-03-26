import dynamic from "next/dynamic";
import ChangePassword from "@/components/dashboard-pages/employers-dashboard/change-password";

export const metadata = {
  title: "Change Password || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
