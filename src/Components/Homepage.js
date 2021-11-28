import React from 'react'
import {Button} from 'react-bootstrap'
import "../Styling/Homepage.css"
import {Link } from "react-location"


 const Homepage = () => {
     return (
     <div> 
     <div class="wrapper">
    <div class="typing-demo">
      CodeYourWay
    </div>
</div>
<Link to="/login"><button className="login1">
  Login
</button>
</Link>
<button className="login2">
  Sign-up
</button>
    </div>
     );
 }
 export default Homepage