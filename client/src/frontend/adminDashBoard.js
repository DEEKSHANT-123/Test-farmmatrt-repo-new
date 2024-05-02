import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAdminAuth } from './adminauth';
import styled from "styled-components";
import "./Nav.css";

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  padding: '20px',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '20px',
};

const cardStyle = {
  width: '30%',
  height: '300px',
  margin: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'green',
  color: 'white',
};

const logoutButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const AdminDashboard = () => {
  const{isadloggedIn}= useAdminAuth();
  // const handleLogout = () => {
  //   if (isadloggedIn) {
  //     window.location.href='/adminlogout';
  //   } else {
  //     throw new Error('Admin Not Logged in');
      
  //   }
  //   window.location.href = '/admin/login'; // Redirect to admin login page
  // };

  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <NavLink to="/registered-users" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ color: 'red' }}>Registered Users</h2>
          </NavLink>
          
        </div>
        <div style={cardStyle}>
          <NavLink to='/productad' style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ color: 'orange' }}>Add Product</h2>
          </NavLink>
        </div>
        <div style={cardStyle}>
          <h2 style={{ color: '#1aff66' }}>Sales</h2>
          <h2>4</h2>
          
        </div>
      </div>
      
      {/* <button style={logoutButtonStyle} onClick={handleLogout}>
        Logout
      </button> */}
      <NavLink className="navbar-link" to = "/adminlogout">LOGOUT</NavLink>
    </div> 
    
  );
};

export default AdminDashboard;