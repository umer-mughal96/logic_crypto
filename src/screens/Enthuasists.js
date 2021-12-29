import React from "react";
import SupportedExchange from "../components/automatedTrading/SupportedExchange";
import Banner from "../components/enthuasists/Banner";
import MeetTeam from "../components/enthuasists/MeetTeam";
import SliderComp from "../components/enthuasists/SliderComp";
import GettingStarted from "../components/GettingStarted";

const Enthuasists = () => {
  return (
    <div>
      <Banner />
      <SliderComp />
      <MeetTeam />
      <SupportedExchange value={{
        heading: 'Partners', parrgraph: `We’ve had the pleasure of working with over 10+ amazing crypto
              partners for our public alpha, including`}} />
      <GettingStarted />
    </div>
  );
};

export default Enthuasists;
