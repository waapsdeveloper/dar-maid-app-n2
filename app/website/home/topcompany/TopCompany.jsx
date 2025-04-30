'use client'

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import topCompany from "../../data/topCompany";

const TopCompany = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Ensure topCompany is an array, fallback to empty array if not
  const companies = Array.isArray(topCompany) ? topCompany : [];

  return (
    <Slider {...settings} arrows={false}>
      {companies.slice(0, 12).map((company) => (
        <div className="company-block" key={company.id}>
          <div className="inner-box">
            <figure className="image">
              <Image
                width={90}
                height={90}
                src={company.img}
                alt="top company"
              />
            </figure>
            <h4 className="name">
              <Link href={`/employers-single-v1/${company.id}`}>
                {company.name}
              </Link>
            </h4>
            <div className="location">
              <i className="flaticon-map-locator"></i> {company.location}
            </div>
            <Link
              href={`/employers-single-v1/${company.id}`}
              className="theme-btn btn-style-three"
            >
              {company.jobNumber} Open Position
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TopCompany;