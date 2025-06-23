import React from "react";
import "../Styles/ProjectsPic.css";
import OkinLandingPic from "../Components/Assets/Okin/OK1.jpg";
import Ok1 from "../Components/Assets/Okin/OK1.jpg";
import Ok2 from "../Components/Assets/Okin/OK2.jpg";
import Ok3 from "../Components/Assets/Okin/OK3.jpg";
import Ok4 from "../Components/Assets/Okin/OK4.jpg";
import Ok5 from "../Components/Assets/Okin/OK5.jpg";
import Ok6 from "../Components/Assets/Okin/OK6.jpg";
import Ok7 from "../Components/Assets/Okin/OK7.jpg";
import Ok8 from "../Components/Assets/Okin/OK8.jpg";
import Ok9 from "../Components/Assets/Okin/OK9.jpg";

const ProjectsPicOkin = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={OkinLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">OKIN APARTMENTS</h1>
            <p className="textOfImage">DESIGN AND BUILD</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> PROPOSED RESIDENTIAL DEVELOPMENT AT WEGBO
            STREET, IWAYA, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>10 UNITS OF 2BEDROOM APARTMENTS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span> COMPLETED
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy & Installation services
            for a 10 Units of 2-Bedroom Apartments on 4-Floors, The
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
            <img alt="HeroImg" src={Ok1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ok2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ok3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ok4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ok5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ok6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ok7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ok8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Ok9} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicOkin;
