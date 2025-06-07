import React from "react";
import "../Styles/AboutLandingPage.css";
import ServicesLandingImage from "../Components/Assets/GarnetProject/GP2.webp";

const ServicesLandingPage = () => {
  return (
    <>
      <section className="sectionAboutLandingPage">
        <div className="divAboutLandingPageImage">
          <img
            alt="HeroImg"
            src={ServicesLandingImage}
            className="homeChooseImage"
          />
        </div>
        <div className="divAboutLandingPageText">
          <h1 className="headingAboutLanding">Our Services</h1>
          <p className="textAboutLanding">
            EXPERT MEP SOLUTIONS, RELIABLY DELIVERED
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicesLandingPage;
