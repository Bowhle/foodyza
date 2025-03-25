import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './Layout';
import FoodTruckCard from './FoodTruckCard';
import foodTruckData from './FoodTruckData';
import FoodTruckImageData from './FoodTruckImageData';
import './FoodTrucksPage.css';

function FoodTrucks() {
  const [searchTerm, setSearchTerm] = useState('');
  const { cuisine } = useParams();

  const filteredTrucks = foodTruckData.filter((truck) => {
    if (Array.isArray(truck.cuisineType)) {
      let cuisineMatch = true;
      let searchMatch = true;

      // Filter by cuisine if cuisine parameter is present
      if (cuisine) {
        cuisineMatch = truck.cuisineType.some((c) =>
          c.toLowerCase() === cuisine.toLowerCase()
        );
      }

      // Filter by searchTerm if searchTerm is present
      if (searchTerm) {
        searchMatch = truck.cuisineType.some((c) =>
          c.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      return cuisineMatch && searchMatch;
    }
    return false;
  });

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
          {filteredTrucks.map((truck) => {
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
      </div>
    </Layout>
  );
}

export default FoodTrucks;
