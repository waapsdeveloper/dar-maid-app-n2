import dynamic from "next/dynamic";
import Website from "@/components/dashboard-pages/superadmin-dashboard/website";

export const metadata = {
  title: "Queries || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Website />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
