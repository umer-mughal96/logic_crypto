import React, { useState } from "react";
import { Link } from "react-router-dom";
import { errorNotification } from "../utils/notification";
import {useDispatch , useSelector} from 'react-redux'
import { userSignUp } from "../actions/auth/auth";



const Signup = ({history}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch()
  const user = useSelector((s) => s.Auth)
  console.log("🚀 ~ file: Signup.js ~ line 19 ~ Signup ~ user", user)

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const fornmHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  const onSignupHandler = e => {
    e.preventDefault();
    if(!firstName){
      errorNotification('Name Required')
      return
    }
    if(!lastName){
      errorNotification('Name Required')
      return
    }
    if(!email){
      errorNotification('Email Required')
      return
    }
    if(!password){
      errorNotification('Password Required')
      return
    }
    if(!confirmPassword){
      errorNotification('Confirm Password Required')
      return
    }
    if(password !== confirmPassword){
      errorNotification('Password dont match')
      return
    }

    dispatch(userSignUp(formData,history))

  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 sign-in-form">
          <form>
            <h5>Sign up</h5>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="fname"
                name="firstName"
                onChange={(e) => fornmHandler(e)}
                placeholder="Name"
                value={firstName}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Last Name"
                name="lastName"
                onChange={(e) => fornmHandler(e)}
                value={lastName}
              />
            </div>
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
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                onChange={(e) => fornmHandler(e)}
                value={password}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => fornmHandler(e)}
                value={confirmPassword}
              />
            </div>
            <div className="sign-in-up">
              <div className="sign-in">
                <button href="#" type="submit" className="btn" onClick={(e) => onSignupHandler(e)}>
                  Sign up
                </button>
                <span className="sign-up">
                  {" "}
                  or <Link to="/signin">sign in</Link>{" "}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
