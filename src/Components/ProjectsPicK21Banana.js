import React from "react";
import "../Styles/ProjectsPic.css";
import KbLandingPic from "../Components/Assets/K21/KB1.jpg";
import Kb1 from "../Components/Assets/K21/KB1.jpg";
import Kb2 from "../Components/Assets/K21/KB2.jpg";
import Kb3 from "../Components/Assets/K21/KB3.jpg";

const ProjectsPicK21Banana = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={KbLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">K21 BANANA</h1>
            <p className="textOfImage">CONSULTING</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL DEV. DESIGN PROTOCAL
            LIMITED AT PLOT K15, 401 CLOSE, BANANA ISLAND, IKOYI, ETI-OSA L.G.A,
            LAGOS STATE.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>
            MIXED TYPED RESIDENTIAL BUILDING ON 10 FLOORS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            COMPLETED
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy & Installation services
            for a mixed typed residential building on 10 floors. The
            architectural design was carefully studied and state of the art and
            modern applications in the MEP industry was utilized for the design
            of the building. <br />
            The plumbing services recommended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards.
          </p>
        </div>

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Kb1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Kb2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Kb3} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicK21Banana;
