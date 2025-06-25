import React from "react";
import "../Styles/AboutClients.css";
import SterlingBank from "../Components/Assets/Logo/SterlingBank.png";
import FourPoint from "../Components/Assets/Logo/4Point.png";
import JamesCubit from "../Components/Assets/Logo/Jamescubitt.webp";
import Levitikal from "../Components/Assets/Logo/LevitikalGroup.png";
import Perception from "../Components/Assets/Logo/PerceptionTechnologies.png";
import Seerbit from "../Components/Assets/Logo/Seerbit.webp";
import Origin from "../Components/Assets/Logo/Origin.png";
import Carepoint from "../Components/Assets/Logo/Carepoint.png";
import PartumLocus from "../Components/Assets/Logo/PartumLocus.png";
import Vo3 from "../Components/Assets/Logo/Vo3.jpg";
import GothArchitecture from "../Components/Assets/Logo/GothArchitecture.png";

const AboutClients = () => {
  return (
    <>
      <section className="sectionAboutClients">
        <div className="textClients">
          <h2>Our Clients & Partners</h2>
          <p>
            Our cients and partners are the heart of our M&E construction
            collaborations.
          </p>
        </div>
        {/* <div className="wrapper">
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
            <img alt="HeroImg" src={Origin} className="imageClients" />
          </div>
          <div className="item item8">
            <img alt="HeroImg" src={Carepoint} className="imageClients" />
          </div>
          <div className="item item9">
            <img alt="HeroImg" src={PartumLocus} className="imageClients" />
          </div>
          <div className="item item10">
            <img alt="HeroImg" src={Vo3} className="imageClients" />
          </div>
          <div className="item item11">
            <img
              alt="HeroImg"
              src={GothArchitecture}
              className="imageClients"
            />
          </div>
        </div> */}

        <div class="container">
          <div class="scrolling-wrapper">
            <div class="scrolling-content">
              <img src={SterlingBank} className="imageClients" alt="image1" />
              <img src={FourPoint} className="imageClients" alt="image1" />
              <img src={JamesCubit} className="imageClients" alt="image1" />
              <img src={Levitikal} className="imageClients" alt="image1" />
              <img src={Perception} className="imageClients" alt="image1" />
              <img src={Seerbit} className="imageClients" alt="image1" />
              <img src={Origin} className="imageClients" alt="image1" />
              <img src={Carepoint} className="imageClients" alt="image1" />
              <img src={PartumLocus} className="imageClients" alt="image1" />
              <img
                src={GothArchitecture}
                className="imageClients"
                alt="image1"
              />
              <img src={SterlingBank} className="imageClients" alt="image1" />
              <img src={FourPoint} className="imageClients" alt="image1" />
              <img src={JamesCubit} className="imageClients" alt="image1" />
              <img src={Levitikal} className="imageClients" alt="image1" />
              <img src={Perception} className="imageClients" alt="image1" />
              <img src={Seerbit} className="imageClients" alt="image1" />
              <img src={Origin} className="imageClients" alt="image1" />
              <img src={Carepoint} className="imageClients" alt="image1" />
              <img src={PartumLocus} className="imageClients" alt="image1" />
              <img
                src={GothArchitecture}
                className="imageClients"
                alt="image1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutClients;
