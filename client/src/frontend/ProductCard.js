import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.Image} alt={product.Name} />
      <div className="product-details">
        <h2>{product.Name}</h2>
        <p>{product.Description}</p>
        <p>Price: {product.Price}</p>
        <p>Warranty: {product.Warranty}</p>
      </div>
    </div>
  );
};

export default ProductCard;