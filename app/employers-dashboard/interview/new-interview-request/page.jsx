import dynamic from "next/dynamic";
import AddInterview from "@/components/dashboard-pages/employers-dashboard/interview/forms/add-interview";

export const metadata = {
  title: "All Applicants || Domesta - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddInterview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });