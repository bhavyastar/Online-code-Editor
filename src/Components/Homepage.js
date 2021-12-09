import React from 'react'
import "../Styling/Homepage.css"
import {Link } from "react-location"
import pic from "../Images/clu-soh-oga9Xg0KVnU-unsplash.jpg"
import Header from "./Header"
import Testing1 from "./Testing1"
import Homepage_Header from "../Components/Homepage_Header"
const Homepage = () => {
  return (
    <div>
    <Header />
    <Testing1/>
    
        <img className="pic" src={pic} alt="" />
        
          <div class="wrapper">
      <Homepage_Header/>
        <img className="pic" src={pic} alt="" />
        <div class="wrapper">
          <div className="trying_animation">
            <i id="fab0" class="fab fa-react"></i>
            <i id="fab1" class="fab fa-html5"></i>
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
</div>
  </div>
);
}
export default Homepage