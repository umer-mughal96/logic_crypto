import React from "react";

const Sidebar = () => {
  return (
    <div class="s-layout__sidebar">
      <a class="s-sidebar__trigger" href="#0">
        <i class="fa fa-bars"></i>
      </a>
      <nav class="s-sidebar__nav">
        <ul>
          <li>
            <a href="">
              <img src="files/images/knowledgepage/header-logo.svg" alt="" />
            </a>
          </li>
          <li>
            <a class="s-sidebar__nav-link" href="#0">
              {" "}
              <i class="fab fa-stumbleupon-circle"></i>
              <span>Rules</span>{" "}
            </a>
          </li>
          <li>
            <a class="s-sidebar__nav-link" href="#0">
              {" "}
              <i class="fas fa-exchange-alt"></i>
              <span>Exchange</span>{" "}
            </a>
          </li>
          <li>
            <a class="s-sidebar__nav-link" href="#0">
              {" "}
              <i class="fas fa-cog"></i>
              <span>Settings</span>{" "}
            </a>
          </li>
        </ul>
        <div class="row sidebar-button">
          <div class="offset-2 col-8">
            <a href="" class="btn d-block">
              Get plans
            </a>
          </div>
          <div class="offset-2 col-8">
            <a href="" class="btn d-block">
              Help Center
            </a>
          </div>
          <div class="offset-3 col-6 mt-2 pl-4">
            <a href="" class="logout">
              <i class="fas fa-sign-out-alt mr-1"></i>Logout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
