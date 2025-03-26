import dynamic from "next/dynamic";
import Candidates from "@/components/dashboard-pages/agency-dashboard/candidates";

export const metadata = {
  title: "All Applicants || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <Candidates />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
