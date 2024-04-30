import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";
import App from "./App";

import { AppProvider } from "./context/productcontext";
import { AuthProvider } from "./frontend/auth";
import { AdminAuthProvider } from "./frontend/adminauth";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    
    <AuthProvider>
      <AdminAuthProvider>
    <AppProvider>
    <App />
    
  </AppProvider>
  </AdminAuthProvider>
  </AuthProvider>

);

   