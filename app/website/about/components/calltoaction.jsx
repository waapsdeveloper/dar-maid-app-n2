import Link from "next/link";

const CallToAction = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Your Dream Listings Are Waiting</h2>
          <div className="text">
            Over 1 million interactions, 50,000 success stories Make yours now.
          </div>
        </div>

        <div className="btn-box">
          <Link href="/website/employees" className="theme-btn btn-style-three">
            Search Listing
          </Link>
          {/* <Link href="/register" className="theme-btn btn-style-two">
            Apply Job Now
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
