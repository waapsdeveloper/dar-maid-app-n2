import Wrapper from "@/layout/Wrapper";
import Home from "@/app/website/home-1";

export const metadata = {
  title: "Domesta ",
  description: "Domesta - Listing Borad",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
