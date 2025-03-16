import React, { useState } from 'react';
import Layout from './Layout';
import FoodTruckCard from './FoodTruckCard';
import foodTruckData from './FoodTruckData';
import './FoodTrucksPage.css';

function FoodTrucks() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrucks = foodTruckData.filter((truck) =>
    truck.cuisineType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = [];
  for (let i = 0; i < 16 && i < filteredTrucks.length; i += 4) {
    const row = filteredTrucks.slice(i, i + 4);
    rows.push(row);
  }

  return (
    <Layout>
      <div className="food-trucks-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Find a food truck near you"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
        <h1>A Big Title</h1>
        <div className="food-truck-grid">
          {rows.slice(0, 2).map((row, rowIndex) => (
            <div key={rowIndex} className="food-truck-row">
              {row.map((truck) => (
                <FoodTruckCard key={truck.id} truck={truck} />
              ))}
            </div>
          ))}
        </div>
        <h1>A Big Title</h1>
        <div className="food-truck-grid">
          {rows.slice(2, 4).map((row, rowIndex) => (
            <div key={rowIndex} className="food-truck-row">
              {row.map((truck) => (
                <FoodTruckCard key={truck.id} truck={truck} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FoodTrucks;
