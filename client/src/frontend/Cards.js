import React from 'react';
import './Cards.css';

const Cards = ({item, handleClick}) => {
    const {name, description, price, img} = item; // Destructure item properties

    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="Image" />
            </div>
            <div className="details">
                <p>{name}</p>
                <p>{description}</p>
                <p>Price - {price}Rs</p>
                {/* Add onClick event to call handleClick function */}
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Cards;
