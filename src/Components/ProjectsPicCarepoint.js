import React from "react";
import "../Styles/ProjectsPic.css";
import CarepointLandingPic from "../Components/Assets/CarepointHospital/CH1.webp";
import Carepoint1 from "../Components/Assets/CarepointHospital/CH1.webp";
import Carepoint2 from "../Components/Assets/CarepointHospital/CH2.webp";
import Carepoint3 from "../Components/Assets/CarepointHospital/CH3.webp";
import Carepoint4 from "../Components/Assets/CarepointHospital/CH4.webp";
import Carepoint5 from "../Components/Assets/CarepointHospital/CH5.webp";
import Carepoint6 from "../Components/Assets/CarepointHospital/CH6.webp";

const ProjectsPicCarepoint = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={CarepointLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">CAREPOINT HOSPITAL</h1>
            <p className="textOfImage">DESIGN AND BUILD</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED HOSPITA DEVELOPMENT FOR AFRICAN
            HEALTH ALLIANCE AT EGBEDA, LAGOS
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>
            60-BED CAPACITY HOSPITAL ON GROUND AND FIRST FLOOR.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            COMPLETED
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
            <img alt="HeroImg" src={Carepoint1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Carepoint2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Carepoint3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Carepoint4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Carepoint5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Carepoint6} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicCarepoint;
