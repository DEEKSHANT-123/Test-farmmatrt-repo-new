import {NavLink} from 'react-router-dom';

function helperwe({check,check1}){
    return 
    (
        <div><button className="dropbtn">LOGIN</button>
        <div className="dropdown-content">
        <NavLink
        className="navbar-link"
        onClick={check1}
        to="/admin/login" // Link for admin login
        >
        Admin Login
        </NavLink>
        <NavLink
        className="navbar-link"
        onClick={check1}
        to="/staff/login" // Link for admin login
        >
        Staff Login
        </NavLink>
        <NavLink
        className="navbar-link"
        onClick={check1}
        to="/staff/login"
        >
        User Login
        </NavLink>
        </div></div>
    );
}

export default helperwe;