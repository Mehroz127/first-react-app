import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/navbar";
import "./App.scss"
const App = () => {
  return (
    <>
    <Navbar/> 
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/service" Component={Service} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </>
  );
};

export default App;
