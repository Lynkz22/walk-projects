import React from "react";
import "../Styles/ProjectsPic.css";
import OlowooraLandingPicture from "../Components/Assets/4PointOlowoora/4POL1.webp";
import Olowoora1 from "../Components/Assets/4PointOlowoora/4POL1.webp";
import Olowoora2 from "../Components/Assets/4PointOlowoora/4POL2.webp";

const ProjectsPic4PointOlowoora = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={OlowooraLandingPicture}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">4 POINT OLOWOORA</h1>
            <p className="textOfImage">DESIGN AND BUILD</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL FOR 4POINT REAL ESTATE
            DEVELOPMENT COMPANY AT OLOWOORA, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>4 UNITS OF SEMI-DETACHED 4 BEDROOM DUPLEX
            ON 3 FLOORS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            ONGOING
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy & Installation services
            for a 4 Units of Semi-Detached 4-Bedroom duplex on 3-Floors, the
            architectural design was carefully studied and state of the art and
            modern applications in the MEP industry was utilized for the design
            of the building. <br />
            The plumbing services recom.mended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards.
          </p>
        </div>

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Olowoora1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Olowoora2} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPic4PointOlowoora;
