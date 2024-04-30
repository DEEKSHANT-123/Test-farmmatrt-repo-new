import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./auth";

const Privateroute = ()=> {
    const {isaloggedIn}= useAuth();

    if(isaloggedIn){
        return <Outlet/>
    }else{
        return <Navigate  to={"/user/login"}/>;
    }
}


export default Privateroute;