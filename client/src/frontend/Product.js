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
  const [priceFilter, setPriceFilter] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = [];

      switch (categoryFilter) {
        case 'Pesticides':
          filteredProducts = PesticidesData;
          break;
        case 'Educational Resources':
          filteredProducts = EducationalResourceData;
          break;
        case 'Farm Tools':
          filteredProducts = FarmToolsData;
          break;
        case 'Fertilizers':
          filteredProducts = FertilizersData;
          break;
        case 'Crop Protection':
          filteredProducts = CropProtectionData;
          break;
        case 'Safety Gears':
          filteredProducts = SafetyGearsData;
          break;
        case 'Seeds':
          filteredProducts = SeedsData;
          break;
        default:
          filteredProducts = [
            ...PesticidesData,
            ...EducationalResourceData,
            ...FarmToolsData,
            ...FertilizersData,
            ...CropProtectionData,
            ...SafetyGearsData,
            ...SeedsData,
          ];
      }

      if (priceFilter) {
        switch (priceFilter) {
          case '0-249':
            filteredProducts = filteredProducts.filter(product => parseInt(product.Price) <= 249);
            break;
          case '250-499':
            filteredProducts = filteredProducts.filter(product => parseInt(product.Price) >= 250 && parseInt(product.Price) <= 499);
            break;
          case '500-749':
            filteredProducts = filteredProducts.filter(product => parseInt(product.Price) >= 500 && parseInt(product.Price) <= 749);
            break;
          case '750-999':
            filteredProducts = filteredProducts.filter(product => parseInt(product.Price) >= 750 && parseInt(product.Price) <= 999);
            break;
          case '1000-1249':
            filteredProducts = filteredProducts.filter(product => parseInt(product.Price) >= 1000 && parseInt(product.Price) <= 1249);
            break;
          case '1250-1500':
            filteredProducts = filteredProducts.filter(product => parseInt(product.Price) >= 1250 && parseInt(product.Price) <= 1500);
            break;
          case 'Above 1500':
            filteredProducts = filteredProducts.filter(product => parseInt(product.Price) > 1500);
            break;
          default:
            break;
        }
      }

      setProducts(filteredProducts);
    };

    filterProducts();
  }, [categoryFilter, priceFilter]);

  const handleCategoryChange = event => {
    setCategoryFilter(event.target.value);
  };

  const handlePriceChange = event => {
    setPriceFilter(event.target.value);
  };

  return (
    <div className="product-container">
      <div className="filters">
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Pesticides">Pesticides</option>
          <option value="Educational Resources">Educational Resources</option>
          <option value="Farm Tools">Farm Tools</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Crop Protection">Crop Protection</option>
          <option value="Safety Gears">Safety Gears</option>
          <option value="Seeds">Seeds</option>
        </select>

        <select value={priceFilter} onChange={handlePriceChange}>
          <option value="">All Prices</option>
          <option value="0-249">₹ 0 - ₹ 249</option>
          <option value="250-499">₹ 250 - ₹ 499</option>
          <option value="500-749">₹ 500 - ₹ 749</option>
          <option value="750-999">₹ 750 - ₹ 999</option>
          <option value="1000-1249">₹ 1000 - ₹ 1249</option>
          <option value="1250-1500">₹ 1250 - ₹ 1500</option>
          <option value="Above 1500">Above ₹ 1500</option>
        </select>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;