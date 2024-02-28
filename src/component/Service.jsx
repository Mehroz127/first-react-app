import React from "react";
import Card from "./Card";
import {data} from "./api"

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {data.map((curr,index)=>{
                return <Card
                    title={curr.title}
                    src={curr.imgsrc}
                    key={index}
                />

            })}
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
