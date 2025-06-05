import React from "react";
import "../Styles/ProjectsPictures.css";
import ProjectHomeImageOne from "../Components/Assets/LandingPage/LandingPage3.jpg";

const ProjectsPictures = () => {
  return (
    <>
      <section className="sectionProjectPictures">
        <div className="divProjectImages">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="projectImages"
          />
        </div>
        <div className="divProjectImages">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="projectImages"
          />
        </div>
        <div className="divProjectImages">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="projectImages"
          />
        </div>
        <div className="divProjectImages">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="projectImages"
          />
        </div>
        <div className="divProjectImages">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="projectImages"
          />
        </div>
        <div className="divProjectImages">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="projectImages"
          />
        </div>
      </section>
    </>
  );
};

export default ProjectsPictures;
