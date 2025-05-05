import Image from "next/image";
import Link from "next/link";
import WsPageOuter from "@/templates/layouts/ws-page-outer";

const About = () => {
  return (
    <WsPageOuter>
     <section className="faqs-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Frequently Asked Questions</h2>
            <div className="text">Home / Faq</div>
          </div>

          <h3>Payments</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box">
            <FaqChild />
          </ul>

          <h3>Suggestions</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box mb-0">
            <FaqChild />
          </ul>
        </div>
      </section>
    </WsPageOuter>
  );
};

export default About;
