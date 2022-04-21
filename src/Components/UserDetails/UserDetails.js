import React, { useEffect } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../UserDetails/UserDetails.scss";

function UserDetails() {
  const location = useLocation();
  const { user } = location.state;
  useEffect(() => {
    console.log();
  });
  return (
    <div>
      <TopNavbar />
      <div>
        <Container className="single-user-detail">
          <Row className="user">
            <Col className="col-md-3 px-0 user-img">
              <img
                className="img-fluid avatar"
                src={user.avatar}
                alt="avatar"
              />
            </Col>
            <Col className="col-md-4 user-info">{user.first_name}</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default UserDetails;
