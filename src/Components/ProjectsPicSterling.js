import React from "react";
import "../Styles/ProjectsPic.css";
import "../Styles/ProjectsPictures.css";
import ProjectHomeImageOne from "../Components/Assets/LandingPage/LandingPage3.jpg";
import SterlingBankProject1 from "../Components/Assets/SterlingBank/SB1.webp";
import SterlingBankProject2 from "../Components/Assets/SterlingBank/SB2.webp";
import SterlingBankProject3 from "../Components/Assets/SterlingBank/SB3.webp";
import SterlingBankProject4 from "../Components/Assets/SterlingBank/SB4.webp";
import SterlingBankProject5 from "../Components/Assets/SterlingBank/STB1.jpg";
import SterlingBankProject6 from "../Components/Assets/SterlingBank/STB2.jpg";
import SterlingBankProject7 from "../Components/Assets/SterlingBank/STB3.jpg";
import SterlingBankProject8 from "../Components/Assets/SterlingBank/STB4.jpg";
import SterlingBankProject9 from "../Components/Assets/SterlingBank/STB5.jpg";
import SterlingBankProject10 from "../Components/Assets/SterlingBank/STB6.jpg";
import SterlingBankProject11 from "../Components/Assets/SterlingBank/STB7.jpg";

const ProjectsPicSterling = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">STERLING BANK</h1>
            <p className="textOfImage">DESING AND BUILD</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> PROPOSED RENOVATION FOR STERLING BANK HEAD
            OFFICE, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>16-STOREY BUILDING
          </p>
          <p className="aboutProject">
            <span>STATUS: </span> COMPLETED
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy & Installation services
            for the renovation works at the head office of sterling bank. The
            architectural design was carefully studied and state of the art and
            modern applications in the MEP industry was utilized for the design
            of the building. The plumbing services recommended for the building
            utlizes the top range obatainable in the industry, Electrical system
            put into consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards.
          </p>
        </div>

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject1}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject2}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject3}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject4}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject5}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject6}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject7}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject8}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject9}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject10}
              className="projPicImageOf"
            />
          </div>
          <div className="divProjectImagesOf">
            <img
              alt="HeroImg"
              src={SterlingBankProject11}
              className="projPicImageOf"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicSterling;
