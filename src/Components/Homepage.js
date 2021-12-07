import React from 'react'
import "../Styling/Homepage.css"
import {Link } from "react-location"
import pic from "../Images/clu-soh-oga9Xg0KVnU-unsplash.jpg"
 import testing1 from "./Testing1"
import Testing1 from './Testing1'

import Header from "./Header.js"

 
const Homepage = () => {
     return (
     <div>
      <img className ="pic" src = {pic}></img> 
    {/* <div className="border-1"></div> */}
    
    
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