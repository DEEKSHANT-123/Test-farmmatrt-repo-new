import React, { useState } from "react";
import list from "../farmartdata"; // Importing the product list
import Cards from "./Cards";
import './FarmartProduct.css';

const FarmartProduct = ({ handleClick }) => {
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Filter function to filter products based on selected price ranges and categories
  const filterProducts = (item) => {
    if (selectedPriceRanges.length === 0 && selectedCategories.length === 0) {
      return true; // If no filter selected, return true for all products
    }
    const price = item.price;
    const category = item.category;

    const priceFilter = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
      const [min, max] = range.split("-").map(Number);
      return min <= price && price <= max;
    });

    const categoryFilter = selectedCategories.length === 0 || selectedCategories.includes(category);

    return priceFilter && categoryFilter;
  };

  const handlePriceCheckboxChange = (range) => {
    // Toggle selected price range
    if (selectedPriceRanges.includes(range)) {
      setSelectedPriceRanges(selectedPriceRanges.filter(item => item !== range));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, range]);
    }
  };

  const handleCategoryCheckboxChange = (category) => {
    // Toggle selected category
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };


  return (
    <>
      <section className="filter">
        <h2>Filter by Price:</h2>
        <div>
          <label>
            <input
              type="checkbox"
              value="0-249"
              onChange={() => handlePriceCheckboxChange("0-249")}
              checked={selectedPriceRanges.includes("0-249")}
            />
            0-249 Rs
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="250-499"
              onChange={() => handlePriceCheckboxChange("250-499")}
              checked={selectedPriceRanges.includes("250-499")}
            />
            250-499 Rs
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="500-749"
              onChange={() => handlePriceCheckboxChange("500-749")}
              checked={selectedPriceRanges.includes("500-749")}
            />
            500-749 Rs
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="750-999"
              onChange={() => handlePriceCheckboxChange("750-999")}
              checked={selectedPriceRanges.includes("750-999")}
            />
            750-999 Rs
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="1000-1249"
              onChange={() => handlePriceCheckboxChange("1000-1249")}
              checked={selectedPriceRanges.includes("1000-1249")}
            />
            1000-1249 Rs
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="1250-1499"
              onChange={() => handlePriceCheckboxChange("1250-1499")}
              checked={selectedPriceRanges.includes("1250-1499")}
            />
            1250-1499 Rs
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="1500-6000"
              onChange={() => handlePriceCheckboxChange("1500-6000")}
              checked={selectedPriceRanges.includes("1500-6000")}
            />
            1500 Rs and above
          </label>
        </div>
        <h2>Filter by Category:</h2>
        {/* Category filter checkboxes */}
        <div className="category-filter">
          {["Fertilizer", "Educational Resources", "Pesticides", "Crop Protection", "Seeds", "Farming Tools", "Safety Gears"].map(category => (
            <label key={category}>
              <input
                className="category-filter-checkbox"
                type="checkbox"
                value={category}
                onChange={() => handleCategoryCheckboxChange(category)}
                checked={selectedCategories.includes(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </section>
      <section className="abcd">
        {
          list.filter(filterProducts).map((item) => (
            <Cards item={item} key={item.id} handleClick={handleClick} />
          ))
        }
      </section>
    </>
  );
};

export default FarmartProduct;
