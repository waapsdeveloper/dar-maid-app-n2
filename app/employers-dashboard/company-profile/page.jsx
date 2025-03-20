import dynamic from "next/dynamic";
import CompanyProfile from "@/components/dashboard-pages/employers-dashboard/company-profile";

export const metadata = {
  title: "Company Profile || DarMaid - Job Board",
  description: "DarMaid - Job Board",
};

const index = () => {
  return (
    <>
      <CompanyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
