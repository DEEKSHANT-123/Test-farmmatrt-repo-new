import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAdminAuth } from "./adminauth"; 

const Privateadminroute = ()=> {
    const {isadloggedIn}= useAdminAuth();

    if(isadloggedIn){
        return <Outlet/>
    }else{
        return <Navigate  to={"/admin/login"}/>;
    }
}


export default Privateadminroute;