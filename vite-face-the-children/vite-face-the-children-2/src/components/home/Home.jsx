import React from "react";
import Navigation from "./navigation";
import Banner from "./banner";
import Header from "./header";
import Section from "./section";
import Services from "./services";
import Associates from "./associates";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Section />
      <Services />
      <Associates />
      <Footer />
    </div>
  );
};

export default Home;
