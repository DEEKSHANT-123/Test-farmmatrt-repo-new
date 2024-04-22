import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ProductAd from './frontend/ProductAd';
import Home from './frontend/Home';
import About from './frontend/About';
import Contact from './frontend/Contact';
import Payment from './frontend/Payment';
import ErrorPage from './frontend/ErrorPage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './frontend/GlobalStyle';
import Header from './frontend/Header';

import AdminDashboard from './frontend/adminDashBoard'; // Importing adminAddProduct component
import UserLogin from './frontend/UserLogin';
import Signup from './frontend/SignUp';
import AdminLogin from './frontend/AdminLogin';
import StaffLogin from './frontend/StaffLogin';
import RegisteredUsersPage from './frontend/RegisteredUsersPage';
import Product from './frontend/Product';
import Cart from './frontend/Cart';
import SingleProduct from './frontend/SingleProduct';

// Define the App component
const App = () => {
  const [isloggedIn,setisloggedIn]= useState(true);
  const checkloggin=()=>setisloggedIn(isloggedIn=>!isloggedIn);
  const theme = {
    colors: {
      heading: 'rgb(24 24 29)',
      text: 'rgb(24 24 29)',
      white: 'white',
      black: '#212529',
      bg: '#1aff66',
      bg1: '#e6ffe6',
      bg2: '#ffffff',
      footer_bg: 'green',
      btn: 'rgb(98 84 243)',
      border: 'rgba(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient: 'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
      shadowSupport: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    media: { mobile: '768px', tab: '998px' },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header isloggedIn={isloggedIn} check={checkloggin}/>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productad" element={<ProductAd />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        
          <Route path="/user/login" element={<UserLogin isloggedIn={isloggedIn} check={checkloggin}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/staff/login" element={<StaffLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard isLoggedIn={isloggedIn} />} />

          <Route path="/registered-users" element={<RegisteredUsersPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;