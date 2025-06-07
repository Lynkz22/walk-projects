import React from "react";
import "../Styles/ProjectsPictures.css";
import { Link } from "react-router-dom";
import ProjectHomeImageOne from "../Components/Assets/LandingPage/LandingPage3.jpg";
import SterlingBankProject from "../Components/Assets/SterlingBank/SB1.webp";
import GarnetProject from "../Components/Assets/GarnetProject/GP1.webp";
import MeridianTowers from "../Components/Assets/MeridianTowers/MT1.webp";
import TrinityTowers from "../Components/Assets/TrinityTowers/TT.jpeg";
import Parks1 from "../Components/Assets/Parks1/PK1.webp";
import K1 from "../Components/Assets/K21/K1.jpg";
import Parks2 from "../Components/Assets/Parks2/PT1.jpg";

const ProjectsPictures = () => {
  return (
    <>
      <section className="sectionProjectPictures">
        <Link to="/">
          <div className="divProjectImages">
            <img
              alt="HeroImg"
              src={SterlingBankProject}
              className="projectImages"
            />
            <p className="textProjectName">Sterling Bank</p>
          </div>
        </Link>
        <Link to="/">
          <div className="divProjectImages">
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="projectImages"
            />
            <p className="textProjectName">Chief Obinna</p>
          </div>
        </Link>

        <Link to="/">
          <div className="divProjectImages">
            <img alt="HeroImg" src={GarnetProject} className="projectImages" />
            <p className="textProjectName">Garnet</p>
          </div>
        </Link>

        <Link to="/">
          <div className="divProjectImages">
            <img alt="HeroImg" src={MeridianTowers} className="projectImages" />
            <p className="textProjectName">Meridian Towers</p>
          </div>
        </Link>

        <Link to="/">
          <div className="divProjectImages">
            <img alt="HeroImg" src={TrinityTowers} className="projectImages" />
            <p className="textProjectName">Trinity Towers</p>
          </div>
        </Link>

        <Link to="/">
          <div className="divProjectImages">
            <img alt="HeroImg" src={K1} className="projectImages" />
            <p className="textProjectName">K21 Banana</p>
          </div>
        </Link>

        <Link to="/">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Parks1} className="projectImages" />
            <p className="textProjectName">Parks 1</p>
          </div>
        </Link>

        <Link to="/">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Parks2} className="projectImages" />
            <p className="textProjectName">Parks 2</p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default ProjectsPictures;
