import { React } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./Login.scss";
import { Link } from "react-router-dom";
import { TextField } from "../TextField/TextField";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function Login() {
  const LoginValidate = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid mail ID")
      .required("Email-ID required"),

    password: Yup.string().required("Password is required"),
  });

  // Save user Mail in local storage
  // const [userMail, setuserMail] = useState([]);
  // useEffect(() => {
  //   localStorage.setItem("userMail", JSON.stringify(userMail));
  // }, [userMail]);

  // Save user Pwd in local storage
  // const [userPwd, setuserPwd] = useState([]);
  // useEffect(() => {
  //   localStorage.setItem("userPwd", JSON.stringify(userPwd));
  // }, [userPwd]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        let emailID = values.email;
        let Pwd = values.password;

        axios({
          method: "POST",
          url: "https://reqres.in/api/login",
          data: {
            email: emailID,
            password: Pwd,
          },
        })
          .then((response) => {
            console.log("response", response);
            if (response.status === 200) {
              const acccesstoken = response.data.token;
              console.log("Acccess token-Value : ", acccesstoken);
              const email = values.email;
              console.log("MAIL-ID : ", email);

              localStorage.setItem("AccessToken", acccesstoken);
              localStorage.setItem("email", email);
              window.location = "/home";
            } else {
              alert("Unable to Login. Pls Verify Email-ID and Password");
            }
          })
          .catch((err) => {
            console.log("GET err", err);
            alert("Unable to Login. Pls Verify Email-ID and Password");
          });
      }}
      validationSchema={LoginValidate}
    >
      {(props) => (
        <Container className="login">
          <Row className="align-items-center login-content">
            <Col className="text-center">
              <h1 className="title font-roboto">Login</h1>
              <span className="title-text font-roboto">No account?</span>
              <Link className="ms-2 register font-roboto" to="/register">
                Sign Up
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Form className="form-css" autoComplete="off">
                <div className="mb-2">
                  <TextField
                    label="Email ID"
                    name="email"
                    type="email"
                    placeholder="Email ID"
                  />
                </div>
                <div className="mb-2 d-flex flex-row password-form">
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  {/* <span className="fontawesome-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </span> */}
                </div>
                <div className="mt-2">
                  <Link
                    className="w-50 forgot font-roboto"
                    to="/forgotpassword"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div>
                  <Button
                    className="btn-submit mt-3 font-roboto shadow-none"
                    variant="outline-success"
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
}

export default Login;
