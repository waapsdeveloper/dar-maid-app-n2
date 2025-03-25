import dynamic from "next/dynamic";

import RegisterForm from "@/components/pages-menu/register";

export const metadata = {
  title: 'Register || Domesta  - Job Board',
  description:
    'Domesta  - Job Board',
  
}



const index = () => {
  return (
    <>
      
      <RegisterForm />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
