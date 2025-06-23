import React from "react";
import "../Styles/ProjectsPic.css";
import KosofeLandingPicture from "../Components/Assets/4PointKosofe/4PK1.webp";
import Kosofe1 from "../Components/Assets/4PointKosofe/4PK1.webp";
import Kosofe2 from "../Components/Assets/4PointKosofe/4PK2.webp";
import Kosofe3 from "../Components/Assets/4PointKosofe/4PK3.webp";

const ProjectsPic4PointKosofe = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={KosofeLandingPicture}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">4POINT KOSOFE</h1>
            <p className="textOfImage">DESIGN AND BUILD</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL DEVELOPMENT FOR 4POINT
            REAL ESTATE DEVELOPMENT COMPANY AT MEDINA ESTATE, GBAGADA, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>8 UNITS OF 4 BEDROOM APARTMENTS COMPLEX
            ON 3 FLOORS
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
            <img alt="HeroImg" src={Kosofe1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Kosofe2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Kosofe3} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPic4PointKosofe;
