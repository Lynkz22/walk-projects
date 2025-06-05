import React from "react";
import Navbar from "../Components/Navbar";
import ServicesLandingPage from "../Components/ServicesLandingPage";
import ServicesIntroduction from "../Components/ServicesIntroduction";
import ServicesList from "../Components/ServicesList";
import ServicesChoose from "../Components/ServicesChoose";
import HomeGetInTouch from "../Components/HomeGetInTouch";

const Services = () => {
  return (
    <>
      <Navbar />
      <ServicesLandingPage />
      <ServicesIntroduction />
      <ServicesList />
      <ServicesChoose />
      <HomeGetInTouch />
    </>
  );
};

export default Services;
