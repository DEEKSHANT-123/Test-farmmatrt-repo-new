import React from 'react';

const ShowDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.Name}</h2>
      <img src={product.Image} alt={product.Name} />
      <p>{product.Description}</p>
      <p>Price: Rs {product.Rs}</p>
      <p>Warranty: {product.Warranty}</p>
    </div>
  );
};

export default ShowDetails;
