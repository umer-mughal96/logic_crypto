import React from "react";
import SettingComp from "../components/settingDashboard/SettingComp";
import Sidebar from "../components/Sidebar";

const SettingDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="s-layout">
            <Sidebar />
            <SettingComp/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingDashboard;
