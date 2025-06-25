import React from "react";
import "../Styles/AboutLandingPage.css";
import ProjectHomeImageOne from "../Components/Assets/MeridianTowers/MT13.jpg";

const ProjectsLandingPage = () => {
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
          <h1 className="headingAboutLanding">OUR PROJECTS</h1>
          <p className="textAboutLanding">
            DELIVERING EXCELLENCE, PROJECT BY PROJECT
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectsLandingPage;
