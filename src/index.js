import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Fonts/Montserrat/Montserrat-Regular.ttf";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
