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
  const [priceFilter, setPriceFilter] = useState('All');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const chooseProducts = () => {
      let filteredProducts = [];

      switch (categoryFilter) {
        case 'All':
          filteredProducts = [
            ...PesticidesData,
            ...EducationalResourceData,
            ...FarmToolsData,
            ...FertilizersData,
            ...CropProtectionData,
            ...SafetyGearsData,
            ...SeedsData
          ];
          break;
        case 'Pesticides':
          filteredProducts = PesticidesData;
          break;
        case 'Educational Resources':
          filteredProducts = EducationalResourceData;
          break;
        case 'Farm Tools':
          filteredProducts = FarmToolsData;
          break;
        case 'Seeds':
          filteredProducts = SeedsData;
          break;
        case 'Safety Gears':
          filteredProducts = SafetyGearsData;
          break;
        case 'Fertilizers':
          filteredProducts = FertilizersData;
          break;
        case 'Crop Protection':
          filteredProducts = CropProtectionData;
          break;
        default:
          break;
      }

      // Filter by price
      if (priceFilter !== 'All') {
        const [minPrice, maxPrice] = priceFilter.split('-').map(val => parseInt(val.trim()));
        filteredProducts = filteredProducts.filter(product => {
          const Rs = parseInt(product.Rs);
          return Rs >= minPrice && Rs <= maxPrice;
        });
      }

      setProducts(filteredProducts);
    };

    chooseProducts();
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

        {/* Price filter */}
        <select value={priceFilter} onChange={handlePriceChange}>
          <option value="All">All Prices</option>
          <option value="0-249">Below Rs 250</option>
          <option value="250-499">Rs 250 - Rs 499</option>
          <option value="500-749">Rs 500 - Rs 749</option>
          <option value="750-999">Rs 750 - Rs 999</option>
          <option value="1000-1249">Rs 1000 - Rs 1249</option>
          <option value="1250-1500">Rs 1250 - Rs 1500</option>
          <option value="1500-Above">Rs 1500 and above</option>
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