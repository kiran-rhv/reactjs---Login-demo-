import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import "./Register.scss";
import * as Yup from "yup";
import { TextField } from "../TextField/TextField";
import axios from "axios";

function Register() {
  const validate = Yup.object().shape({
    // firstName: Yup.string()
    //   .max(15, "Must be 15 characters or less")
    //   .required("First name is required"),

    // lastName: Yup.string()
    //   .max(10, "Must be 10 characters or less")
    //   .required("Last name is required"),

    email: Yup.string()
      .email("Enter valid mail ID")
      .required("Email-ID required"),

    password: Yup.string()
      .min(6, "Password must be 6 characters.")
      .required("Password is required"),

    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Password must match")
    //   .required("Confirm password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          // firstName: "",
          // lastName: "",
          email: "",
          password: "",
          // confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          // let FirstName = values.firstName;
          // let LastName = values.lastName;
          let email = values.email;
          let pwd = values.password;
          axios({
            method: "post",
            url: "https://reqres.in/api/register",
            data: {
              email: email,
              password: pwd,
            },
          })
            .then((response) => {
              if (response.status === 200) {
                window.location = "/home";
              } else {
                alert("Invalid");
              }
            })
            .catch((err) => {
              console.log("POST err", err);
            });
        }}
      >
        {(props) => (
          <Container className="register">
            <Row className="align-items-center register-content">
              <Col className="col-md-6">
                <div className="d-flex justify-content-center">
                  {/* {console.log(Formik.values)} */}
                  <Form className="register-form-css">
                    {/* <TextField
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                    <TextField
                      label="Last Name"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    /> */}
                    <TextField
                      label="Email ID"
                      name="email"
                      type="email"
                      placeholder="Email ID"
                    />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    {/* <TextField
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                    /> */}
                    <Button
                      className="my-3 shadow-none btn-register-submit font-roboto"
                      variant="outline-success"
                      type="submit"
                      // disabled={props.isValid === false}
                    >
                      Register
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col className="col-md-6 text-center register-side">
                <div className="justify-content-center">
                  <h1>Already Member?</h1>
                  <div>
                    <Link className="font-roboto back-to-login" to="/">
                      Login
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </>
  );
}

export default Register;
