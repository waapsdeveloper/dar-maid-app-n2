import dynamic from "next/dynamic";

export const metadata = {
  title: "Employers Profile || Superio - Job Board React NextJS Template",
  description: "Superio - Job Board React NextJS Template",
};

const EmployersSingleV3 = dynamic(() => import("./EmployersSingleV3"), {
  ssr: false,
});

export default function Page({ params }) {
  return <EmployersSingleV3 params={params} />;
}