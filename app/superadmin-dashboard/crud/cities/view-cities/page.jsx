import dynamic from "next/dynamic";
import ViewCities from "@/components/dashboard-pages/superadmin-dashboard/crud/cities/view-cities";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <ViewCities/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
