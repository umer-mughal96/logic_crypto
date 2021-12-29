import React from "react";
import Banner from "../components/automatedTrading/Banner";
import BuildRule from "../components/automatedTrading/BuildRule";
import CreateAutomate from "../components/automatedTrading/CreateAutomate";
import EvaluateCost from "../components/automatedTrading/EvaluateCost";
import SecurelyTrade from "../components/automatedTrading/SecurelyTrade";
import SupportedExchange from "../components/automatedTrading/SupportedExchange";
import Team from "../components/automatedTrading/Team";
import TestRule from "../components/automatedTrading/TestRule";
import GettingStarted from "../components/GettingStarted";



const AutomatedTrading = () => {

  return (
    <div>
      <Banner/>
      <CreateAutomate/>
      <TestRule/>
      <BuildRule/>
      <SecurelyTrade/>
      <GettingStarted value={{heading: 'Take a Start Now', paragraph: 'Sign Up now and get updated daily on your inbox'}}/>
      <EvaluateCost/>
      <Team/>
      <SupportedExchange/>
      <GettingStarted/>
      
    </div>
  );
};

export default AutomatedTrading;
