import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const[token, setToken] = useState(localStorage.getItem("token"));
    const[user, setUser] = useState("");

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    
    };
    // console.log(!!token);
    let isaloggedIn = !!token;
    
    console.log("isLoggedIn", isaloggedIn);

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWT AUTHENTICATION TO GET CURRENTLY LOGGEDIN USER DATA 
     const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/registered-users", {
                method:"GET",
                headers:{
                    Authorization : `Bearer ${token}`,
                },
            });
            if(response.ok){
                const data = await response.json();
               // console.log("user data", data.users);
                setUser(data.users);

            }


        } catch (error) {
            console.log("Error fetching user data");
            
        }
     };

     useEffect(() => {
        userAuthentication();
     }, []);

    return (
        <AuthContext.Provider value={{ isaloggedIn,storetokenInLS, LogoutUser , user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}