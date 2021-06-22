import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { errorNotification } from "../utils/notification";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, userSignin, userSignUp } from "../actions/auth/auth";

const ForgotPassword = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const dispatch = useDispatch();
  const { loading, user } = useSelector((s) => s.Auth);

  const { email } = formData;

  const fornmHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const signInHandler = (e) => {
    e.preventDefault();

    if (!email) {
      errorNotification("Email Required");
      return;
    }

    dispatch(forgotPassword(history, formData));
  };

  useEffect(() => {
    if (user) {
      history.push("/setting-dsh");
    }
  }, []);
  return (
    <div className="container-fluid crypto-container">
      <div className="row">
        <div
          className="col-12 sign-in-form"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <form>
            <h5>Forgot Password</h5>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                onChange={(e) => fornmHandler(e)}
                value={email}
              />
            </div>
            <div className="sign-in-up">
              <div className="sign-in">
                <button
                  disabled={loading}
                  onClick={(e) => signInHandler(e)}
                  className="btn"
                >
                  Submit
                </button>
                <span className="sign-up">
                  {" "}
                  or <Link to="/signup">sign up</Link>{" "}
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

export default ForgotPassword;
