import React from 'react';
import Layout from './Layout';

function FoodTrucks() {
  return (
    <Layout>
      <div>
        <h1>A Big Title</h1>
        {/* Wireframe layout for Food Trucks page */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {/* Add your food truck components or content here */}
          <div>Food Truck 1</div>
          <div>Food Truck 2</div>
          <div>Food Truck 3</div>
          <div>Food Truck 4</div>
        </div>
        <h1>A Big Title</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div>Food Truck 1</div>
          <div>Food Truck 2</div>
          <div>Food Truck 3</div>
          <div>Food Truck 4</div>
        </div>
        <h1>A Big Title</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div>Food Truck 1</div>
          <div>Food Truck 2</div>
          <div>Food Truck 3</div>
          <div>Food Truck 4</div>
        </div>
      </div>
    </Layout>
  );
}

export default FoodTrucks;