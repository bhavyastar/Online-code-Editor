import React from "react";
import "./Styling/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login />}/>
      </Routes>
    <div>
      
      </div>
      </BrowserRouter>
  );
}

export default App;
