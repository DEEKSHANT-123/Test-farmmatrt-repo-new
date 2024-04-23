import React from 'react';

const AddToCart = ({ product }) => {
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="add-to-cart">
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;