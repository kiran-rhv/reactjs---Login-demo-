import { React } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopNavbar.scss";

function TopNavbar() {
  const usermail = localStorage.getItem("email");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo">LOGO</Navbar.Brand>
          <Nav className="ms-auto shodow-none">
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-btn shadow-none"
                variant="outline-success"
                id="dropdown-basic"
              >
                Profile
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/home">My Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/home">{usermail}</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/">Signout</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
