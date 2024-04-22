
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { FaTrash } from "react-icons/fa6";



import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
        <FaMinus onClick={() => decrement(id) }/>
          
          <input type="text" placeholder={quantity} disabled />
          < FaPlus onClick={() => increment(id)}/>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <FaTrash
            
            onClick={() => removeItem(id)}/>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;