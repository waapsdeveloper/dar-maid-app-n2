import dynamic from "next/dynamic";
import CompanyProfile from "@/components/dashboard-pages/superadmin-dashboard/company-profile";

export const metadata = {
  title: "Company Profile || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <CompanyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
