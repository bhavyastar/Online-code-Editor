import React from 'react'
import "../Styling/Homepage_Header.css"
import img from "../Images/Logo.png"
import github2 from "../Images/github2.png"
const Homepage_Header = () =>{
return(
     
      <div className="container1">
          <img className="image" src={img} alt=""/>
              <div className="para">
                  <p className="about">About Us</p>
                  <p className="help">Help</p>
                 <img className="git" src={github2}/>
                  </div>
          </div>
    

)
}
export default Homepage_Header