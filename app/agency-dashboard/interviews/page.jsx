import dynamic from "next/dynamic";
import Interviews from "@/components/dashboard-pages/agency-dashboard/interviews";

export const metadata = {
  title: "All Applicants || Domesta  - Job Board",
  description: "Domesta  - Job Board",
};

const index = () => {
  return (
    <>
      <Interviews />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
