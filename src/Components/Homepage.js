import React from 'react'
import "../Styling/Homepage.css"
import {Link } from "react-location"
 import pic from "../Images/home.jpg"


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
</div>
    
     );
 }
 export default Homepage