import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './FoodTruckDetails.css';
import foodTruckData from '../FoodTruckData';
import { ShoppingCart } from 'lucide-react';

const MenuItemImageData = {
  1: 'https://placehold.co/150x100/EEE/31343C?text=Burger',
  2: 'https://placehold.co/150x100/EEE/31343C?text=Fries',
  3: 'https://placehold.co/150x100/EEE/31343C?text=Drink',
  4: 'https://placehold.co/150x100/EEE/31343C?text=Pizza',
  5: 'https://placehold.co/150x100/EEE/31343C?text=Tacos',
  6: 'https://placehold.co/150x100/EEE/31343C?text=Salad',
};

const fetchCartItems = async (): Promise<{ id: number; title: string; price: string; quantity: number; image: string }[]> => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

function FoodTruckDetails() {
  const { id } = useParams();
  const truck = foodTruckData.find((truck) => truck.id === parseInt(id));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = async () => {
      const items = await fetchCartItems();
      setCartItems(items);
    };
    loadCartItems();
  }, []);

  const handleAddToCart = (item: { id: number; title: string; price: string; image: string }) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    } else {
      const newItem = { ...item, quantity: 1 };
      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  if (!truck || !truck.menuItems) {
    return <div>Food truck not found or menu items missing.</div>;
  }

  return (
    <div className="food-truck-details">
      {/* REMOVE THIS LINE: <Header /> */}
      <header>
        <img src={truck.imageUrl} alt={truck.title} className="banner-image" />
        <div className="content-wrapper">
          <h1>{truck.title}</h1>
          <p className="cuisine">{truck.cuisineType.join(', ')}</p>
          <p className="description">{truck.description}</p>
        </div>
      </header>

      <main>
        <div className="content-wrapper">
          <h2>Menu</h2>
          <div className="menu-grid">
            {truck.menuItems.map((item) => {
              const imageUrl = MenuItemImageData[item.id] || 'https://placehold.co/150x100/EEE/31343C?text=No+Image';

              return (
                <MenuCard
                  key={item.id}
                  item={{ ...item, image: imageUrl }}
                  onAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

function MenuCard({ item, onAddToCart }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.title} className="menu-item-image" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <button onClick={() => onAddToCart(item)}>ADD TO CART</button>
    </div>
  );
}

export default FoodTruckDetails;