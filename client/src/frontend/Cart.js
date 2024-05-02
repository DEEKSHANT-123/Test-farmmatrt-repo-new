import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./cart.css";  // Ensure your CSS file is correctly linked

const Cart = ({ cart, setCart, handleChange ,handleRemove}) => {
    const [price, setPrice] = useState(0);
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.amount * item.price, 0);
      };

    return (
        <article className="cart-container">
            {cart.length > 0 ? cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={`http://localhost:5000/images/${item.image}`} alt={item.name} className="cart-image" />
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <p>Price: Rs {item.price}</p>
                        <br></br>
                        <p>Product details: {item.description}</p>

                        <div className="quantity-controls">
                            <button onClick={() => handleChange(item, -1)}>-</button>
                            <span>{item.amount}</span>
                            <button onClick={() => handleChange(item, +1)}>+</button>
                        </div>
                        <button onClick={() => handleRemove(item.id)} className="remove-btn">Remove</button>
                    </div>
                </div>
            )) : (
                <p>Your cart is empty. <Link to="/user/farmartfarm">Start shopping!</Link></p>
            )}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>Rs {calculateTotalPrice()}</span>
            </div>
            <Link to="/address">
    <button className="checkout-button">Proceed to Checkout</button>
</Link>
        </article>
    );
}

export default Cart;

