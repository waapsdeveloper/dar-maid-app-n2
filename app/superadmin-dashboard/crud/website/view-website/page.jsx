import dynamic from "next/dynamic";
import ViewWebsite from "@/components/dashboard-pages/superadmin-dashboard/crud/website/view-website";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ViewWebsite />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
