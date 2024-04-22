import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PesticidesData } from './ PesticidesData';

const PestisideProduct1 = () => {
  const { productId } = useParams(); // Access product ID from URL
  const [product, setProduct] = useState(null); // State to store specific product

  useEffect(() => {
    const findProduct = () => {
      const foundProduct = PesticidesData.find(item => item.id === parseInt(productId));
      setProduct(foundProduct || null); // Set product or null if not found
    };

    findProduct();
  }, [productId]);

  return (
    <div>
      {product ? (
        <>
          {/* Display product details here */}
          <img src={product.Image} alt={product.Name} />
          <h2>{product.Name}</h2>
          <p>{product.Description}</p>
          <p>Price: Rs {product.Rs}</p>
          <p>Warranty: {product.Warranty}</p>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default PestisideProduct1;