import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Search Here"
        style={{
          width: "300px",
          backgroundColor: "white",
          color: "black",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "16px",
          outline: "none",
          marginRight: "10px", // Add some space between input and h3
        }}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <h3 style={{ cursor: "pointer" }} onClick={() => alert(`Searching for: ${searchTerm}`)}>Search</h3>
    </div>
  );
};

export default Search;
