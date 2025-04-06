import LoginPopup from "@/components/common/form/login/LoginPopup";
import Pagination from "./components/pagination";
import DashboardHeader from "@/components/header/DashboardHeader";
import MobileMenu from "@/components/header/MobileMenu";
import DashboardSuperAdminSidebar from "@/components/header/DashboardSuperAdminSidebar";
import BreadCrumb from "@/components/dashboard-pages/BreadCrumb";
import MenuToggler from "@/components/dashboard-pages/MenuToggler";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";

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
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="All Services!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Services</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}
      <Pagination />

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
  );
  // End page-wrapper
};

export default index;
