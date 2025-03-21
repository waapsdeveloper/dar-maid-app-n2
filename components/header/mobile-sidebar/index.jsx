"use client";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import mobileMenuData from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}

      <Sidebar>
        <Menu>
          {/* {mobileMenuData.map((item) => (
              <SubMenu
                className={
                  isActiveParentChaild(item.items, usePathname())
                    ? "menu-active"
                    : ""
                }
                label={item.label}
                key={item.id}
              >
                {item.items.map((menuItem, i) => (
                  <MenuItem

                  onClick={()=>router.push(menuItem.routePath)}
                    className={
                      isActiveLink(menuItem.routePath, usePathname())
                        ? "menu-active-link"
                        : ""
                    }
                    key={i}
                    // routerLink={<Link href={menuItem.routePath} />}
                  >
                    {menuItem.name}
                  </MenuItem>
                ))}
              </SubMenu>
            ))} */}

          <MenuItem
            onClick={() => router.push("/")}
            className={
              isActiveLink("/", usePathname()) ? "menu-active-link" : ""
            }
            key="home"
          >
            Home
          </MenuItem>

          <MenuItem
            onClick={() => router.push("/employers-list-v2")}
            className={
              isActiveLink("/employers-list-v2", usePathname())
                ? "menu-active-link"
                : ""
            }
            key="employers"
          >
            Employers
          </MenuItem>

          {/* Candidates - Direct Link */}
          <MenuItem
            onClick={() => router.push("/candidates-list-v2")}
            className={
              isActiveLink("/candidates-list-v2", usePathname())
                ? "menu-active-link"
                : ""
            }
            key="candidates"
          >
            Candidates
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/candidates-list-v3")}
            className={
              isActiveLink("/candidates-list-v2", usePathname())
                ? "menu-active-link"
                : ""
            }
            key="candidates"
          >
            Agency
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/about")}
            className={
              isActiveLink("/candidates-list-v2", usePathname())
                ? "menu-active-link"
                : ""
            }
            key="candidates"
          >
            About
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/about")}
            className={
              isActiveLink("/faq", usePathname()) ? "menu-active-link" : ""
            }
            key="candidates"
          >
            FAQ'S
          </MenuItem>

          <MenuItem
            onClick={() => router.push("/about")}
            className={
              isActiveLink("/terms", usePathname()) ? "menu-active-link" : ""
            }
            key="candidates"
          >
            Terms
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/about")}
            className={
              isActiveLink("/contact", usePathname()) ? "menu-active-link" : ""
            }
            key="candidates"
          >
            Contact Us
          </MenuItem>
        </Menu>
      </Sidebar>

      <SidebarFooter />
    </div>
  );
};

export default Index;
