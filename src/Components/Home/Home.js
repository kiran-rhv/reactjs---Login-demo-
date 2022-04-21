import { Button } from "react-bootstrap";
import { React } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import UserCard from "../UserCard/UserCard";
// import "./Home.scss";

function Home() {
  return (
    <>
      <TopNavbar />
      <div className="m-5">
        <Button variant="outline-primary" className="shadow-none">
          List Users
        </Button>
      </div>
      <UserCard />
    </>
  );
}

export default Home;
