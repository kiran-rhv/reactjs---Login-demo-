import { React } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
// import ToggleButton from "../ToggleButton/ToggleButton";
import UserCard from "../UserCard/UserCard";
// import "./Home.scss";

function Home() {
  return (
    <>
      <div>
        <TopNavbar />
        {/* <ToggleButton /> */}
        <UserCard />
      </div>
    </>
  );
}

export default Home;
