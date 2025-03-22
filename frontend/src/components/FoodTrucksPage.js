import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import FoodTruckCard from './FoodTruckCard';
import foodTruckData from './FoodTruckData';
import FoodTruckImageData from './FoodTruckImageData';
import './FoodTrucksPage.css';

function FoodTrucks() {
  const [searchTerm, setSearchTerm] = useState('');
  console.log("Food Truck Data:", foodTruckData)

  const filteredTrucks = foodTruckData.filter((truck) => {
    if (Array.isArray(truck.cuisineType)) {
      return truck.cuisineType.some((cuisine) =>
        cuisine.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return false;
  });

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
        <div className="food-truck-grid">
          {rows.slice(0, 2).map((row, rowIndex) => (
            <div key={rowIndex} className="food-truck-row">
              {row.map((truck) => {
                const imageUrl = FoodTruckImageData[`truck${truck.id}`];
                console.log("Truck ID:", truck.id);

                return (
                  <FoodTruckCard
                    key={truck.id}
                    truck={{ ...truck, imageUrl }}
                  >
                    <Link to={`/food-truck-details/${truck.id}`}>
                      <button className="explore-button">EXPLORE</button>
                    </Link>
                  </FoodTruckCard>
                );
              })}
            </div>
          ))}
        </div>
        <div className="food-truck-grid">
          {rows.slice(2, 4).map((row, rowIndex) => (
            <div key={rowIndex} className="food-truck-row">
              {row.map((truck) => {
                const imageUrl = FoodTruckImageData[`truck${truck.id}`];

                return (
                  <FoodTruckCard
                    key={truck.id}
                    truck={{ ...truck, imageUrl }}
                  >
                    <Link to={`/food-truck-details/${truck.id}`}>
                      <button className="explore-button">EXPLORE</button>
                    </Link>
                  </FoodTruckCard>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FoodTrucks;