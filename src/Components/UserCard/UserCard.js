import { React, useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./UserCard.scss";

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
            {userinfo.length &&
              userinfo.map((user) => {
                return (
                  <Col className="col-md-3">
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
                            <span>ID Number : </span>
                            <span>{user.id}</span>
                          </Card.Text>
                          <Card.Text>{user.email}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
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
