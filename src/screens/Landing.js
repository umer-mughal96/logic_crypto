import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container-fluid crypto-container">
      <div className="row">
        <div
          className="col-12 sign-in-form"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <form>
            <h5>Sign in</h5>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="sign-in-up">
              <div className="sign-in">
                <a href="#" type="submit" className="btn">
                  Sign in
                </a>
                <span className="sign-up">
                  {" "}
                  or <Link to='/signup'>sign up</Link>{" "}
                </span>
              </div>
              <div className="forgot-pwd">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
