import React from "react";
import "../Styles/AboutClients.css";
import ProjectHomeImageOne from "../Components/Assets/LandingPage/LandingPage3.jpg";

const AboutClients = () => {
  return (
    <>
      <section className="sectionAboutClients">
        <div>
          <h2>
            Our Clients <br /> & Partners
          </h2>
          <p>
            Our area of practice is quite wide: design, graphics, branding,
            development.
          </p>
        </div>
        <div>
          <div className="image-container">
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="homeChooseImage"
            />
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="homeChooseImage"
            />
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="homeChooseImage"
            />
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="homeChooseImage"
            />
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="homeChooseImage"
            />
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="homeChooseImage"
            />
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="homeChooseImage"
            />
            <img
              alt="HeroImg"
              src={ProjectHomeImageOne}
              className="homeChooseImage"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutClients;
