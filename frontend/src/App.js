import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import FoodTrucks from './components/FoodTrucksPage';
import Cuisine from './components/CuisinePage';
import Layout from './components/Layout';
import UserLoginSignup from './components/UserLoginSignup';
import FoodTruckDetails from './components/FoodTruck-Details/FoodTruckDetails';
import Cart from './components/Cart-Page/Cart';
import Checkout from './components/Checkout-Page/Checkout';
import CheckoutForm from './components/Checkout-Form/CheckoutForm';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Homepage /></Layout>} />
                <Route path="/foodtrucks" element={<Layout><FoodTrucks /></Layout>} />
                <Route path="/cuisine" element={<Layout><Cuisine /></Layout>} />
                <Route path="/user-login-signup" element={<Layout><UserLoginSignup /></Layout>} />
                <Route path="/food-truck-details/:id" element={<Layout><FoodTruckDetails /></Layout>} />
                <Route path="/cart" element={<Layout><Cart /></Layout>} />
                <Route path="/checkout" element={<Checkout />} /> {/* Removed Layout */}
                <Route path="/checkout-form" element={<CheckoutForm />} /> {/* Removed Layout */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;