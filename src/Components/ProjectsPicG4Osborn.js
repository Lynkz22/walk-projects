import React from "react";
import "../Styles/ProjectsPic.css";
import Pax1LandingPic from "../Components/Assets/Parks1/PK1.webp";
import Osborn1 from "../Components/Assets/G4Osborn/Go1.webp";
import Osborn2 from "../Components/Assets/G4Osborn/Go2.webp";
import Osborn3 from "../Components/Assets/G4Osborn/Go3.webp";
import Osborn4 from "../Components/Assets/G4Osborn/Go4.webp";
import Osborn5 from "../Components/Assets/G4Osborn/Go5.webp";
import Osborn6 from "../Components/Assets/G4Osborn/Go6.webp";
import Osborn7 from "../Components/Assets/G4Osborn/Go7.webp";
import Osborn8 from "../Components/Assets/G4Osborn/Go8.webp";
import Osborn9 from "../Components/Assets/G4Osborn/Go9.webp";
import Osborn10 from "../Components/Assets/G4Osborn/Go10.webp";
import Osborn11 from "../Components/Assets/G4Osborn/Go11.webp";
import Osborn12 from "../Components/Assets/G4Osborn/Go12.webp";
import Osborn13 from "../Components/Assets/G4Osborn/Go13.webp";
import Osborn14 from "../Components/Assets/G4Osborn/Go14.webp";

const ProjectsPicG4Osborn = () => {
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
            <h1 className="headingImage">G4 OSBOURNE</h1>
            <p className="textOfImage">DESIGN AND BUILD</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL RENOVATION AT MABILLA
            VILLAS, OSBOURNE FORSHORE ESTATE, IKOYI, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>3 BEDROOM TERRACE DUPLEX IN 3 FLOORS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            COMPLETED
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy & Installation services
            for a 3 bedroom terrace duples on 3-Floors, the architectural design
            was carefully studied and state of the art and modern applications
            in the MEP industry was utilized for the design of the building.
            <br />
            The plumbing services recommended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards.
          </p>
        </div>

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn9} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn10} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn11} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="eroImg" src={Osborn12} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn13} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Osborn14} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicG4Osborn;
