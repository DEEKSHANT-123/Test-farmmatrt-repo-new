import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PesticidesData } from './ PesticidesData';
import { EducationalResourceData } from './EducationalResourceData';
import { FarmToolsData } from './FarmToolsData';
import { FertilizersData } from './FertilizersData';
import { CropProtectionData } from './CropProtectionData';
import { SafetyGearsData } from './SafetyGearsData';
import { SeedsData } from './SeedsData';
import './Product.css';
// ... other data imports for other categories

const SingleProduct = () => {
  const { productId } = useParams(); // Access product ID from URL
  const [product, setProduct] = useState({}); // State to store specific product

  useEffect(() => {
    const findProduct = () => {
      let allProducts = [...PesticidesData, ...EducationalResourceData, ...FarmToolsData, ...FertilizersData, ...CropProtectionData, ...SafetyGearsData, ...SeedsData]; // Combine all products (adjust based on your data structure)

      const foundProduct = allProducts.find((item) => item.id === productId);
      setProduct(foundProduct || {}); // Set product or empty object if not found
    };

    findProduct();
  }, [productId]);

  return (
    <div className="single-product-container">
      {product ? (
        <>
          {/* Display product details here (image, name, description, price, etc.) */}
          <img src={product.Image} alt={product.Name} />
          <h2>{product.Name}</h2>
          <p>{product.Description}</p>
          <p>Price: {product.Price}</p>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default SingleProduct;
