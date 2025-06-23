import React from "react";
import "../Styles/ProjectsPic.css";
import MeridianLandingPic from "../Components/Assets/MeridianTowers/MT1.webp";
import Meridian1 from "../Components/Assets/MeridianTowers/MT1.jpg";
import Meridian2 from "../Components/Assets/MeridianTowers/MT2.jpg";
import Meridian3 from "../Components/Assets/MeridianTowers/MT3.jpg";
import Meridian4 from "../Components/Assets/MeridianTowers/MT4.jpg";
import Meridian5 from "../Components/Assets/MeridianTowers/MT5.jpg";
import Meridian6 from "../Components/Assets/MeridianTowers/MT6.jpg";
import Meridian7 from "../Components/Assets/MeridianTowers/MT7.jpg";
import Meridian8 from "../Components/Assets/MeridianTowers/MT8.jpg";
import Meridian9 from "../Components/Assets/MeridianTowers/MT9.jpg";
import Meridian10 from "../Components/Assets/MeridianTowers/MT10.jpg";
import Meridian11 from "../Components/Assets/MeridianTowers/MT11.jpg";
import Meridian12 from "../Components/Assets/MeridianTowers/MT12.jpg";
import Meridian13 from "../Components/Assets/MeridianTowers/MT13.jpg";
import Meridian14 from "../Components/Assets/MeridianTowers/MT14.jpg";

const ProjectsPicMeridianTowers = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={MeridianLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">MERIDIAN TOWERS</h1>
            <p className="textOfImage">CONSULTING</p>
          </div>
        </div>

        <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL DEVELOPMENT FOR
            LEVITIKAL GROUP AT OKO-AWO STREET, VICTORIA ISLAND, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>
            MIXED TYPED RESIDENTIAL AND OFFICE BUILDING ON 23 FLOORS.{" "}
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
            <img alt="HeroImg" src={Meridian1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian9} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian10} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian11} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian12} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian13} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Meridian14} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPicMeridianTowers;
