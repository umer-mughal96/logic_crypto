import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { errorNotification } from "../utils/notification";
import { useDispatch, useSelector } from "react-redux";
import { userResetPassword} from "../actions/auth/auth";

const ResetPassword = ({ history }) => {
  const [formData, setFormData] = useState({
    token: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const { loading, user } = useSelector((s) => s.Auth);

  const { token, password, confirmPassword } = formData;

  const fornmHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const signInHandler = (e) => {
    e.preventDefault();

    if (!token) {
      errorNotification("Token Required");
      return;
    }
    if (!password) {
      errorNotification("Password Required");
      return;
    }

    if (password !== confirmPassword) {
      errorNotification("Password don't match");
      return;
    }

    dispatch(userResetPassword(history, formData));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12 sign-in-form"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <form>
            <h5>Reset Password</h5>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="email"
                placeholder="Token"
                name="token"
                onChange={(e) => fornmHandler(e)}
                value={token}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="New Password"
                name="password"
                onChange={(e) => fornmHandler(e)}
                value={password}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Re-Type Password"
                name="confirmPassword"
                onChange={(e) => fornmHandler(e)}
                value={confirmPassword}
              />
            </div>
            <div className="sign-in-up">
              <div className="sign-in">
                <button
                  disabled={loading}
                  onClick={(e) => signInHandler(e)}
                  className="btn"
                >
                  Reset Password
                </button>
                <span className="sign-up">
                  {" "}
                  or <Link to="/signin">signin</Link>{" "}
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

export default ResetPassword;
