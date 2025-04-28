import dynamic from "next/dynamic";
import AddWorkExperience from "@/components/dashboard-pages/candidates-dashboard/profile/child-pages/work-experience/add-work-experience";

export const metadata = {
  title: "Company Profile || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <>
      <AddWorkExperience />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
