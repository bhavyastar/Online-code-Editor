import React from "react";
import "./Styling/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login"
import Testing1 from "./Components/Testing1";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login />}/>
      </Routes>
    <div>
      <Testing1/>
    
      </div>
      </BrowserRouter>
  );
}

export default App;
