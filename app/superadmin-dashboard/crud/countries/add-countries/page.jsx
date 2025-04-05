import dynamic from "next/dynamic";
import AddQuery from "@/components/dashboard-pages/superadmin-dashboard/crud/countries/add-countries";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddQuery />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
