import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import FoodTrucks from './components/FoodTrucksPage';
import Cuisine from './components/CuisinePage';
import Area from './components/AreaPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Homepage /></Layout>} />
        <Route path="/foodtrucks" element={<Layout><FoodTrucks /></Layout>} />
        <Route path="/cuisine" element={<Layout><Cuisine /></Layout>} />
        <Route path="/area" element={<Layout><Area /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;