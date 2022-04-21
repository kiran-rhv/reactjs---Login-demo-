import { React, useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardClip, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function UserCard() {
  const [userinfo, setuserinfo] = useState([]);

  const getData = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => {
        const userslist = res.data;
        setuserinfo(userslist);
        // console.log("testing", userinfo);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Container>
        <div className="user-card">
          <Row>
            <div className="user-heading text-white">
              <h1>Users</h1>
            </div>
            {userinfo.length &&
              userinfo.map((user) => {
                return (
                  <Col className="col-md-3">
                    <Link
                      className="user"
                      state={{ user: user }}
                      to="/userdetails"
                    >
                      <div key={user.id}>
                        <Card className="card-style">
                          <div className="card-avatar">
                            <Card.Img
                              variant="top"
                              className="card-img"
                              src={user.avatar}
                            />
                          </div>
                          <Card.Body>
                            <Card.Title>
                              {`${user.first_name} ${user.last_name}`}
                            </Card.Title>
                            <Card.Text className="font-weight-bold">
                              <span className="fontawesome-icon">
                                <FontAwesomeIcon icon={faIdCardClip} />
                              </span>
                              <span className="ms-2">{user.id}</span>
                            </Card.Text>
                            <Card.Text>
                              <span className="fontawesome-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                              </span>
                              <span className="ms-2">{user.email}</span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default UserCard;
