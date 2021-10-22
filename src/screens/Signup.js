import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { errorNotification } from "../utils/notification";
import { useDispatch, useSelector } from 'react-redux'
import { userSignUp } from "../actions/auth/auth";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";



const Signup = ({ history }) => {

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch()
  const { loading, user } = useSelector((s) => s.Auth)


  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    lastName: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short")
      .matches(/(?=.*[A-Z])/, "Password Must Contain Upper letter")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),

    confirmPassword: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short")
      .matches(/(?=.*[A-Z])/, "Password Must Contain Upper letter")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
      .oneOf([Yup.ref('password'), null], "Password must match")

  });


  const submitHandler = (values) =>{
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
      validationSchema={SignUpSchema}
      onSubmit={submitHandler}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty,values } = formik;
        console.log(values)
        
        return (

          <div className="container-fluid crypto-container">
            <div className="row">
              <div className="col-12 sign-in-form">
                <Form>
                  <h5>Sign up</h5>
                  <div className="form-group">
                    <Field
                      type="text"
                      className={`form-control ${errors.firstName && touched.firstName ?
                        "input-error" : null}`}
                      id="fname"
                      name="firstName"
                      placeholder="Name"
                    />
                    <ErrorMessage name="firstName" component="span" className="error" style={{color: 'red'}}/>

                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      className={`form-control ${errors.lastName && touched.lastName ?
                        "input-error" : null}`}
                      id="lname"
                      placeholder="Last Name"
                      name="lastName"
                      
                    />
                    <ErrorMessage name="lastName" component="span" className="error" style={{color: 'red'}}/>

                  </div>
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
                  <div className="form-group">
                    <Field
                      type="password"
                      className={`form-control ${errors.confirmPassword && touched.confirmPassword ?
                        "input-error" : null}`}
                      id="confirmpassword"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                    />
                    <ErrorMessage name="confirmPassword" component="span" className="error" style={{color: 'red'}}/>

                  </div>
                  <div className="sign-in-up">
                    <div className="sign-in">
                      <button
                        className={`btn ${!(dirty && isValid) ? "disabled-btn" : ""}`}
                        disabled={!(dirty && isValid)}
                        onClick={() =>  {
                          if(isValid){
                            dispatch(userSignUp(values, history))
                          }
                        }}
                        >
                        Sign up
                      </button>
                      <span className="sign-up">
                        {" "}
                        or <Link to="/signin">sign in</Link>{" "}
                      </span>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>

        )
      }}
    </Formik>


  );
};

export default Signup;
