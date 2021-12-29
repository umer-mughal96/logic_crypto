import React from "react";
import RiskManagement from "../components/categories/RiskManagement";
import GettingStarted from "../components/GettingStarted";
import KnowledgeComp from "../components/KnowledgeComp";


const Categories = () => {
  return (
    <div>   
      <KnowledgeComp value={{text: 'Home/Risk managment'}}/>
      <RiskManagement/>
      <GettingStarted/>
    </div>
  );
};

export default Categories;
