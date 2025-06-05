import React from "react";
import Navbar from "../Components/Navbar";
import HomeLandingPage from "../Components/HomeLandingPage";
import HomeWelcome from "../Components/HomeWelcome";
import HomeCoreValues from "../Components/HomeCoreValues";
import HomeServices from "../Components/HomeServices";
import HomeChoose from "../Components/HomeChoose";
import HomeGetInTouch from "../Components/HomeGetInTouch";
import HomeFooter from "../Components/HomeFooter";
import HomeProjects from "../Components/HomeProjects";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeLandingPage />
      <HomeWelcome />
      <HomeCoreValues />
      <HomeServices />
      <HomeChoose />
      <HomeProjects />
      <HomeGetInTouch />
      {/* <HomeFooter /> */}
    </>
  );
};

export default Home;
