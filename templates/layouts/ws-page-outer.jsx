import React from "react";
import PropTypes from "prop-types";
import LoginPopup from "@/globals/login/LoginPopup";
import MobileMenu from "@/globals/header/MobileMenu";
import DsPageTitle from "../misc/ds-page-titles";
import MenuToggler from "@/components/dashboard-pages/MenuToggler";
import DefaulHeader2 from "../../../components/header/DefaulHeader2";
import Hero1 from "../../components/hero/hero-1";
import FooterDefault from "../../../components/footer/common-footer";

const WsPageOuter = ({ headerType, title, subtitle, children }) => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      <LoginPopup />
      <DefaulHeader2 />
      <MobileMenu />
      <Hero1 />
      <section className="user-dashboard">
        <div className="dashboard-outer" style={{ padding: "1rem" }}>
          <DsPageTitle title={title} subtitle={subtitle} />
          <MenuToggler style={{ marginBottom: "0" }} />

          {/* Content Yield */}
          {children}
        </div>
      </section>

      <FooterDefault />
    </div>
  );
};

DsPageOuter.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

DsPageOuter.defaultProps = {
  subtitle: "",
};

export default WsPageOuter;
