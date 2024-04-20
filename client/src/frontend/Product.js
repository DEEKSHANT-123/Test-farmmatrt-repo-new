import React, { useState } from 'react';
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

  const allProducts = [
    ...PesticidesData,
    ...EducationalResourceData,
    ...FarmToolsData,
    ...FertilizersData,
    ...CropProtectionData,
    ...SafetyGearsData,
    ...SeedsData
  ];

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter;

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
        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
          {/* options */}
        </select>

        <select value={priceFilter} onChange={e => setPriceFilter(e.target.value)}>
          {/* options */}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;