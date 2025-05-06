'use client'

import Link from "next/link";
import ListingShowing from "@/components/ListingShowing";
import employeeProfile from "@/data/employee-profile";
import { useDispatch, useSelector } from "react-redux";
import { 
    addCandidateGender,
    addCategory,
    addKeyword,
    addLocation,
    addPerPage,
    addSort,
    clearExperienceF,
    clearQualificationF, 
} from "../../../features/filter/candidateFilterSlice";
import {
  clearExperience,
  clearQualification,
} from "../../../features/candidate/candidateSlice";
import Image from "next/image";

const FilterTopBox = () => {
  const {
    keyword,
    location,
    category,
    candidateGender,
    experiences,
    qualifications,
    sort,
    perPage,
  } = useSelector((state) => state.candidateFilter) || {};

  const dispatch = useDispatch();

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
      const cleanedProfilePic = candidate.profilePic
        .replace(/^\/images\/candidates\//, '')
        .replace(/^\/images\//, '');
      return `/images/candidates/${cleanedProfilePic}`;
    }
    if (candidate?.keys) {
      const profileImage = findKeyValue(candidate.keys, "profile", "profileImage", "");
      if (profileImage) return `/images/candidates/${profileImage}`;
    }
    return "/images/candidates/default-avatar.png";
  };

  // Filters
  const keywordFilter = (item) => 
    keyword ? item?.name?.toLowerCase().includes(keyword.toLowerCase()) : true;

  const locationFilter = (item) => 
    location ? findKeyValue(item.keys, "contactInformation", "city", "").toLowerCase().includes(location.toLowerCase()) : true;

  const categoryFilter = (item) => 
    category ? findKeyValue(item.keys, "employmentDetails", "employeeCategory", "").toLowerCase() === category.toLowerCase() : true;

  const genderFilter = (item) => 
    candidateGender ? findKeyValue(item.keys, "profile", "gender", "").toLowerCase() === candidateGender.toLowerCase() : true;

  const experienceFilter = (item) => 
    experiences?.length ? experiences.includes(findKeyValue(item.keys, "employmentDetails", "experience", "").toLowerCase().replace(" ", "-")) : true;

  const qualificationFilter = (item) => 
    qualifications?.length ? qualifications.some((q) => findKeyValue(item.keys, "employmentDetails", "skills", "").toLowerCase().includes(q.toLowerCase())) : true;

  const sortFilter = (a, b) => sort === "des" ? b.id - a.id : a.id - a.id;

  const content = employeeProfile
    ?.slice(perPage?.start || 0, perPage?.end || 10)
    ?.filter(keywordFilter)
    ?.filter(locationFilter)
    ?.filter(categoryFilter)
    ?.filter(genderFilter)
    ?.filter(experienceFilter)
    ?.filter(qualificationFilter)
    ?.sort(sortFilter)
    ?.map((candidate) => (
      <div className="candidate-block-three" key={candidate.id}>
        <div className="inner-box">
          <div className="content">
            <figure className="image">
              <Image
                width={90}
                height={90}
                src={getImageSrc(candidate)}
                alt={candidate.name || "Candidate"}
                onError={(e) => { e.target.src = "/images/profession.jpeg"; }}
              />
            </figure>
            <h4 className="name">
              <Link href={`/website/employees/profile/${candidate.id}`}>
                {candidate.name}
              </Link>
            </h4>
            <ul className="candidate-info">
              <li className="designation">
                {findKeyValue(candidate.keys, "profile", "role", "N/A")}
              </li>
              <li>
                <span className="icon flaticon-map-locator"></span>
                {findKeyValue(candidate.keys, "contactInformation", "city", "Unknown")}
              </li>
              <li>
                <span className="icon flaticon-money"></span> $
                {findKeyValue(candidate.keys, "employmentDetails", "salary", "0")} / hour
              </li>
            </ul>
            <ul className="post-tags">
              {findKeyValue(candidate.keys, "employmentDetails", "skills", "No Skills")
                .split(", ")
                .map((val, i) => (
                  <li key={i}><a href="#">{val}</a></li>
                ))}
            </ul>
          </div>
          <div className="btn-box">
            <button className="bookmark-btn me-2">
              <span className="flaticon-bookmark"></span>
            </button>
            <Link
              href={`/website/employees/profile/${candidate.id}`}
              className="theme-btn btn-style-three"
            >
              <span className="btn-title">View Profile</span>
            </Link>
          </div>
        </div>
      </div>
    ));

  const sortHandler = (e) => dispatch(addSort(e.target.value));
  const perPageHandler = (e) => dispatch(addPerPage(JSON.parse(e.target.value)));
  const clearHandler = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addCategory(""));
    dispatch(addCandidateGender(""));
    dispatch(clearExperienceF());
    dispatch(clearExperience());
    dispatch(clearQualification());
    dispatch(clearQualificationF());
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };

  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="show-1023">
            <button
              type="button"
              className="theme-btn toggle-filters"
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> Filter
            </button>
          </div>
          <div className="text">
            <strong>{content?.length || 0}</strong> jobs
          </div>
        </div>
        <div className="sort-by">
          {(keyword || location || category || candidateGender || experiences?.length || qualifications?.length || sort || perPage?.start !== 0 || perPage?.end !== 0) && (
            <button
              className="btn btn-danger text-nowrap me-2"
              style={{ minHeight: "45px", marginBottom: "15px" }}
              onClick={clearHandler}
            >
              Clear All
            </button>
          )}
          <select
            onChange={sortHandler}
            className="chosen-single form-select"
            value={sort || ""}
          >
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>
          <select
            className="chosen-single form-select ms-3"
            onChange={perPageHandler}
            value={JSON.stringify(perPage || { start: 0, end: 0 })}
          >
            <option value={JSON.stringify({ start: 0, end: 0 })}>All</option>
            <option value={JSON.stringify({ start: 0, end: 15 })}>15 per page</option>
            <option value={JSON.stringify({ start: 0, end: 20 })}>20 per page</option>
            <option value={JSON.stringify({ start: 0, end: 25 })}>25 per page</option>
          </select>
        </div>
      </div>
      {content?.length ? content : <div>No candidates found. Check data or clear filters.</div>}
      <ListingShowing />
    </>
  );
};

export default FilterTopBox;