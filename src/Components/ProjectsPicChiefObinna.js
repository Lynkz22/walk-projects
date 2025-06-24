import React from "react";
import "../Styles/ProjectsPic.css";
import ChiefObinnaLandingPic from "../Components/Assets/ChiefObinna/CO1.webp";
import ChiefObinna from "../Components/Assets/ChiefObinna/CO1.webp";

const ProjectsPicChiefObinna = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={ChiefObinnaLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">CHIEF OBINNA</h1>
            <p className="textOfImage">CONSULTING</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL DEV. FOR PARTUM LOCUS
            ARCHITECT AT LEKKI PHASE 1, LAGOS STATE.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>5 BEDROOM DUPLEX ON 3 FLOORS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            COMPLETED
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy & Installation services
            for a 5 bedroom duplex on 3-Floors, The architectural design was
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
            <img alt="HeroImg" src={ChiefObinna} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicChiefObinna;
