import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.Image} alt={product.Name} />
      <div className="product-details">
        <h3>{product.Name}</h3>
        {/* <p>{product.Description}</p> */}
        <p>Rs: {product.Rs}</p>
        {/* <p>Warranty: {product.Warranty}</p> */}
        <div style={{ marginTop: '10px' }}>
          <button style={{ backgroundColor: 'yellow', marginRight: '10px' }}>Show Details</button>
          <button style={{ backgroundColor: 'skyblue' }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
