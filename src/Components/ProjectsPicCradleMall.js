import React from "react";
import "../Styles/ProjectsPic.css";
import CradleMallLandingPic from "../Components/Assets/CradleMall/RM1.webp";
import CradleMall1 from "../Components/Assets/CradleMall/RM1.webp";
import CradleMall2 from "../Components/Assets/CradleMall/RM2.webp";
import CradleMall3 from "../Components/Assets/CradleMall/RM3.webp";
import CradleMall4 from "../Components/Assets/CradleMall/RM4.webp";
import CradleMall5 from "../Components/Assets/CradleMall/RM5.webp";
import CradleMall6 from "../Components/Assets/CradleMall/RM6.webp";
import CradleMall7 from "../Components/Assets/CradleMall/RM7.webp";
import CradleMall8 from "../Components/Assets/CradleMall/RM8.webp";
import CradleMall9 from "../Components/Assets/CradleMall/RM9.webp";
import CradleMall10 from "../Components/Assets/CradleMall/RM11.webp";
import CradleMall11 from "../Components/Assets/CradleMall/RM11.webp";
import CradleMall12 from "../Components/Assets/CradleMall/RM12.webp";
import CradleMall13 from "../Components/Assets/CradleMall/RM13.webp";

const ProjectsPicCradleMall = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={CradleMallLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">CRADLE MALL</h1>
            <p className="textOfImage">CONSULTING</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED MALL DEVELOPMENT PROJECT AT
            ASHERIFA ESTATE, OFF IFE-LAGERE EXPRESSWAY, ILE-IFE, OSUN-STATE.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>
            MULTI UNITS OF SHOPPING COMPLEX AND MALL.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            ONGOING
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy & Installation services
            for a multi units of shopping complex, the architectural design was
            carefully studied and state of the art and modern applications in
            the MEP industry was utilized for the design of the building. <br />
            The plumbing services recommended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards.
          </p>
        </div>

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall9} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall10} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall11} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall12} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={CradleMall13} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicCradleMall;
