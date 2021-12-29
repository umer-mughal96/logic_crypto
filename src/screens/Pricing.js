import React from "react";

import PricingCards from "../components/pricing/PricingCards";
import EvaluateCost from "../components/automatedTrading/EvaluateCost";
import BuildRule from "../components/automatedTrading/BuildRule";
import GettingStarted from "../components/GettingStarted";
import Slider from "../components/Slider";

const Pricing = () => {

  return (
    <div>
      <PricingCards />
      <EvaluateCost />
      <Slider/>
      <BuildRule value={{ heading: 'Select From 150+ Strategies', buttonName: 'Start for free' }} />
      <GettingStarted
        value={{ heading: 'Get New Strategies Weekly', paragraph: 'Get updates without searching in your inbox every week' }} />

    </div>
  );
};

export default Pricing;
