import React from "react";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={About} path="/about" />
    </Routes>
  );
};

export default App;
