import React, { useState } from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import axios from "axios";
import { useAuth } from "./auth";


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

const UserLogin = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
//const navigate=useNavigate();
const { storetokenInLS}= useAuth();
//const {isaloggedIn}= useAuth();

//const { logoutHandler } = location.state;

const handleLogin = async (e) => {
e.preventDefault();

try {
    const details = {
        email : email,
        password : password
    }
const response = await axios.post("http://localhost:8000/api/login", details);

if (response.status === 200) {
alert("Login successful!");

storetokenInLS(response.data.token);

// window.location.href = "http://localhost:3000"; // Redirect on success
window.location.href = '/';
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

