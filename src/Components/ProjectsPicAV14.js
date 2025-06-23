import React from "react";
import "../Styles/ProjectsPic.css";
import AvLandingPicture from "../Components/Assets/AV14EkoAtlantic/AV3.webp";
import Ave1 from "../Components/Assets/AV14EkoAtlantic/AV1.webp";
import Ave2 from "../Components/Assets/AV14EkoAtlantic/AV2.webp";
import Ave3 from "../Components/Assets/AV14EkoAtlantic/AV3.webp";
import Ave4 from "../Components/Assets/AV14EkoAtlantic/AV4.webp";

const ProjectsPicAV14 = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={AvLandingPicture}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">AV-14 EKO ATLANTIC</h1>
            <p className="textOfImage">CONSULTING</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL DEVELOPMENT FOR
            CLARENCE GATE INVESTMENT COMPANY LIMITED AT PLOT AV-C-14, PHASE 1-3,
            EKO ATLANTIC, VICTORIA ISLAND, LAGOS STATE.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>
            MIXED TYPED RESIDENTIAL BUILDING ON 12 FLOORS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            ONGOING
          </p>
          <p className="aboutProject">
            {/* We were engaged to provide MEP consultancy & Installation services
            for a 12 Units of 4-Bedroom Semi-Detached duplex on 3-Floors, The
            architectural design was carefully studied and state of the art and
            modern applications in the MEP industry was utilized for the design
            of the building <br />
            The plumbing services recommended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards. */}
          </p>
        </div>

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ave1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ave2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ave3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ave4} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicAV14;
