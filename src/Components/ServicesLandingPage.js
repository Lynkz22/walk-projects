import React from "react";
import "../Styles/AboutLandingPage.css";
import ProjectHomeImageOne from "../Components/Assets/LandingPage/LandingPage3.jpg";

const ServicesLandingPage = () => {
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
          <h1 className="headingAboutLanding">Our Services</h1>
          {/* <p className="textAboutLanding"> WELCOME TO WALK PROJECTS</p> */}
        </div>
      </section>
    </>
  );
};

export default ServicesLandingPage;
