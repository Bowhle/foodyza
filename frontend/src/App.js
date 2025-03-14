import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import FoodTrucks from './components/FoodTrucks';
import Cuisine from './components/Cuisine';
import Area from './components/Area';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout> {/* Use Layout to wrap content */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/foodtrucks" element={<FoodTrucks />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/area" element={<Area />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;