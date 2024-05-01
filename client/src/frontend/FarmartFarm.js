import React, { useState, useEffect } from "react";
import axios from "axios";


import "./FarmartFarm.css";

const FarmartFarm = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/productdetails");
        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="farmart-farm">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img src={`http://localhost:5000/images/${product.image}`} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Warranty: {product.waranty}</p>
             {/* Updated button to add to cart */}
             <button
              className="btn"
              onClick={() => addToCart(product)} // Attach the handleClick event
            >
              Add to Cart
            </button>
     
          </div>
        </div>
      ))}
    </div>
  );
};

export default FarmartFarm;
//////////////////////////////////////////////////////////////////////////////////////////////////