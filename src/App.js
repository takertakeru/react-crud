import * as React from "react";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
      <Home />
  );
}
