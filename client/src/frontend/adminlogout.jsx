import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "./adminauth";

export const AdminLogout = () =>{
    const {LogoutAdmin} = useAdminAuth();

    useEffect(() =>{
        LogoutAdmin();
    }, [LogoutAdmin]);

    return < Navigate to="/admin/login" />;
}