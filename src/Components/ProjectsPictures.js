import React from "react";
import "../Styles/ProjectsPictures.css";
import { Link } from "react-router-dom";
import ProjectHomeImageOne from "../Components/Assets/LandingPage/LandingPage3.jpg";
import SterlingBankProject from "../Components/Assets/SterlingBank/SB1.webp";
import MeridianTowers from "../Components/Assets/MeridianTowers/MT1.webp";
import TrinityTowers from "../Components/Assets/TrinityTowers/TT.jpeg";
import Parks1 from "../Components/Assets/Parks1/PK1.webp";
import Parks2 from "../Components/Assets/Parks2/PT1.jpg";
import Carepoint from "../Components/Assets/CarepointHospital/CH1.webp";
import Av14Eko from "../Components/Assets/AV14EkoAtlantic/AV1.webp";
import ChiefObinna from "../Components/Assets/ChiefObinna/CO1.webp";
import CradleMall from "../Components/Assets/CradleMall/RM2.webp";
import GarnetProject from "../Components/Assets/GarnetProject/GP1.webp";
import Kb1 from "../Components/Assets/K21/KB1.jpg";
import Oduduwa from "../Components/Assets/OduduwaHomes/OH2.jpg";
import OkinApartments from "../Components/Assets/Okin/OK1.jpg";
import Seerbit from "../Components/Assets/Seerbit/SB1.jpg";
import PointOmole from "../Components/Assets/4PointOmole/4PO2.webp";
import PointOlowoora from "../Components/Assets/4PointOlowoora/4POL1.webp";
import PointKosofe from "../Components/Assets/4PointKosofe/4PK1.webp";

const ProjectsPictures = () => {
  return (
    <>
      <div>
        <h1 className="headingSectionProjectPictures">DESIGN AND BUILD</h1>
      </div>
      <section className="sectionProjectPictures">
        <Link to="/ProjectsPageSterling">
          <div className="divProjectImages">
            <img
              alt="HeroImg"
              src={SterlingBankProject}
              className="projectImages"
            />
            <p className="textProjectName">Sterling Bank</p>
          </div>
        </Link>

        <Link to="/ProjectsPageOkin">
          <div className="divProjectImages">
            <img alt="HeroImg" src={OkinApartments} className="projectImages" />
            <p className="textProjectName">Okin Apartments</p>
          </div>
        </Link>

        <Link to="/ProjectsPageOduduwaHomes">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Oduduwa} className="projectImages" />
            <p className="textProjectName">Oduduwa Homes</p>
          </div>
        </Link>

        <Link to="/ProjectsPageG4Osborn">
          <div className="divProjectImages">
            <img alt="HeroImg" src={OkinApartments} className="projectImages" />
            <p className="textProjectName">G4 Osborn</p>
          </div>
        </Link>

        <Link to="/ProjectsPageCarepoint">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Carepoint} className="projectImages" />
            <p className="textProjectName">Carepoint Hospital</p>
          </div>
        </Link>

        <Link to="/ProjectsPageSeerbit">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Seerbit} className="projectImages" />
            <p className="textProjectName">Seerbit</p>
          </div>
        </Link>

        <Link to="/ProjectsPage4PointOmole">
          <div className="divProjectImages">
            <img alt="HeroImg" src={PointOmole} className="projectImages" />
            <p className="textProjectName">4 Point Omole</p>
          </div>
        </Link>

        <Link to="/ProjectsPage4PointOlowoora">
          <div className="divProjectImages">
            <img alt="HeroImg" src={PointOlowoora} className="projectImages" />
            <p className="textProjectName">4 Point Olowoora</p>
          </div>
        </Link>

        <Link to="/ProjectsPage4PointKosofe">
          <div className="divProjectImages">
            <img alt="HeroImg" src={PointKosofe} className="projectImages" />
            <p className="textProjectName">4 Point Kosofe</p>
          </div>
        </Link>
      </section>

      <div className="divSpacing">
        <h1 className="headingSectionProjectPictures">CONSULTING</h1>
      </div>

      <section className="sectionProjectPictures">
        <Link to="/ProjectsPageChiefObinna">
          <div className="divProjectImages">
            <img alt="HeroImg" src={ChiefObinna} className="projectImages" />
            <p className="textProjectName">Chief Obinna</p>
          </div>
        </Link>

        <Link to="/ProjectsPageGarnet">
          <div className="divProjectImages">
            <img alt="HeroImg" src={GarnetProject} className="projectImages" />
            <p className="textProjectName">Garnet</p>
          </div>
        </Link>

        <Link to="/ProjectsPageMeridianTowers">
          <div className="divProjectImages">
            <img alt="HeroImg" src={MeridianTowers} className="projectImages" />
            <p className="textProjectName">Meridian Towers</p>
          </div>
        </Link>

        <Link to="/ProjectsPageTrinityTowers">
          <div className="divProjectImages">
            <img alt="HeroImg" src={TrinityTowers} className="projectImages" />
            <p className="textProjectName">Trinity Towers</p>
          </div>
        </Link>

        <Link to="/ProjectsPageK21Banana">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Kb1} className="projectImages" />
            <p className="textProjectName">K21 Banana</p>
          </div>
        </Link>

        <Link to="/ProjectsPagePax1">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Parks1} className="projectImages" />
            <p className="textProjectName">Pax I</p>
          </div>
        </Link>

        <Link to="/ProjectsPagePax2">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Parks2} className="projectImages" />
            <p className="textProjectName">Pax II</p>
          </div>
        </Link>

        <Link to="/ProjectsPageAV14">
          <div className="divProjectImages">
            <img alt="HeroImg" src={Av14Eko} className="projectImages" />
            <p className="textProjectName">AV 14 Eko Atlantic</p>
          </div>
        </Link>

        <Link to="/ProjectsPageCradleMall">
          <div className="divProjectImages">
            <img alt="HeroImg" src={CradleMall} className="projectImages" />
            <p className="textProjectName">Cradle Mall</p>
          </div>
        </Link>

        {/* <Link to="/ProjectsPageChiefObinna">
          <div className="divProjectImages">
            <img alt="HeroImg" src={ChiefObinna} className="projectImages" />
            <p className="textProjectName">Chief Obinna</p>
          </div>
        </Link> */}
      </section>
    </>
  );
};

export default ProjectsPictures;
