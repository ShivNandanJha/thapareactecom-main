import React from "react";
import HeroSection from "./component/HeroSection";
import { useProductContext } from "../src/Context/ProductContext";


const About = () => {
  const { AppCntxt } = useProductContext();
  const data = {
    Myname: "Shivi.code",
    name: "  Ecommerce Website",
 
  };
  return <>
    {AppCntxt}
  <HeroSection myData={data}/>
  </> 
};

export default About;
