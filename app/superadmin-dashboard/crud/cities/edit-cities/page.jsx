import dynamic from "next/dynamic";
import EditCities from "@/components/dashboard-pages/superadmin-dashboard/crud/cities/edit-cities";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <EditCities />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
