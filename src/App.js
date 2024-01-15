import React from "react";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";
import Service from "./pages/Service";

const App = () => {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={About} path="/about" />
      <Route Component={Service} path="/service" />
    </Routes>
  );
};

export default App;
