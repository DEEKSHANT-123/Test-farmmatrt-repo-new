import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

// Styled components for SignUp component
const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://t3.ftcdn.net/jpg/06/05/61/50/360_F_605615034_RpMGRrK65iKPBBJNMhAM0y03tdMiA9vB.jpg");
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

const SignUpHeading = styled.h2`
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

const ErrorMessage = styled.p`
  color: red;
`;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        setSignedUp(true);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Signup failed. Please try again.");
    }
  };

  if (signedUp) {
    window.location.href = "/user/login"; // Navigate using window.location
  }

  return (
    <SignUpContainer>
      <FormContainer>
        <SignUpHeading>Sign Up</SignUpHeading>
        <form onSubmit={handleSignUp}>
          <StyledInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <Button type="submit">Sign Up</Button>
        </form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <p>
          Already Registered? <Link to="/user/login">Log In</Link>
        </p>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUp;