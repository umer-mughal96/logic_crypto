import React from "react";
import Carousel from "../components/Carousel";
import GettingStarted from "../components/GettingStarted";
import Banner from "../components/invest/Banner";
import KeyTerms from "../components/invest/KeyTerms";
import RoadMap from "../components/invest/RoadMap";
import TakePart from "../components/invest/TakePart";
import Slider from "../components/Slider";

const Invest = () => {
  return (
    <>
      <Banner/>
      <RoadMap/>
      <Slider/>
      <KeyTerms/>
      <TakePart/>
      <GettingStarted/>
    </>
  );
};

export default Invest;
