import React from 'react';
import { Route, ReactLocation } from "react-location";
import Homepage from "../Components/Homepage"
import Login from "../Components/Login"
import Testing1 from './Testing1';
import Homepage_Header from "../Components/Homepage_Header"
import Footer from './Footer';
import Header from "../Components/Header";
import codeEditor from "../Components/codeEditor";
export const routes: Route[] = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path:"testing",
        element:<Testing1/>
    },
    {
    path: "button",
        element: <Header />
    },
    {
    path: "code",
          element: <codeEditor />
          
          
    },
          
    {
        path: "h_header",
        element: <Homepage_Header/>
    },
    {
        path: "footer",
        element: <Footer/>
    },
];

export const location = new ReactLocation();