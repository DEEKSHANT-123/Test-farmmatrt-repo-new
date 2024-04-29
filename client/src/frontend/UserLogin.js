import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";


// Styled components for UserLogin component
const UserLoginContainer = styled.div`
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

const UserLoginHeading = styled.h2`
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

const UserLogin = ({isloggedIn,check}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate=useNavigate();

//const { logoutHandler } = location.state;

const handleLogin = async (e) => {
e.preventDefault();

try {
const response = await fetch("http://localhost:5000/api/login", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ email, password }),
});

if (response.ok) {
alert("Login successful!");
check();
// window.location.href = "http://localhost:3000"; // Redirect on success
navigate('/');
} else {
throw new Error("Invalid email or password");
}
} catch (error) {
console.error("Login error:", error.message);
alert("Login failed. Please try again.");
}
};

return (
<UserLoginContainer>
<FormContainer>
<UserLoginHeading>User Login</UserLoginHeading>
{/* <form onSubmit={handleLogin}> */}
<form>
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
<Button type="submit" onClick={handleLogin}>Login</Button>
</form>
<p>
Not Registered Yet? <Link to="/signup">Sign up</Link>
</p>
</FormContainer>
</UserLoginContainer>
);
};

export default UserLogin;

