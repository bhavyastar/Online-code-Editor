import React from 'react'
import "../Styling/Homepage.css"
import {Link } from "react-location"
import home from "../Images/home.jpg"


 const Homepage = () => {
     return (
     <div>
     <img className ="pic" src = {home}></img>
    
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

    </div>
     );
 }
 export default Homepage