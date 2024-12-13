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
import EventPropagation from "./components/Binding/event-propagation.jsx";
import AjaxPractice from "./components/Binding/ajax-practice.jsx";
import MouseEvent from "./components/Binding/mouse-event.jsx";
import Debounce from "./components/Binding/debounce-demo.jsx";
import DebounceDemo2 from "./components/Binding/debounce-demo2.jsx";
import FakestoreDemo from "./components/Binding/fakestore-product.jsx";
import ClipBoard from "./components/Binding/clip-board.jsx";
import ReactForms from "./components/Binding/reat-form.jsx";
import FormitForms from "./components/Binding/formik-form.jsx";
import FormikDemo from "./components/Froms/formik-demo.jsx";
import YupDemo from "./components/Froms/formik-yup-demo.jsx";
import FormikComponets from "./components/Froms/formik-components.jsx";
import ReactHookForm from "./components/Froms/react-hook-form.jsx";
import ControlledNavbar from "./components/Controlled Component/controlled-navbar.jsx";
import ControlledGrid from "./components/Controlled Component/controlled-grid.jsx";
import CustomDemo from "./components/Controlled Component/custom-demo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomDemo />
  </StrictMode>
);
