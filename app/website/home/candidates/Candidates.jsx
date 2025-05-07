'use client'

import Link from "next/link";
import Slider from "react-slick";
import employeeProfile from "@/data/employee-profile";
import Image from "next/image";

const Candidates = () => {
  const settings = {
    dots: true,
    speed: 1400,
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

  // Ensure employeeProfile is an array, fallback to empty array if not
  const candidates = Array.isArray(employeeProfile) ? employeeProfile : [];

  // Helper to extract nested key values
  const findKeyValue = (keys, keyName, field, fallback = "") => {
    try {
      const keyObj = keys?.find((k) => k.key === keyName);
      const fieldObj = keyObj?.value?.find((v) => v.key === field);
      return fieldObj?.value || fallback;
    } catch (error) {
      return fallback;
    }
  };

  // Helper to determine image source
  const getImageSrc = (candidate) => {
    if (candidate?.profilePic) {
      return candidate.profilePic;
    }
    if (candidate?.keys) {
      const profileImage = findKeyValue(candidate.keys, "profile", "profileImage", "");
      if (profileImage) return `/images/${profileImage}`;
    }
    return "/images/profession.jpeg";
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {candidates.slice(0, 12).map((candidate) => (
          <div className="candidate-block" key={candidate.id}>
            <div className="inner-box">
              <figure className="image">
                <Image
                  width={90}
                  height={90}
                  src={getImageSrc(candidate)}
                  alt={candidate.name || "Candidate"}
                  onError={(e) => { e.target.src = "/images/candidates/default-avatar.png"; }}
                />
              </figure>
              <h4 className="name">{candidate.name || "Unnamed Candidate"}</h4>
              <span className="designation">
                {findKeyValue(candidate.keys, "profile", "role", "N/A")}
              </span>
              <div className="location">
                <i className="flaticon-map-locator"></i> 
                {findKeyValue(candidate.keys, "contactInformation", "city", "Unknown")}
              </div>
              <Link
                href={`/website/employees/profile/${candidate.id}`}
                className="theme-btn btn-style-three"
              >
                <span className="btn-title">View Profile</span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Candidates;