import React from "react";
import "../Styles/HomeProjects.css";
import { motion } from "framer-motion";
import StanbicBank from "../Components/Assets/SterlingBank/SB1.webp";
import GarnetProject from "../Components/Assets/GarnetProject/GP1.webp";
import MeridianTowers from "../Components/Assets/MeridianTowers/MT1.webp";
import TrinityTowers from "../Components/Assets/TrinityTowers/TT.jpeg";

import ProjectHomeImageOne from "../Components/Assets/LandingPage/LandingPage3.jpg";

const HomeProjects = () => {
  return (
    <>
      <section className="sectionServicesAbout">
        <div className="divHomeProjectsHeading">
          <h2>PROJECTS</h2>
        </div>

        <div className="divServicesAbout-1">
          <div className="divServicesAboutFlex">
            <motion.div
              className="divServicesAboutText"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div className="divOfImage">
                <img
                  alt="HeroImg"
                  src={StanbicBank}
                  className="homeProjectImage"
                />
              </div>
              <div className="divOfText">
                <h2>Stanbic Bank</h2>
                <p>MEP</p>
              </div>
              <div className="topBcg"></div>
            </motion.div>
            <motion.div
              className="divServicesAboutText-1"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div className="divOfImage">
                <img
                  alt="HeroImg"
                  src={GarnetProject}
                  className="homeProjectImage"
                />
              </div>
              <div className="divOfText">
                <h2>Garnet Project</h2>
                <p>MEP</p>
              </div>
            </motion.div>
          </div>
          <div className="divServicesAboutFlex">
            <motion.div
              className="divServicesAboutText"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div className="divOfImage">
                <img
                  alt="HeroImg"
                  src={MeridianTowers}
                  className="homeProjectImage"
                />
              </div>
              <div className="divOfText">
                <h2>Meridian Towers</h2>
                <p>MEP</p>
              </div>
              <div className="topBcg"></div>
            </motion.div>
            <motion.div
              className="divServicesAboutText-1"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div className="divOfImage">
                <img
                  alt="HeroImg"
                  src={TrinityTowers}
                  className="homeProjectImage"
                />
              </div>
              <div className="divOfText">
                <h2>Trinity Towers</h2>
                <p>MEP</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProjects;
