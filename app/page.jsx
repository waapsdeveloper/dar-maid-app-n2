import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home-1";

export const metadata = {
  title: "DarMaid",
  description: "DarMaid - Job Borad",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
