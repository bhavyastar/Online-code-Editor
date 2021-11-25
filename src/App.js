import React from "react";
import "./Styling/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login"
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/header" element={<Header />}/>
      </Routes>
    <div>
      
      </div>
      </BrowserRouter>
  );
}

export default App;
