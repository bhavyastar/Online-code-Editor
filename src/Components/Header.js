import React from 'react'
import "../Styling/Header.css"
import img from "../Images/Logo.png"

const Header = () =>{
return(
     
      <div className="container1">
          <img className="image" src={img} alt=""/>
             <div className="head">
                 <h1>Code Your Way</h1>
                 </div>
              <div className="para">
                  <p>About Us</p>
                  </div>
          </div>
    

)
}
export default Header