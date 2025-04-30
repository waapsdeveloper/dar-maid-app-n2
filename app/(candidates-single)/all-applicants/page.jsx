import dynamic from "next/dynamic";
import AllApplicants from "../../../components/dashboard-pages/employers-dashboard/all-applicants";

export const metadata = {
  title: 'All Applicants || Domesta - Listing Board',
  description:
    'Domesta - Listing Board',
  
}



const index = () => {
  return (
    <>

      <AllApplicants />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
