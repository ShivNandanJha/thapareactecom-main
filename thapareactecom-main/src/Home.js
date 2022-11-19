import React from "react";
import FeatureProducts from "./component/FeatureProducts";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Trusted from "./component/Trusted";

const Home = () => {
  const data = {
    name: "ShoppyCart",
  };

  return <>
    <HeroSection myData={data} />
    <FeatureProducts/>
    <Services />
    <Trusted />
    
  
  </> 
};

export default Home;
