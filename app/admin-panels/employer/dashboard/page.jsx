import dynamic from "next/dynamic";
import DashboardPage from "./DashboardPage";

export const metadata = {
  title: "Change Password || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <DashboardPage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
