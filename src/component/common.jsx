import React from "react";
import web from "../images/vecteezy_programmer-working-on-computer_4578621.svg"
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
    <div id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 left d-flex justify-content-center flex-column">
                <h1 className="">
                    {props.name}<strong className="brand-name">MehrozFarooq</strong>
                </h1>
                <h2 className="my-3">
                    {props.tagline}
                </h2>
                <div className="mt-3">
                    <NavLink to={props.btnsrc} className="btn-get-started">{props.btntext}</NavLink>
                </div>
            </div>
            <div className="col-lg-6 pt-lg-0 order-1 order-lg-2 right">
                <img src={web} className="img-fluid animation" alt="Common img" />
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Common;
