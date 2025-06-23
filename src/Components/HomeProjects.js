import React from "react";
import "../Styles/HomeProjects.css";
import { motion } from "framer-motion";
import StanbicBank from "../Components/Assets/SterlingBank/SB1.webp";
import Oduduwa from "../Components/Assets/OduduwaHomes/OH1.jpg";
import MeridianTowers from "../Components/Assets/MeridianTowers/MT1.webp";
import TrinityTowers from "../Components/Assets/TrinityTowers/TT.jpeg";
import { Link } from "react-router-dom";

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
              <Link to="/Projects">
                <div className="divOfImage">
                  <img
                    alt="HeroImg"
                    src={StanbicBank}
                    className="homeProjectImage"
                  />
                </div>
                <div className="divOfText">
                  <h2>Sterling Bank</h2>
                  <p>DESIGN AND BUILD</p>
                </div>
                <div className="topBcg"></div>
              </Link>
            </motion.div>
            <motion.div
              className="divServicesAboutText-1"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <Link to="/Projects">
                <div className="divOfImage">
                  <img
                    alt="HeroImg"
                    src={Oduduwa}
                    className="homeProjectImage"
                  />
                </div>
                <div className="divOfText">
                  <h2>ODUDUWA</h2>
                  <p>DESIGN AND BUILD</p>
                </div>
              </Link>
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
              <Link to="/Projects">
                <div className="divOfImage">
                  <img
                    alt="HeroImg"
                    src={MeridianTowers}
                    className="homeProjectImage"
                  />
                </div>
                <div className="divOfText">
                  <h2>Meridian Towers</h2>
                  <p>CONSULTING</p>
                </div>
                <div className="topBcg"></div>
              </Link>
            </motion.div>
            <motion.div
              className="divServicesAboutText-1"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <Link to="/Projects">
                <div className="divOfImage">
                  <img
                    alt="HeroImg"
                    src={TrinityTowers}
                    className="homeProjectImage"
                  />
                </div>
                <div className="divOfText">
                  <h2>Trinity Towers</h2>
                  <p>CONSULTING</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProjects;
