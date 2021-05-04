import React from "react";

const Sidebar = () => {
  return (
    <div className="s-layout__sidebar">
      <a className="s-sidebar__trigger" href="#0">
        <i className="fa fa-bars"></i>
      </a>
      <nav className="s-sidebar__nav">
        <ul>
          <li>
            <a href="">
              <img src="files/images/knowledgepage/header-logo.svg" alt="" />
            </a>
          </li>
          <li>
            <a className="s-sidebar__nav-link" href="#0">
              {" "}
              <i className="fab fa-stumbleupon-circle"></i>
              <span>Rules</span>{" "}
            </a>
          </li>
          <li>
            <a className="s-sidebar__nav-link" href="#0">
              {" "}
              <i className="fas fa-exchange-alt"></i>
              <span>Exchange</span>{" "}
            </a>
          </li>
          <li>
            <a className="s-sidebar__nav-link" href="#0">
              {" "}
              <i className="fas fa-cog"></i>
              <span>Settings</span>{" "}
            </a>
          </li>
        </ul>
        <div className="row sidebar-button">
          <div className="offset-2 col-8">
            <a href="" className="btn d-block">
              Get plans
            </a>
          </div>
          <div className="offset-2 col-8">
            <a href="" className="btn d-block">
              Help Center
            </a>
          </div>
          <div className="offset-3 col-6 mt-2 pl-4">
            <a href="" className="logout">
              <i className="fas fa-sign-out-alt mr-1"></i>Logout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
