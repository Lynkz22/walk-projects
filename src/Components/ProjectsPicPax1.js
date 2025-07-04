import React from "react";
import "../Styles/ProjectsPic.css";
import Pax1LandingPic from "../Components/Assets/Parks1/PK1.webp";
import Px1 from "../Components/Assets/Parks1/PK1.webp";
import Pax1 from "../Components/Assets/Parks1/PX1.jpg";
import Pax2 from "../Components/Assets/Parks1/PX2.jpg";
import Pax3 from "../Components/Assets/Parks1/PX3.jpg";
import Pax4 from "../Components/Assets/Parks1/PX4.jpg";

const ProjectsPicPax1 = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={Pax1LandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">PAX I APARTMENTS</h1>
            <p className="textOfImage">CONSULTING</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> PROPOSED RESIDENTIAL DEVELOPMENT AT MIKE
            ADEGBITE STREET, LEKKI, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>4 UNITS OF 4BEDROOM DUPLEX & 2 UNIT OF 3
            BEDROOM APARTMENTS
          </p>
          <p className="aboutProject">
            <span>STATUS: </span> COMPLETED
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy Services for a 4 Units of
            4-Bedroom Duplex & 3-Bedroom Apartment on 4-Floors, The
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
            <img alt="HeroImg" src={Px1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pax1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pax2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pax3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Pax4} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicPax1;
