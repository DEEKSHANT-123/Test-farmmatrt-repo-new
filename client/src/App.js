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
import Product from './frontend/Product';


import SingleProduct from './frontend/SingleProduct';
import AddToCart from './frontend/AddtoCart';
import ShowDetails from './frontend/ShowDetails';


import FarmartProduct from './frontend/FarmartProduct';
import Cart from './frontend/Cart';
import Cards from './frontend/Cards';
import { Logout } from './frontend/logout';
import { AdminLogout } from './frontend/adminlogout';
import { useAuth } from './frontend/auth';
//import { useEffect } from 'react';
import Privateroute from './frontend/Privateroute';
import Privateadminroute from './frontend/Privateadminroute';


// Define the App component
// const App = () => {
//   const [isloggedIn,setisloggedIn]= useState(true);
//   const checkloggin=()=>setisloggedIn(isloggedIn=>!isloggedIn);

// //farmar product work start

// const [show, setShow] = useState(true);
// const [cart , setCart] = useState([]);
// const [warning, setWarning] = useState(false);

// // const handleClick = (item) => {
// //   // Check if the item is already present in the cart
// //   const isPresent = cart.some((product) => product.id === item.id);
// //   if (!isPresent) {
// //     // If item is not present, add it to the cart
// //     setCart([...cart, item]);
// //   }
// // };

// const handleClick = (item)=>{
//   let isPresent = false;
//   cart.forEach((product)=>{
//     if (item.id === product.id)
//     isPresent = true;
//   })
//   if (isPresent){
//     setWarning(true);
//     setTimeout(()=>{
//       setWarning(false);
//     }, 2000);
//     return ;
//   }
//   setCart([...cart, item]);
// }


// const handleChange = (item, d) =>{
//   let ind = -1;
//   cart.forEach((data, index)=>{
//     if (data.id === item.id)
//       ind = index;
//   });
//   const tempArr = cart;
//   tempArr[ind].amount += d;
  
//   if (tempArr[ind].amount === 0)
//     tempArr[ind].amount = 1;
//   setCart([...tempArr])
// }


// ////farmar product work end




//   const theme = {
//     colors: {
//       heading: 'rgb(24 24 29)',
//       text: 'rgb(24 24 29)',
//       white: 'white',
//       black: '#212529',
//       bg: '#1aff66',
//       bg1: '#e6ffe6',
//       bg2: '#ffffff',
//       footer_bg: 'green',
//       btn: 'rgb(98 84 243)',
//       border: 'rgba(98, 84, 243, 0.5)',
//       hr: '#ffffff',
//       gradient: 'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
//       shadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
//       shadowSupport: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
//     },
//     media: { mobile: '768px', tab: '998px' },
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <GlobalStyle />
//         <Header isloggedIn={isloggedIn} check={checkloggin} cartSize={cart.length} setShow={setShow} />
//         <br />
//         <br />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/productad" element={<ProductAd />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/product/:id" element={<SingleProduct />} />
        
//           <Route path="/user/login" element={<UserLogin isloggedIn={isloggedIn} check={checkloggin}/>} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/admin/login" element={<AdminLogin />} />
//           <Route path="/staff/login" element={<StaffLogin />} />
//           <Route path="/admindashboard" element={<AdminDashboard isLoggedIn={isloggedIn} />} />
//           <Route path="/registered-users" element={<RegisteredUsersPage />} />
//           <Route path="/addtocart" element={<AddToCart/>} />
//           <Route path="/showdetails" element={<ShowDetails/>} />
        

//           <Route path="/farmc" element={<React.Fragment><Cart cart={cart} setCart={setCart} handleChange={handleChange}/> {warning && <div className='warning'> Item is already added to your cart</div>}</React.Fragment>} />
//           <Route path="/farm" element={<FarmartProduct handleClick={handleClick} />} />
//           <Route path="/fcard" element={<Cards />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//         <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;



////////new changes by dee

const App = () => {

  const {isaloggedIn}= useAuth();
  

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

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

  const totalPrice = 0;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header   cartSize={cart.length} />
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
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/showdetails" element={<ShowDetails />} />
          <Route path="/farmc" element={<React.Fragment><Cart cart={cart} setCart={setCart} handleChange={handleChange} /> {warning && <div className='warning'> Item is already added to your cart</div>}</React.Fragment>} />
          <Route path="/user" element={<Privateroute />}>
             <Route path="farm" element={<FarmartProduct handleClick={handleClick} />} />
             </Route>
          <Route path="/fcard" element={<Cards />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          {/* Button code using setShow */}
          <Route path="/some-route" element={<button onClick={handleShowButtonClick}>Show Something</button>} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/address" element = {<Address total={totalPrice} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;