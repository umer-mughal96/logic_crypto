import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const Header = withRouter(({location}) => {
  const { user } = useSelector((s) => s.Auth);


  const [active, setActive] = useState("");

  useEffect(() => {
    if (location.pathname == "/enth") {
      setActive("About");
    }
    if (location.pathname == "/pricing") {
      setActive("Pricing");
    }
    if (location.pathname == "/categories") {
      setActive("Learn");
    }
    if (location.pathname == "/invest") {
      setActive("Invest");
    }
    if (location.pathname == "/setting-dsh") {
      setActive("Dashboard");
    }
    if (location.pathname == "/signin") {
      setActive("Sign in");
    }
    if (location.pathname == "/") {
      setActive("Free class*");
    }
  }, [location.pathname]);

  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="700"
    >
      <div class="container ad-container">
        <div class="row">
          <div class="col-md-12 header-navbar">
            <nav class="navbar navbar-expand-lg navbar-light">
              <Link class="navbar-brand header-logo" to="/">
                <img src="files/images/knowledgepage/header-logo.svg" alt="" />
              </Link>
              <button
                class="navbar-toggler header-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto ad-navbar">
                  <Link onClick={() => setActive("About")} class={ active == "About" ?  `nav-item nav-link active` : "nav-item nav-link"} to="/enth">
                    About
                  </Link>
                  <Link onClick={() => setActive("Pricing")} class={ active == "Pricing" ?  `nav-item nav-link active` : "nav-item nav-link"} to="/pricing">
                    Pricing
                  </Link>
                  <Link onClick={() => setActive("Learn")} class={ active == "Learn" ?  `nav-item nav-link active` : "nav-item nav-link"} to="/categories">
                    Learn
                  </Link>
                  <Link onClick={() => setActive("Invest")} class={ active == "Invest" ?  `nav-item nav-link active` : "nav-item nav-link"} to="/invest">
                    Invest
                  </Link>
                  {user ? (
                    <Link onClick={() => setActive("Dashboard")} class={ active == "Dashboard" ?  `nav-item nav-link active` : "nav-item nav-link"} to="/setting-dsh">
                      Dashboard
                    </Link>
                  ) : (
                    <Link onClick={() => setActive("Sign in")} class={ active == "Sign in" ?  `nav-item nav-link active` : "nav-item nav-link"} to="/signin">
                      Sign in
                    </Link>
                  )}

                  <Link onClick={() => setActive("Free class*")} class="nav-item nav-link sign-up" to="/signup">
                    SignUp
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
