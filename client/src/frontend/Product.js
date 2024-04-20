import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PesticidesData } from './ PesticidesData';
import { EducationalResourceData } from './EducationalResourceData';
import { FarmToolsData } from './FarmToolsData';
import { FertilizersData } from './FertilizersData';
import { CropProtectionData } from './CropProtectionData';
import { SafetyGearsData } from './SafetyGearsData';
import { SeedsData } from './SeedsData';
import ProductCard from './ProductCard';
import './Product.css';

const Product = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [products, setProducts] = useState([]); // State to store filtered products

  useEffect(() => {
    const chooseProducts = () => {
      switch (categoryFilter) {
        case 'All':
          setProducts([...PesticidesData, ...EducationalResourceData, ...FarmToolsData, ...FertilizersData, ...CropProtectionData, ...SafetyGearsData, ...SeedsData]);
          break;
        case 'Pesticides':
          setProducts(PesticidesData);
          break;
        case 'Educational Resources':
          setProducts(EducationalResourceData);
          break;

        case 'Seeds':
            setProducts(SeedsData);
            break;

        case 'Farm Tools':
            setProducts(FarmToolsData);
            break;

        case 'Safety Gears':
            setProducts(SafetyGearsData);
            break;

        case 'Fertilizers':
            setProducts(FertilizersData);
            break;

        case 'Crop Protection':
            setProducts(CropProtectionData);
            break;

        default:
          setProducts([]); // Set empty array for invalid categories
      }
    };

    chooseProducts();
  }, [categoryFilter]);

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <div className="product-container">
      <div className="filters">
        {/* Category filter */}
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Pesticides">Pesticides</option>
          <option value="Educational Resources">Educational Resources</option>
          <option value="Farm Tools">Farm Tools</option>
          <option value="Seeds">Seeds</option>
          <option value="Safety Gears">Safety Gears</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Crop Protection">Crop Protection</option>
        </select>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
