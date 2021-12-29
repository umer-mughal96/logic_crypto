import React from "react";
import GettingStarted from '../components/GettingStarted'
import KnowledgeDetail from "../components/knowledge/KnowledgeDetail";
import KnowledgeComp from "../components/KnowledgeComp";

const Knowledge = () => {
  return (
    <div>
      <KnowledgeComp/>
      <KnowledgeDetail/>
      <GettingStarted/>
  </div>
);
};

export default Knowledge;
