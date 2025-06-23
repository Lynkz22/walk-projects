import React from "react";
import "../Styles/AboutLandingPage.css";
import ProjectHomeImageOne from "../Components/Assets/MeridianTowers/MT3.jpg";

const ContactLandingPage = () => {
  return (
    <>
      <section className="sectionAboutLandingPage">
        <div className="divAboutLandingPageImage">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="homeChooseImage"
          />
        </div>
        <div className="divAboutLandingPageText">
          <h1 className="headingAboutLanding">CONTACT US</h1>
          <p className="textAboutLanding">WE'D LOVE TO HEAR FROM YOU</p>
        </div>
      </section>
    </>
  );
};

export default ContactLandingPage;
