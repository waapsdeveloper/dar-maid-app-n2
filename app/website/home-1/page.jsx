import dynamic from "next/dynamic";
import Wrapper from "@/layout/Wrapper";

import WebsiteHome from "./WebsiteHome";

export const metadata = {
  title: "Candidates Dashboard || Domesta  - Listing Board",
  description: "Domesta  - Listing Board",
};

const index = () => {
  return (
    <Wrapper>
      <WebsiteHome />
    </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
