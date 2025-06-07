import React from "react";
import "../Styles/AboutClients.css";
import SterlingBank from "../Components/Assets/Logo/SterlingBank.png";
import FourPoint from "../Components/Assets/Logo/4Point.png";
import JamesCubit from "../Components/Assets/Logo/Jamescubitt.webp";
import Levitikal from "../Components/Assets/Logo/LevitikalGroup.png";
import Perception from "../Components/Assets/Logo/PerceptionTech.webp";
import Seerbit from "../Components/Assets/Logo/Seerbit.webp";

const AboutClients = () => {
  return (
    <>
      <section className="sectionAboutClients">
        <div className="textClients">
          <h2>Our Clients & Partners</h2>
          <p>
            Our area of practice is quite wide: design, graphics, branding,
            development.
          </p>
        </div>
        <div className="wrapper">
          <div className="item item1">
            <img alt="HeroImg" src={SterlingBank} className="imageClients" />
          </div>
          <div className="item item2">
            <img alt="HeroImg" src={FourPoint} className="imageClients" />
          </div>
          <div className="item item3">
            <img alt="HeroImg" src={JamesCubit} className="imageClients" />
          </div>
          <div className="item item4">
            <img alt="HeroImg" src={Levitikal} className="imageClients" />
          </div>
          <div className="item item5">
            <img alt="HeroImg" src={Perception} className="imageClients" />
          </div>
          <div className="item item6">
            <img alt="HeroImg" src={Seerbit} className="imageClients" />
          </div>
          <div className="item item7">
            <img alt="HeroImg" src={JamesCubit} className="imageClients" />
          </div>
          <div className="item item8">
            <img alt="HeroImg" src={Seerbit} className="imageClients" />
          </div>
        </div>
        {/* <div className="clientSlider">
          <div className="slideTrack">
            <div className="divClients">
              <img
                alt="HeroImg"
                src={ProjectHomeImageOne}
                className="imageClients"
              />
            </div>
            <div className="divClients">
              <img
                alt="HeroImg"
                src={ProjectHomeImageOne}
                className="imageClients"
              />
            </div>
            <div className="divClients">
              <img
                alt="HeroImg"
                src={ProjectHomeImageOne}
                className="imageClients"
              />
            </div>
            <div className="divClients">
              <img
                alt="HeroImg"
                src={ProjectHomeImageOne}
                className="imageClients"
              />
            </div>
            <div className="divClients">
              <img
                alt="HeroImg"
                src={ProjectHomeImageOne}
                className="imageClients"
              />
            </div>
            <div className="divClients">
              <img
                alt="HeroImg"
                src={ProjectHomeImageOne}
                className="imageClients"
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default AboutClients;
