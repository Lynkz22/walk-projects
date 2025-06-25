import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomeChoose.css";
import ProjectHomeImageOne from "../Components/Assets/GarnetProject/GP2.webp";

const HomeChoose = () => {
  return (
    <>
      <section className="sectionHomeChoose">
        <div className="divHomeChooseImage">
          <img
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="homeChooseImage"
          />
        </div>

        <div className="divHomeChoose">
          <div className="divChooseHeading">
            <h1 className="headingChoose">WHY CHOOSE US</h1>
          </div>
          <div className="divChooseContent">
            <p className="ChooseContent">
              <span>
                <i class="fa-solid fa-circle circular-shape"></i>
              </span>
              <span>Expertise You Can Trust: </span> With years of experience in
              MEP, our team brings unparalled technical knowledge and practical
              skills to every project.
            </p>
            <p className="ChooseContent">
              <span>
                <i class="fa-solid fa-circle circular-shape"></i>
              </span>
              <span>Integrated and Innovative Solutions :</span> We pride
              ourselves on offering a holistic approach to MEP services,
              ensuring seamless integration across all systems.
            </p>
            <p className="ChooseContent">
              <span>
                <i class="fa-solid fa-circle circular-shape"></i>
              </span>
              <span>Reliability and Client Focus :</span> Your project's success
              is our top priority. From initial consultation to post-completion
              support, we are dedicated to clear communication, timely
              execution, unwavering attention to detail.
            </p>
          </div>

          <div className="divChooseButton">
            <Link to="/About">
              <button className="buttonHomeChoose">
                <p className="textChooseButton">ABOUT US</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeChoose;
