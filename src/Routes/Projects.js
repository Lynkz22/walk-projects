import React from "react";
import Navbar from "../Components/Navbar";
import ProjectsLandingPage from "../Components/ProjectsLandingPage";
import ProjectIntroduction from "../Components/ProjectIntroduction";
import ProjectsPictures from "../Components/ProjectsPictures";
import HomeGetInTouch from "../Components/HomeGetInTouch";
import HomeFooter from "../Components/HomeFooter";

const Projects = () => {
  return (
    <>
      <Navbar />
      <ProjectsLandingPage />
      <ProjectIntroduction />
      <ProjectsPictures />
      <HomeFooter />
      {/* <HomeGetInTouch /> */}
    </>
  );
};

export default Projects;
