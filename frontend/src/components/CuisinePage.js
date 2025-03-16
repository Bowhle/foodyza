import React, { useState } from 'react';
import Layout from './Layout';
import CuisineCard from './CuisineCard';
import cuisineData from './cuisineData';
import './CuisinePage.css';

function Cuisine() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCuisines = cuisineData.filter((cuisine) =>
    cuisine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = [];
  for (let i = 0; i < filteredCuisines.length; i += 3) {
    rows.push(filteredCuisines.slice(i, i + 3));
  }

  return (
    <Layout>
      <div className="cuisine-page-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search cuisines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
        <div className="cuisine-grid">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="cuisine-row">
              {row.map((cuisine) => (
                <CuisineCard key={cuisine.id} cuisine={cuisine} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Cuisine;