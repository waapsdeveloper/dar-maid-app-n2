'use client'

import dynamic from "next/dynamic";

const EmployersSingleV3 = dynamic(() => import("./EmployersSingleV3"), {
  ssr: false,
});

export default function Page({ params }) {
  return <EmployersSingleV3 params={params} />;
}