import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Address from './frontend/Address';
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
// import Product from './frontend/Product';


// import SingleProduct from './frontend/SingleProduct';
// import AddToCart from './frontend/AddtoCart';
// import ShowDetails from './frontend/ShowDetails';


// import FarmartProduct from './frontend/FarmartProduct';
import Cart from './frontend/Cart';
import Cards from './frontend/Cards';

import FarmartFarm from './frontend/FarmartFarm';
import WarningAlert from './frontend/WarningAlert';

import { Logout } from './frontend/logout';
import { AdminLogout } from './frontend/adminlogout';
import { useAuth } from './frontend/auth';
//import { useEffect } from 'react';
import Privateroute from './frontend/Privateroute';
import Privateadminroute from './frontend/Privateadminroute';




const App = () => {

  
  const [isloggedIn, setisloggedIn] = useState(true);
  const checkloggin = () => setisloggedIn((isloggedIn) => !isloggedIn);


  const {isaloggedIn}= useAuth();
  

 
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState('');
  const addToCart = (product) => {
    // Check if product already exists in cart
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      

// If it exists, show warning and do not add again
setWarning('Item is already added to your cart');
setTimeout(() => setWarning(''), 2000); // Hide warning after 2 seconds


    } else {
       // If it doesn't exist, add it to cart with quantity 1
      // Add new item to cart
      setCart([...cart, { ...product, amount: 1 }]);

    }
  };
  const handleChange = (product, delta) => {
    if (delta < 0 && product.amount === 1) return; // Prevent negative quantity
    setCart(cart.map((item) =>
      item.id === product.id ? { ...item, amount: item.amount + delta } : item
    ));
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const totalPrice = cart.reduce((acc, item) => acc + item.amount * item.price, 0);
  const cartItemCount = cart.reduce((total, product) => total + product.amount, 0);


  const handleShowButtonClick = () => {
    // Your logic for showing something
  };

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

        <Header isloggedIn={isloggedIn} check={checkloggin}  cartSize={cartItemCount} />
       {/* Display the WarningAlert if there is a message */}
       <WarningAlert message={warning} />
        
        {/* <Header   cartSize={cart.length} /> */}

        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productad" element={<ProductAd />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/user/login" element={<UserLogin isloggedIn={isloggedIn} check={checkloggin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/staff/login" element={<StaffLogin />} />
          {/* <Route path="/admindashboard" element={<AdminDashboard isLoggedIn={isloggedIn} />} /> */}
          <Route path="/registered-users" element={<RegisteredUsersPage />} />
          <Route path="/farmc" element={<React.Fragment><Cart cart={cart} setCart={setCart} handleChange={handleChange} /> </React.Fragment>} />
          {/* <Route path="/product" element={<Product />} /> */}
          {/* <Route path="/product/:id" element={<SingleProduct />} /> */}
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/adminlogout" element={<AdminLogout/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/staff/login" element={<StaffLogin />} />
          <Route path="/private" element={<Privateadminroute/>}>
            <Route path="admindashboard" element={<AdminDashboard  />} />
          </Route>
         <Route path="/registered-users" element={<RegisteredUsersPage />} />
          <Route path="/farmc" element={<React.Fragment><Cart cart={cart} setCart={setCart} handleChange={handleChange} /> {warning && <div className='warning'> Item is already added to your cart</div>}</React.Fragment>} />
          <Route path="/user" element={<Privateroute />}>
             {/* <Route path="farm" element={<FarmartProduct handleClick={handleClick} />} /> */}
             <Route path="farmartfarm" element={<FarmartFarm addToCart={addToCart} />} />
             </Route>
          <Route path="/fcard" element={<Cards />} />
        
          
          <Route path="/some-route" element={<button onClick={handleShowButtonClick}>Show Something</button>} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/address" element = {<Address total={totalPrice} />} />
        
           
      <Route path="/cart" element={<Cart cart={cart} handleChange={handleChange} handleRemove={handleRemove} setCart={setCart}/>} />
      
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
// /////////////////////////////////