import React from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Home from "./Components/Home/Home";
import UserDetails from "./Components/UserDetails/UserDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/userdetails" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
