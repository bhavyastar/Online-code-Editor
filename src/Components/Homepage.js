import React from 'react'
import "../Styling/Homepage.css"
import {Link } from "react-location"

import Header from "./Header.js"
import Testing1 from './Testing1'
const Homepage = () => {
     return (
  <div>
  <Header />
  <div class="wrapper">
  <div class="typing-demo">
  CodeYourWay
  </div>
</div>
<Link to="/login"><button className="login">
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
<div className="video_section">
<Testing1/>
</div>
</div>
);
 }
 export default Homepage