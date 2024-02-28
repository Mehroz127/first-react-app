import React from "react";
import web from "../images/vecteezy_programmer-working-on-computer_4578621.svg"
import { NavLink } from "react-router-dom";
import Common from "./common";
const Home = () => {
  return (
    <>
    <Common
        name="Grow Your business with "
        tagline="We are the team of senior developer making websites"
        btntext="Get Started"
        btnsrc="/service"
    />
    </>
  );
};

export default Home;
