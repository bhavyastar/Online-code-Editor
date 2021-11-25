import React,{useState} from 'react'
import "../Styling/Login.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header_Login from "./Header_Login"
import twitter from "../Images/twitter.png"
import github from "../Images/github.png"
import facebook from "../Images/facebook.png"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
    return (
      <div className="container_body">
        <Header_Login />
          <div className="Login">
            <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" controlId="email">
                <Form.Label className="username">Username or Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input_1"
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label className="pass">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input_2"
                />
              </Form.Group>
              <Button className="login_btn" block size="lg" type="submit" disabled={!validateForm()}>
                Login
              </Button>
          </Form>
          <Button className="twitter"><img className="twitter_logo" src={twitter} alt="" srcset="" /> Log In with Twitter</Button>
          <Button className="github"><img className="github_logo" src={github} alt="" srcset="" />Log In with GitHub</Button>
          <Button className="facebook"><img className="facebook_logo" src={facebook} alt="" srcset="" />Log In with Facebook</Button>
          </div>
        </div>
    );
  }


export default Login