import React from 'react'
import "../Styling/Homepage.css"
import {Link } from "react-location"
import pic from "../Images/clu-soh-oga9Xg0KVnU-unsplash.jpg"

import Testing1 from './Testing1'

import cpp from "../Images/cpp.png"

import HomepageHeader from "../Components/Homepage_Header"
const Homepage = () => {
  return (
    <>
    
    <Testing1/>
    <HomepageHeader/>
    <img className="pic" src={pic} alt="" />
        <div class="wrapper">
        <i id="react_logo" class="fab fa-react"></i>
        <p id="react0_written">REACT</p>
          <div className="trying_animation">
          <i id="java" class="fab fa-java"></i>
          <img id="cpp" src={cpp} alt="" srcset="" />
          <p id="react1_written">JAVA</p>
          <p id="react2_written">C++</p>
            </div>
          <div className="trying1_animation">
            <i id="fab0" class="fab fa-js"></i>
            <i id="fab1" class="fab fa-bootstrap"></i>
            <p id="react3_written">JAVASCRIPT</p>
            <p id="react4_written">BOOTSTRAP</p>
            </div>
            <div class="typing-demo">
              CodeYourWay
            </div>
          </div>
      <Link to="/login">
        <button className="login">
          <span className="front">
            <div className="login-a">Login</div>
        </span>
        </button>
      </Link>
      <button className="sign-up">
      <span className="front1">
        <div className="signup-a">Signup</div>
      </span>
      </button>
      <span className="scroll">
        scroll for more
        <i class="fas fa-angle-double-down"></i>
      </span>

  

    
</>
);
}
export default Homepage