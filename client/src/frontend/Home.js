import React from "react";
import HeroSection from "./HeroSection";
import Services from "./services";
import Trusted from "./trusted";
import Slider from './Slider';
import Footer from './Footer';
// import Header from "./Header";
import { slidesData } from "./slidesData";
import TopDeals from "./TopDeals";



const Home = () => {
  const data = {
    name: "FarMart",
  };

  return (
    <>
      {/* <Header /> */}
     <Slider slides={slidesData} />
      <HeroSection myData={data} />
      <TopDeals></TopDeals>
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;