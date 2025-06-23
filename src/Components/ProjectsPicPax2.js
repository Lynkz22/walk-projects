import React from "react";
import "../Styles/ProjectsPic.css";
import Pax2LandingPic from "../Components/Assets/Parks2/PT1.jpg";
import Pt1 from "../Components/Assets/Parks2/PT1.jpg";
import Pt2 from "../Components/Assets/Parks2/PT2.jpg";
import Pt3 from "../Components/Assets/Parks2/PT3.jpg";
import Pt4 from "../Components/Assets/Parks2/PT4.jpg";
import Pt5 from "../Components/Assets/Parks2/PT5.jpg";

const ProjectsPicPax2 = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={Pax2LandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">PAX II APARTMENTS</h1>
            <p className="textOfImage">CONSULTING</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> PROPOSED RESIDENTIAL DEVELOPMENT AT ITEDO
            ESTATE, LEKKI, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>5 UNITS OF 4BEDROOM DUPLEX & 3 UNIT OF 3
            BEDROOM APARTMENTS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span> COMPLETED
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy Services for a 5 Units of
            4-Bedroom Duplex & 3 Units of 3- Bedroom Apartment on 4-Floors, The
            architectural design was carefully studied and state of the art and
            modern applications in the MEP industry was utilized for the design
            of the building <br />
            The plumbing services recommended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards
          </p>
        </div>

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pt1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pt2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pt3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pt4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pt5} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicPax2;
