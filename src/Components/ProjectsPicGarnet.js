import React from "react";
import "../Styles/ProjectsPic.css";
import GarnetLandingPic from "../Components/Assets/GarnetProject/GP1.webp";
import Garnet1 from "../Components/Assets/GarnetProject/GP1.webp";
import Garnet2 from "../Components/Assets/GarnetProject/GP2.webp";
import Garnet3 from "../Components/Assets/GarnetProject/GP3.webp";
import Garnet4 from "../Components/Assets/GarnetProject/GP4.webp";
import Garnet5 from "../Components/Assets/GarnetProject/GP5.webp";

const ProjectsPicGarnet = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={GarnetLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">GARNET PROJECTS</h1>
            <p className="textOfImage">CONSULTING</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL DEVELOPMENT PROJECT FOR
            DEMBALLY LIMITED AT BLOCK 69A, PLOT 27, LEKKI PENINSULA SCHEME 1,
            ETI-OSA L.G.A., LAGOS STATE.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>2 BLOCKS OF 4 UNITS SEMI-DETACHED
            4BEDROOM DUPLEXES AND 2 PENT HOUSE APARMENTS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            COMMENCING
          </p>
          <p className="aboutProject">
            {/* We were engaged to provide MEP consultancy & Installation services
            for 2 blocks of 4 units semi-detached duplexes and 2 pent house
            apartments, the architectural design was carefully studied and state
            of the art and modern applications in the MEP industry was utilized
            for the design of the building <br />
            The plumbing services recommended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards. */}
          </p>
        </div>
        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Garnet1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Garnet2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Garnet3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Garnet4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Garnet5} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicGarnet;
