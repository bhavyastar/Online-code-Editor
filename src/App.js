import React from "react";
import "./Styling/App.css"
import { Router, Outlet } from 'react-location';
import {routes, location } from "./Components/router"


function App() {
  return (
    <Router routes={routes} location={location}>
    <div>
        <Outlet />
      </div>
      </Router>
  );
}

export default App;
