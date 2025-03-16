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