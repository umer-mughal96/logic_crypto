import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { errorNotification } from "../utils/notification";
import { useDispatch, useSelector } from "react-redux";
import { userSignin } from "../actions/auth/auth";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signin = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, user } = useSelector((s) => s.Auth);

  const SignInSchema = Yup.object().shape({

    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short")
      .matches(/(?=.*[A-Z])/, "Password Must Contain Upper letter")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),

  });

  const submitHandler = (values) => {
    setFormData(values)
    // console.log([e.target.value])
  }


  useEffect(() => {
    if (user) {
      history.push('/setting-dsh')
    }
  }, [])
  return (



    <Formik
      initialValues={formData}
      validationSchema={SignInSchema}
      onSubmit={submitHandler}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty, values } = formik;

        return (

          <div className="container-fluid crypto-container">
            <div className="row">
              <div className="col-12 sign-in-form"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                <Form>
                  <h5>Sign In</h5>

                  <div className="form-group">
                    <Field
                      type="email"
                      className={`form-control ${errors.email && touched.email ?
                        "input-error" : null}`}
                      id="email"
                      placeholder="Email"
                      name="email"
                    />
                    <ErrorMessage name="email" component="span" className="error" style={{color: 'red'}}/>

                  </div>
                  <div className="form-group">
                    <Field
                      type="password"
                      className={`form-control ${errors.password && touched.password ?
                        "input-error" : null}`}
                      id="password"
                      placeholder="Password"
                      name="password"
                    />
                    <ErrorMessage name="password" component="span" className="error" style={{color: 'red'}}/>

                  </div>

                  <div className="sign-in-up">
                    <div className="sign-in">
                      <button
                        className={`btn ${!(dirty && isValid) ? "disabled-btn" : ""}`}
                        disabled={!(dirty && isValid)}
                        onClick={() => {
                          if (isValid) {
                            dispatch(userSignin(values, history))
                          }
                        }}
                      >
                        Sign in
                      </button>
                      <span className="sign-up">
                        {" "}
                        or <Link to="/signin">sign Up</Link>{" "}
                      </span>
                    </div>
                    <div className="forgot-pwd">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>

        )
      }}
    </Formik>























    // <div className="container-fluid crypto-container">
    //   <div className="row">
    //     <div
    //       className="col-12 sign-in-form"
    //       data-aos-easing="linear"
    //       data-aos-duration="700"
    //     >
    //       <form>
    //         <h5>Sign in</h5>
    //         <div className="form-group">
    //           <input
    //             type="email"
    //             className="form-control"
    //             id="email"
    //             placeholder="Email"
    //             name="email"
    //             onChange={(e) => fornmHandler(e)}
    //             value={email}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <input
    //             type="password"
    //             className="form-control"
    //             id="password"
    //             placeholder="Password"
    //             name="password"
    //             onChange={(e) => fornmHandler(e)}
    //             value={password}
    //           />
    //         </div>
    //         <div className="sign-in-up">
    //           <div className="sign-in">
    //             <button disabled={loading} onClick={(e) => signInHandler(e)} className="btn">
    //               Sign in
    //             </button>
    //             <span className="sign-up">
    //               {" "}
    //               or <Link to="/signup">sign up</Link>{" "}
    //             </span>
    //           </div>
    //           <div className="forgot-pwd">
    //             <a href="#">Forgot Password?</a>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signin;
