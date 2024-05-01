import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Nav.css";
import { useAuth } from "./auth";
import { useEffect } from "react";
const Nav = styled.nav``;

const Navi = ({check,size}) => {
const {isaloggedIn, user } = useAuth();
const [showMediaIcons, setShowMediaIcons] = useState(false);

return (
<Nav className="main-nav">
    {/* 1st logo part */}
<div className="logo">
<h2>
<span>FarMart</span>
</h2>
</div>
<div
className={
showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
}>
<ul>
{/* Other navigation links... */}
<li>
<NavLink
className="navbar-link"

to="/"
>
Home
</NavLink>
</li>
<li>
<NavLink
className="navbar-link"

to="/about"
>
About
</NavLink>
</li>

<li>
<NavLink
className="navbar-link"

to="/contact"
>
Contact
</NavLink>
</li>

<li>
<NavLink
className="navbar-link"
to="/user/farmartfarm"
>
Products
</NavLink>
</li>
 {isaloggedIn &&(
    <li>
    <h3>Welcome {user.username}</h3>
    </li>
)} 

<li>
<div className="dropdown">
<div>
{isaloggedIn ? (
// Render logout button if user is logged in
<NavLink className="navbar-link" to = "/logout">LOGOUT</NavLink>
) : (
// Render login button if user is not logged in
<div><button className="dropbtn">LOGIN</button>
<div className="dropdown-content">
<NavLink
className="navbar-link"

to="/admin/login" // Link for admin login
>
Admin Login
</NavLink>

<NavLink
className="navbar-link"

to={{
pathname: "/user/login"
}}
>
User Login
</NavLink>
</div></div>
)}
</div>
</div>
</li>




</ul>
</div>
{/* Mobile menu toggle buttons... */}
<div className="social-media">

<ul className="social-media-desktop">
<li>
<NavLink
className="navbar-link"

to="/search"
>
<FaSearch />
</NavLink>
</li>


<li>

<NavLink
className="navbar-link"

to="/cart"
>
{/* <FaCartShopping /> */}
<FaShoppingCart />
<span>{size}</span>
</NavLink>
</li>
</ul>

{/* hamburget menu start */}
<div className="hamburger-menu">
<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
<GiHamburgerMenu />
</a>
</div>
</div>

</Nav>
);
};

export default Navi;
