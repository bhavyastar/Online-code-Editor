import React from 'react';
import { Route, ReactLocation } from "react-location";
import Homepage from "../Components/Homepage"
import Login from "../Components/Login"


export const routes: Route[] = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "login",
        element: <Login />
    },
];

export const location = new ReactLocation();