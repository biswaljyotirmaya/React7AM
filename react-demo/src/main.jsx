/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import * as bootstrap from "bootstrap";
import Login from "./components/Login/Login.jsx";
import Variables from "./components/Binding/Variables.jsx";
import DataBinding from "./components/Binding/data-binding.jsx";
import ObjectBinding from "./components/Binding/object-binding.jsx";
import { DateBinding } from "./components/Binding/date-binding.jsx";
import Home from "./components/Netflix/Home.jsx";
import EventBinding from "./components/Binding/event-binding.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventBinding/>
  </StrictMode>
);
