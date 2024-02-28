import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
    
        <div className="col-md-4 col-10 mx-auto ">
        <div className="card">
          <img src={props.src} className="card-img-top img-thumbnail" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Create website in professional way</p>
            <NavLink to="/service" className="btn btn-primary">
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
       

      
    </>
  );
};

export default Card;
