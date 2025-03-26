'use client'

import Link from "next/link";
import superAdminMenu from "../../data/superAdminMenu";
import { isActiveLink } from "../../utils/linkActiveChecker";

import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname } from "next/navigation";
import { logout } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

const DashboardSuperAdminSidebar = () => {

    const { menu } = useSelector((state) => state.toggle);
    const router = useRouter();
    const dispatch = useDispatch();
    // menu togggle handlerw
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };
    
        const handleLogout = () => {
            dispatch(logout()); // ✅ FIXED: Use the existing dispatch
            router.push("/"); // Redirect to home page
        };
    
    console.log("LOADED MENU DATA:", superAdminMenu);
    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
            {/* Start sidebar close icon */}
            <div className="pro-header text-end pb-0 mb-0 show-1023">
                <div className="fix-icon" onClick={menuToggleHandler}>
                    <span className="flaticon-close"></span>
                </div>
            </div>
            {/* End sidebar close icon */}

            <div className="sidebar-inner">
            <ul className="navigation">
                    {superAdminMenu.map((item) => (
                        <li className={`${isActiveLink(item.routePath, usePathname()) ? "active" : ""} mb-1`} key={item.id} onClick={menuToggleHandler} >
                            {item.name === "Logout" ? (
                                <Link href="/" onClick={handleLogout} > 
                                    <i className={`la ${item.icon}`}></i> {item.name}
                                </Link>
                            ) : (
                                <Link href={item.routePath}>
                                    <i className={`la ${item.icon}`}></i>{" "}
                                    {item.name}
                                </Link>
                            )}

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardSuperAdminSidebar;
