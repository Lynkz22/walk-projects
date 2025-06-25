import React from "react";
import "../Styles/HomeFooter.css";
import Logo from "../Components/Assets/Logo/Logo.png";

const HomeFooter = () => {
  return (
    <>
      <section className="sectionHomeFooter">
        <div className="sectionHomeFooterColor"></div>
        <div className="divHomeFooter">
          <img
            className="footerLogoImage"
            alt="Walk Projects Logo"
            src={Logo}
          />
          <p className="FooterText">
            WALK PROJECTS <br />
            INTEGRATED SERVICES CO.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeFooter;
