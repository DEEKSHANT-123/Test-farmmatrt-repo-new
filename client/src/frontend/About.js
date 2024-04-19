import React from "react";
import HeroSection from "./HeroSection";
import { useProductContext } from "../context/productcontext";
import Footer from './Footer';

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "FarMart: Cultivating Excellence in Farming",
  };

  return (
    <>
    
      <HeroSection myData={data} />
      <Footer />
    </>
  );
};

export default About; 
