import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/candidates-dashboard/packages";

export const metadata = {
  title: "Packages || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
