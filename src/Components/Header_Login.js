import React from 'react'

import "../Styling/Header_Login.css"
import img from "../Images/Logo.png"
import { Button } from "react-bootstrap"


const Header_Login = () => {
    return (
        <div className="header_login">
            <img className="logo" src={img} alt="" />
            <p className="header_heading">CodeYourWay</p>
            <Button className="signup_btn" variant="outline-warning">Sign Up</Button>{' '}
        </div>
    )
}

export default Header_Login
