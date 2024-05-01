import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { useAdminAuth } from "./adminauth";
import axios from "axios";

const AdminLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://img.freepik.com/free-photo/farmland_1112-1235.jpg");
  background-size: cover;
  background-position: center;
`;

const FormContainer = styled.div`
  max-width: 400px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AdminLoginHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

const FormButton = styled(Button)`
  margin-top: 10px;
`;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{ storeadmintokenInLS }= useAdminAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const admindetails = {
      email : email,
      password : password
  }
  
const response = await axios.post("http://localhost:5000/api/admin/login", admindetails);

      if (response.status === 200) {
      
        alert("Login successful!");

        storeadmintokenInLS(response.data.token);
        // Redirect to UserDashboard upon successful login
        //window.location.href = "http://localhost:3000/admindashboard";
        window.location.href ='/private/admindashboard';
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed. Please try again.");
    }
  };

  const handleGoToHome = () => {
    window.location.href = "http://localhost:3000"; // Redirect to home page
  };

  return (
    <AdminLoginContainer>
      <FormContainer>
        <AdminLoginHeading>Admin Login</AdminLoginHeading>
        {!isLoggedIn ? (
          <form onSubmit={handleLogin}>
            <StyledInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <StyledInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FormButton type="submit">Login</FormButton>
            <FormButton onClick={handleGoToHome}>Go To Home</FormButton>
          </form>
        ) : (
          // Render a message or redirect logic here
          // For demonstration, we'll redirect upon successful login
          <p>Redirecting...</p>
        )}
      </FormContainer>
    </AdminLoginContainer>
  );
};

export default AdminLogin;
