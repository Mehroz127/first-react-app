import React from "react";
import web from "../images/vecteezy_programmer-working-on-computer_4578621.svg"
import { NavLink } from "react-router-dom";
import Common from "./common";
const About = () => {
  return (
    <>
    <Common
        name="Welcome to know About "
        tagline="Contact us for more queries"
        btntext="Contact Us"
        btnsrc="/contact"
    />
    </>
  );
};

export default About;
