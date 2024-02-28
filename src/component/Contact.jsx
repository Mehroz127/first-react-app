import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        first:'',
        last:'',
        email:'',
        msg:''
    })
    const changeEvent = (e) =>{
        const {name,value} = e.target;
        setData((previous)=>{
            return{
                ...previous,
                [name]:value
            }
        })
    }
     const formSubmit = (e) =>{
        e.preventDefault();
        alert(`firstname: ${data.first} lastname:${data.last} email:${data.email} msg=>${data.msg}`)
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="first"
                  value={data.first}
                  onChange={changeEvent}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="last"
                  value={data.last}
                  onChange={changeEvent}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={changeEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={changeEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
