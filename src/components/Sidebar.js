import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/auth/auth";
import { withRouter } from "react-router-dom";

const Sidebar = withRouter(({ history, location }) => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((s) => s.Auth);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (location.pathname == "/rule-dsh") {
      setActive("Rules");
    }
    if (location.pathname == "/exchange-dsh") {
      setActive("Exchange");
    }
    if (location.pathname == "/setting-dsh") {
      setActive("Settings");
    }
  }, [location.pathname]);

  return (
    <div className="s-layout__sidebar">
      <div className="s-sidebar__trigger">
        <i className="fa fa-bars"></i>
      </div>
      <nav className="s-sidebar__nav">
        <ul>
          <li>
            <Link to="/">
              <img src="files/images/knowledgepage/header-logo.svg" alt="" />
            </Link>
          </li>
          <li>
            <div
              className={
                active == "Rules" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/rule-dsh");
              }}
            >
              {" "}
              <i className="fab fa-stumbleupon-circle"></i>
              <span>Rules</span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "Exchange" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/exchange-dsh");
              }}
            >
              {" "}
              <i className="fas fa-exchange-alt"></i>
              <span>Exchange</span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "Settings" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/setting-dsh");
              }}
            >
              {" "}
              <i className="fas fa-cog"></i>
              <span>Settings</span>{" "}
            </div>
          </li>
        </ul>
        <div className="row sidebar-button">
          <div className="offset-2 col-8">
            <Link to="/pricing" className="btn d-block">
              Get plans
            </Link>
          </div>
          <div className="offset-2 col-8">
            <Link to="/knowledge" className="btn d-block">
              Help Center
            </Link>
          </div>
          <div
            className="logout offset-3 col-6 mt-2 pl-4"
            onClick={() => dispatch(userLogout(history))}
          >
            <i className="fas fa-sign-out-alt mr-1"></i>
            Logout
          </div>
        </div>
      </nav>
    </div>
  );
});

export default Sidebar;
