import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.forEach(item => {
            ans += item.amount * item.price;
        });
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    useEffect(() => {
        handlePrice();
    }, [cart]); // Run effect whenever cart changes

    return (
        <article>
            {
                cart?.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button onClick={() => handleChange(item, +1)}> + </button>
                            <button>{item.amount}</button>
                            <button onClick={() => handleChange(item, -1)}> - </button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
            {/* if price is zero then move to the farmart product page */}
            {price !== 0 ? (
                <Link to={{ pathname: "/address", state: { total: price } }}>
                    <button className="checkout-button">Proceed to Checkout</button>
                </Link>
            ) : (
                <Link to={{ pathname: "/farm" }}>
                    <button className="checkout-button">Proceed to Checkout</button>
                </Link>
            )}
        </article>
    )
}

export default Cart;