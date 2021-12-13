import React from 'react'
import "../Styling/Footer.css"
import { GoMarkGithub } from "react-icons/go";
import { VscTwitter } from "react-icons/vsc";

const Footer = () =>{

    return(
    
        <div className='footer'>
            <h1 className="head"> LET'S GET STARTED </h1>
            <div className="line">
                <hr className="line_a"></hr>
                <hr className="line_b"></hr>
                <hr className="line_c"></hr>
                </div>
            <div className="middle">
                <h1 className="heading">CODEYOURWAY</h1>
                <div className="icons">
                    <VscTwitter></VscTwitter>
                    <GoMarkGithub></GoMarkGithub>
                    </div>
                <p className="vl"></p>
               <h1 className="contact">CONTACT US</h1>
               <input className="email" type="email" placeholder="ENTER YOUR E-MAIL"></input>
            </div>
            <div className="below">
                <h1>BACK TO TOP </h1>
            </div>
            <div className="line2">
                <hr className="line_2a"></hr>
                <hr className="line_2b"></hr>
                <hr className="line_2c"></hr>
                </div>
            <div className="bottom">
                <p className="item1">COUNTRY</p>
                <p className="item2">LANGUAGES</p>
                <p className="item3">LEGAL TERMS</p>
                <p className="item4">PRIVACY POLICY</p>
                <p className="item5">REPORT</p>
            </div>
            
          
        </div>
        
        
       






)
}
export default Footer
