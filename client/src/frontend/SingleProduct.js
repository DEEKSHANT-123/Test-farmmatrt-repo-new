import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PesticidesData } from './ PesticidesData';
import { EducationalResourceData } from './EducationalResourceData';
import { FarmToolsData } from './FarmToolsData';
import { FertilizersData } from './FertilizersData';
import { CropProtectionData } from './CropProtectionData';
import { SafetyGearsData } from './SafetyGearsData';
import { SeedsData } from './SeedsData';

const SingleProduct = () => {
  const { id } = useParams(); // Access product ID from URL
  const [product, setProduct] = useState(null); // State to store specific product

  useEffect(() => {
    // Find the product with matching id in each data array
    const foundProduct = [
      ...PesticidesData,
      ...EducationalResourceData,
      ...FarmToolsData,
      ...FertilizersData,
      ...CropProtectionData,
      ...SafetyGearsData,
      ...SeedsData
    ].find(item => item.id === parseInt(id));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle case where product is not found
      setProduct(null);
    }
  }, [id]);

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    console.log("Product added to cart:", product);
  };

  return (
    <div>
      {product ? (
        <>
          {/* Display product details here */}
          <img src={product.Image} alt={product.Name} />
          <h3><b>{product.Name}</b></h3>
          <p>{product.Description}</p>
          <p>Price: Rs {product.Rs}</p>
          <p>Warranty: {product.Warranty}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default SingleProduct;