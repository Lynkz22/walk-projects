import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomeWelcome.css";
import ProjectHomeImageOne from "../Components/Assets/LandingPage/LandingPage3.jpg";

const HomeWelcome = () => {
  return (
    <>
      <section className="sectionHomeWelcome">
        <div className="divHomeWelcome">
          <div className="divHeading">
            <h1 className="heading">WELCOME TO WALK PROJECTS</h1>
            <h2 className="heading1">
              A LEADING MEP <br />
              COMPANY
            </h2>
          </div>
          <div className="divWelcomeContent">
            <p className="welcomeContent">
              Walk Projects stands at the pinnacle of Mechanical, Electrical,
              and Plumbing innovation, delivering cutting-edge Mechanical,
              Electrical, and Plumbing solutions that power modern
              infrastructure. We design and implement robust and reliable
              systems that transcend conventional standards, ensuring optimal
              performance and extraordinary user experience.
            </p>
          </div>

          <div className="divWelcomeButton">
            <Link to="/About">
              <button className="buttonHomeWelcome">
                <p className="textWelcomeButton">About Us</p>
              </button>
            </Link>
          </div>
        </div>

        <div className="divHomeWelcomeImage">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="homeWelcomeImage"
          />
        </div>
      </section>
    </>
  );
};

export default HomeWelcome;
