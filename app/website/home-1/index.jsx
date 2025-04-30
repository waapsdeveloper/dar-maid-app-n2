import Link from "next/link";
import About from "../../../components/about/About";
import AppSection from "../../../components/app-section/AppSection";
import Blog from "../../../components/blog/Blog";
import CallToAction from "../../../components/call-to-action/CallToAction";
import Partner from "../../../components/common/partner/Partner";
import FooterDefault from "../../../components/footer/common-footer";
import Funfact from "../../../components/fun-fact-counter/Funfact";
import DefaulHeader2 from "../../../components/header/DefaulHeader2";
import MobileMenu from "../../../globals/header/MobileMenu";
import Hero1 from "../../../components/hero/hero-1";
import JobCategorie1 from "../job-categories/JobCategorie1";
import JobFeatured1 from "../job-featured/JobFeatured1";
import Testimonial from "../../../components/testimonial/Testimonial";
import About2 from "../../../components/about/About2";
import TopCompany from "../../../components/top-company/TopCompany";
import Candidates from "../../../components/candidates/Candidates";
import LoginPopup from "@/globals/login/LoginPopup";


const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero1 />
      {/* End Hero Section */}

      <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Employees Categories</h2>
            <div className="text">2025 Listings - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      {/* <section className="job-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>

          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list-v1"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section> */}

       <section className="top-companies">
       <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Top Rated Employers</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
        
          </div>
                <div className="carousel-outer" data-aos="fade-up">
                  <div className="companies-carousel">
                    <TopCompany />
                  </div>
                </div>
              </div>
            </section>



            <section className="job-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Top Rated Agency</h2>
            <div className="text">
              Know your worth and find the Agency that qualify your life
            </div>
          </div>

          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list-v1"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Job Featured Section */}

      {/* <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">          
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section> */}


      <section className="candidates-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent Registered Employee</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="candidates-carousel default-dots">
              <Candidates />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

   
      <section className="about-section-two">
        <div className="auto-container">
          <div className="row">
            <About2 />
          </div>
        </div>
      </section>
      <FooterDefault />

    </>
  );
};

export default index;
