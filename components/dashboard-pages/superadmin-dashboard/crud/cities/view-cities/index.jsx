import MobileMenu from "../../../../../header/MobileMenu";
import DashboardHeader from "../../../../../header/DashboardHeader";
import LoginPopup from "@/globals/login/LoginPopup";
import BreadCrumb from "../../../../BreadCrumb";
import MyProfile from "./components/my-profile";
import CopyrightFooter from "../../../../CopyrightFooter";
import DashboardSuperAdminSidebar from "../../../../../header/DashboardSuperAdminSidebar";
import MenuToggler from "../../../../MenuToggler";

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

      <DashboardSuperAdminSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="View Citities!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>View Citities</h4>
                  </div>
                  <MyProfile />
                </div>
              </div>
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
