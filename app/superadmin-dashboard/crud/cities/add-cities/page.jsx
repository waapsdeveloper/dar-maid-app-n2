import dynamic from "next/dynamic";
import AddCities from "@/components/dashboard-pages/superadmin-dashboard/crud/cities/add-cities";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddCities />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
