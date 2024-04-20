import React, { useState } from 'react';
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

  // Combine all product data into one array
  const allProducts = [
    ...PesticidesData,
    ...EducationalResourceData,
    ...FarmToolsData,
    ...FertilizersData,
    ...CropProtectionData,
    ...SafetyGearsData,
    ...SeedsData
  ];

  // Filtered products based on category and price
  const filteredProducts = allProducts.filter(product => {
    // Filter by category
    const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter;

    // Filter by price
    let priceMatch = true;
    const productPrice = parseFloat(product.Price.replace('Rs ', ''));
    if (priceFilter === 'Under 500') {
      priceMatch = productPrice < 500;
    } else if (priceFilter === '500-999') {
      priceMatch = productPrice >= 500 && productPrice < 1000;
    } else if (priceFilter === '1000-1500') {
      priceMatch = productPrice >= 1000 && productPrice < 1500;
    } else if (priceFilter === 'Above 1500') {
      priceMatch = productPrice >= 1500;
    }
    return categoryMatch && priceMatch;
  });

  return (
    <div className="product-container">
      <div className="filters">
        {/* Category filter */}
        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Pesticides">Pesticides</option>
          <option value="Educational Resources">Educational Resources</option>
          <option value="Farm Tools">Farm Tools</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Crop Protection">Crop Protection</option>
          <option value="Safety Gears">Safety Gears</option>
          <option value="Seeds">Seeds</option>
        </select>

        {/* Price filter */}
        <select value={priceFilter} onChange={e => setPriceFilter(e.target.value)}>
          <option value="">All Prices</option>
          <option value="Under 500">Under 500</option>
          <option value="500-999">500-999</option>
          <option value="1000-1500">1000-1500</option>
          <option value="Above 1500">Above 1500</option>
        </select>
      </div>

      <div className="product-grid">
        {/* Map through filtered products and display them */}
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;