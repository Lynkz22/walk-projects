import React from "react";
import "../Styles/ProjectsPic.css";
import VgcLandingPic from "../Components/Assets/VGC/Vgc1.webp";
import Vgc1 from "../Components/Assets/VGC/Vgc1.webp";
import Vgc2 from "../Components/Assets/VGC/Vgc2.webp";
import Vgc3 from "../Components/Assets/VGC/Vgc3.webp";
import Vgc4 from "../Components/Assets/VGC/Vgc4.webp";
import Vgc5 from "../Components/Assets/VGC/Vgc5.webp";
import Vgc6 from "../Components/Assets/VGC/Vgc6.webp";
import Vgc7 from "../Components/Assets/VGC/Vgc7.webp";
import Vgc8 from "../Components/Assets/VGC/Vgc8.webp";
import Vgc9 from "../Components/Assets/VGC/Vgc9.webp";
import Vgc10 from "../Components/Assets/VGC/Vgc10.jpg";
import Vgc11 from "../Components/Assets/VGC/Vgc11.jpg";

const ProjectsPicVgc = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={VgcLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">VGC</h1>
            <p className="textOfImage">DESIGN AND BUILD</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> PROPOSED RESIDENTIAL DEVELOPMENT FOR PRIVATE
            CLIENT AT VGC, LEKKI, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>5-BEDROOM DUPLEX + 2 ROOM BQ.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span> ONGOING
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy Services for a 5 Units of
            5 bedroom duplex with 2 room bq. The architectural design was
            carefully studied and state of the art and modern applications in
            the MEP industry was utilized for the design of the building. <br />
            The plumbing services recommended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards
          </p>
        </div>

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc9} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc10} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Vgc11} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicVgc;
