import React from 'react';
import { Route, ReactLocation } from "react-location";
import Homepage from "../Components/Homepage"
import Login from "../Components/Login"
import Testing1 from './Testing1';
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
    }
];

export const location = new ReactLocation();