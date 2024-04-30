import { createContext, useContext, useEffect, useState } from "react";


export const adminAuthContext = createContext();

export const AdminAuthProvider = ({ children}) => {
    const[adtoken, setadToken] = useState(localStorage.getItem("adtoken"));
    const[admin, setAdmin] = useState("");

    const storeadmintokenInLS = (adminserverToken) => {
        return localStorage.setItem("adtoken", adminserverToken);
    
    };
    // console.log(!!token);
    let isadloggedIn = !!adtoken;
    
    console.log("isadLoggedIn", isadloggedIn);

    const LogoutAdmin = () => {
        setadToken("");
        return localStorage.removeItem("adtoken");
    };

    // JWT AUTHENTICATION TO GET CURRENTLY LOGGEDIN ADMIN DATA 
     const adminAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/registered-admins", {
                method:"GET",
                headers:{
                    Authorization : `Bearer ${adtoken}`,
                },
            });
            if(response.ok){
                const data = await response.json();
                console.log("user data", data.admins);
                setAdmin(data.admins);

            }


        } catch (error) {
            console.log("Error fetching user data");
            
        }
     };

     useEffect(() => {
        adminAuthentication();
     }, []);

    return (
        <adminAuthContext.Provider value={{ isadloggedIn,storeadmintokenInLS, LogoutAdmin ,admin }}>
            {children}
        </adminAuthContext.Provider>
    );
};

export const useAdminAuth = () => {
    const AdminauthContextValue = useContext(adminAuthContext);
    if(!AdminauthContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return AdminauthContextValue;
}