import React from "react";
import Navbar from "../Components/Navbar";
import ProjectsLandingPage from "../Components/ProjectsLandingPage";
import ProjectIntroduction from "../Components/ProjectIntroduction";
import ProjectsPictures from "../Components/ProjectsPictures";

const Projects = () => {
  return (
    <>
      <Navbar />
      <ProjectsLandingPage />
      <ProjectIntroduction />
      <ProjectsPictures />
    </>
  );
};

export default Projects;
