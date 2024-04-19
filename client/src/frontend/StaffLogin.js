import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

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

const FormButtonWithMargin = styled(FormButton)`
  margin-left: 10px; /* Add left margin to create space */
`;

const StaffLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/staff/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Login successful!");
        window.location.href = "http://localhost:3000/admindashboard"; // Redirect to Admin Dashboard on success
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
        <AdminLoginHeading>Staff Login</AdminLoginHeading>
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
          <Button type="submit">Login</Button>
          <FormButtonWithMargin onClick={handleGoToHome}>Go To Home</FormButtonWithMargin>
        </form>
      </FormContainer>
    </AdminLoginContainer>
  );
};

export default StaffLogin;
