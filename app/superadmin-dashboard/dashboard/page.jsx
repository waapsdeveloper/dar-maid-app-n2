import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/superadmin-dashboard/dashboard";

export const metadata = {
  title: "SuperAdmin Dashboard || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
