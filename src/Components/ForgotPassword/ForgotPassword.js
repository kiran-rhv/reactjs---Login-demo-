import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./ForgotPassword.scss";

function ForgotPassword() {
  return (
    <Container className="forgot-pwd">
      <Row className="align-items-center forgot-pwd-content">
        <Link className="ms-2 font-roboto" to="/">
          <span className="fontawesome-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <Col className="col-md-6 py-5 text-center">
          <h1 className="title text-white font-roboto">Forgot Password?</h1>
          <span className="title-text text-white font-roboto">
            Do worry we got you😉
          </span>
        </Col>
        <Col className="col-md-6 d-flex justify-content-center">
          <Form className="form-css">
            <div className="mb-2">
              <input
                className="form-control user-input px-0 font-roboto"
                type="text"
                placeholder="Email ID"
              />
            </div>
            <div>
              <Button
                className="btn-submit mt-3 font-roboto shadow-none"
                variant="outline-success"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPassword;
