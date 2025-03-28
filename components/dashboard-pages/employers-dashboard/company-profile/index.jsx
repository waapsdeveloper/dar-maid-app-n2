import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import JobPreference from "./components/JobPreference";
import InterviewManagement from "./components/InterviewManagement";
import DocumentVerification from "./components/DocumentVerification";
const index = () => {
    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>
            {/* <!-- Header Span for hight --> */}

            <LoginPopup />
            {/* End Login Popup Modal */}

            <DashboardHeader />
            {/* End Header */}

            <MobileMenu />
            {/* End MobileMenu */}

            <DashboardEmployerSidebar />
            {/* <!-- End User Sidebar Menu --> */}

            {/* <!-- Dashboard --> */}
            <section className="user-dashboard">
                <div className="dashboard-outer">
                    <BreadCrumb title="Profile!" />
                    {/* breadCrumb */}

                    <MenuToggler />
                    {/* Collapsible sidebar button */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>My Profile</h4>
                                    </div>
                                    <MyProfile />
                                </div>
                            </div>
                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>Contact Information</h4>
                                    </div>
                                    {/* End .widget-title */}

                                    <div className="widget-content">
                                        <ContactInfoBox />
                                    </div>
                                </div>
                            </div>
                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>Job Preference</h4>
                                    </div>
                                    {/* End .widget-title */}

                                    <div className="widget-content">
                                        <JobPreference />
                                    </div>
                                </div>
                            </div>
                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>Interview Management</h4>
                                    </div>
                                    {/* End .widget-title */}

                                    <div className="widget-content">
                                        <InterviewManagement />
                                    </div>
                                </div>
                            </div>
                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>Document Verification</h4>
                                    </div>
                                    {/* End .widget-title */}

                                    <div className="widget-content">
                                        <DocumentVerification />
                                    </div>
                                </div>
                            </div>
                           
                            {/* <!-- Ls widget --> */}

                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>Social Network</h4>
                                    </div>
                                    {/* End .widget-title */}
                                    <div className="widget-content">
                                        <SocialNetworkBox />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ls widget --> */}

                            {/* <!-- Ls widget --> */}
                        </div>
                    </div>
                    {/* End .row */}
                </div>
                {/* End dashboard-outer */}
            </section>
            {/* <!-- End Dashboard --> */}

            <CopyrightFooter />
            {/* <!-- End Copyright --> */}
        </div>
        // End page-wrapper
    );
};

export default index;
