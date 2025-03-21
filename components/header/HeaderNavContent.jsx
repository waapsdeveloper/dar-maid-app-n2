"use client";

import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* Home */}
          <li
            className={`${
              isActiveParent(homeItems, usePathname()) ? "current" : ""
            }`}
          >
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>

          {/* Employers */}
          <li
            className={`${
              isActiveParent(employerItems, usePathname()) ||
              usePathname()?.split("/")[1] === "employers"
                ? "current"
                : ""
            }`}
          >
            <Link href="employers">
              <span>Employers</span>
            </Link>
          </li>

          {/* Candidates */}
          <li
            className={`${
              isActiveParent(candidateItems, usePathname()) ||
              usePathname()?.split("/")[1] === "candidates"
                ? "current"
                : ""
            }`}
          >
            <Link href="/candidates">
              <span>Candidates</span>
            </Link>
          </li>

          {/* Agency */}
          <li
            className={`${
              isActiveParent(candidateItems, usePathname()) ||
              usePathname()?.split("/")[1] === "agency"
                ? "current"
                : ""
            }`}
          >
            <Link href="/agency">
              <span>Agency</span>
            </Link>
          </li>

          {/* Direct Page Links - Former "Others" dropdown items */}
          {pageItems.map((item, i) => (
            <li
              className={`${
                isActiveLink(item.routePath, usePathname()) ? "current" : ""
              }`}
              key={i}
            >
              <Link href={item.routePath}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
