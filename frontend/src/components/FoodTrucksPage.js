import React from 'react';
import Layout from './Layout';
import FoodTruckCard from './FoodTruckCard';
import foodTruckData from './FoodTruckData';
import './FoodTrucksPage.css';


function FoodTrucks() {
  return (
    <Layout>
      <div className="food-trucks-container">
        <h1>A Big Title</h1>
        <div className="food-truck-grid">
          {foodTruckData.slice(0, 4).map((truck) => (
            <FoodTruckCard key={truck.id} truck={truck} />
          ))}
        </div>
        <h1>A Big Title</h1>
        <div className="food-truck-grid">
          {foodTruckData.slice(4, 8).map((truck) => (
            <FoodTruckCard key={truck.id} truck={truck} />
          ))}
        </div>
        <h1>A Big Title</h1>
        <div className="food-truck-grid">
          {foodTruckData.slice(8, 12).map((truck) => (
            <FoodTruckCard key={truck.id} truck={truck} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FoodTrucks;