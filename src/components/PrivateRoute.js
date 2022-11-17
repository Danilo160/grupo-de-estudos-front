import React from "react";
import { Outlet,Navigate } from "react-router-dom";
const getToken = window.localStorage.getItem("token")

const PrivateRoute = () => {
    let auth = {'token': getToken}
    return(
      auth.token ? <Outlet/> :<Navigate to="/login"/> 
    )
};

export default PrivateRoute;