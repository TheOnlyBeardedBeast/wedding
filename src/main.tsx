import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Hamburger } from "./Hamburger";
import "./index.css";
import { Info } from "./Info";
import { Menu } from "./Menu";
import { Photos } from "./Photos";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Hamburger />
    <App />
    <Info />
    <Menu />
    <Photos />
  </React.StrictMode>
);
