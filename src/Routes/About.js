import React from "react";
import Navbar from "../Components/Navbar";
import AboutLandingPage from "../Components/AboutLandingPage";
import AboutIntroduction from "../Components/AboutIntroduction";
import AboutPhrase from "../Components/AboutPhrase";
import AboutTeam from "../Components/AboutTeam";
import AboutClients from "../Components/AboutClients";
import HomeGetInTouch from "../Components/HomeGetInTouch";
import HomeFooter from "../Components/HomeFooter";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutLandingPage />
      <AboutIntroduction />
      <AboutPhrase />
      <AboutTeam />
      {/* <AboutClients /> */}
      <HomeGetInTouch />
      {/* <HomeFooter /> */}
    </>
  );
};

export default About;
