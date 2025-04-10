import React from "react";
import HeaderInfo from "./components/header/HeaderInfo";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Ticker from "./components/partials/Ticker";
import Services from "./components/services/Services";
import Benefits from "./components/benefits/Benefits";
import Stories from "./components/stories/Stories";

const App = () => {
  const englishTicker = [
    "General Dentistry",
    "General Cleaning",
    "Dental Care",
    "Dental Implant",
    "Dental Whitening",
    "Dental Sealant",
    "Dental Tools",
  ];

  const tagalogTicker = [
    "General Linis",
    "Tanim Ngipin",
    "Ngipin Tepu",
    "Bunot Ngipin",
    "Pasta",
    "Mumog Bibig",
    "Ngipin Ngipin",
  ];
  return (
    <div>
      <HeaderInfo /> <Header /> <Banner /> <About />
      <Ticker phase={tagalogTicker} /> <Services />
      <Ticker phase={tagalogTicker} />
      <Benefits />
      <Stories />
    </div>
  );
};

export default App;
