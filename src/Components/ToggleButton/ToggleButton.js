// import { render } from "@testing-library/react";
import { React, useState } from "react";
import { Button, Container, Fade } from "react-bootstrap";
import UserCard from "../UserCard/UserCard";
import "./ToggleButton.scss";

const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <div className="users-list">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="shadow-none btnStyle"
            variant="outline-success"
          >
            Users List
          </Button>
          <Fade in={open}>
            <div id="example-fade-text">
              <UserCard />
            </div>
          </Fade>
        </div>
      </Container>
    </>
  );
};

export default ToggleButton;
