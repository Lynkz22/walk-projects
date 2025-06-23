import React from "react";
import "../Styles/ProjectsPic.css";
import OmoleLandingPicture from "../Components/Assets/4PointOmole/4PO2.webp";
import Omole1 from "../Components/Assets/4PointOmole/4PO1.webp";
import Omole2 from "../Components/Assets/4PointOmole/4PO2.webp";

const ProjectsPic4PointOmole = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={OmoleLandingPicture}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">4 POINT OMOLE</h1>
            <p className="textOfImage">DESIGN AND BUILD</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL AND OFFICE DEVELOPMENT
            FOR 4POINT REAL ESTATE DEVELOPMENT COMPANY AT OMOLE PHASE 2 ESTATE,
            LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>2 UNITS OF SEMI DETACHED 4-BEDROOM DUPLEX
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
            <img alt="HeroImg" src={Omole1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Omole2} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPic4PointOmole;
