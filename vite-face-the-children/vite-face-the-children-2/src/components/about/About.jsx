import React from "react";
import Header from "../home/header";
import Navigation from "../home/navigation";
import BannerAbout from "./BannerAbout";
import VisionAbout from "./VisionAbout";
import MissionAbout from "./MissionAbout";
import Footer from "../home/footer";
import GiftAbout from "./GiftAbout";

const About = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <BannerAbout />
      <VisionAbout />
      <MissionAbout />
      <GiftAbout />
      <Footer />
    </div>
  );
};

export default About;
