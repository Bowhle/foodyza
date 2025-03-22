import FoodTruckImageData from './FoodTruckImageData';

const foodTruckData = [
  {
    id: 1,
    title: 'Braai on Wheels',
    description: 'Sizzling braai delights on the go.',
    imageUrl: FoodTruckImageData.truck1, // Use the imported image variable
    cuisineType: ['Shisa Nyama', 'Beef Stew', 'Pap and Steak'],
    menuItems: [
      { id: 101, title: "Shisa Nyama", price: "R80", image: 'ShisaNyama.jpg' },
      { id: 102, title: "Chips", price: "$5", image: 'Chips.jpg' },
      { id: 103, title: "Pap and Steak", price: "$5", image: 'Papandsteak.jpg' },
      { id: 104, title: "Beef Stew", price: "$5", image: 'Beefstew.jpg' },
      { id: 105, title: "Chicken", price: "$5", image: 'Chicken.jpg' },
      { id: 106, title: "Fish & Chips", price: "$5", image: 'Fishandchips.jpg' },
      { id: 107, title: "Burger", price: "$5", image: 'Burger.jpg' },
      { id: 108, title: "Bunny Chow", price: "$5", image: 'Bunnychow.jpg' },
    ],
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Tselanes Kitchen',
    description: 'Hearty home-style stews and sides.',
    imageUrl: FoodTruckImageData.truck2, // Use the imported image variable
    cuisineType: ['Beef Stew', 'Comfort Food', 'Vegetables'],
    menuItems: [
      { id: 101, title: "Shisa Nyama", price: "R80", image: 'ShisaNyama.jpg' },
      { id: 102, title: "Chips", price: "$5", image: 'Chips.jpg' },
      { id: 103, title: "Pap and Steak", price: "$5", image: 'Papandsteak.jpg' },
      { id: 104, title: "Beef Stew", price: "$5", image: 'Beefstew.jpg' },
      { id: 105, title: "Chicken", price: "$5", image: 'Chicken.jpg' },
      { id: 106, title: "Fish & Chips", price: "$5", image: 'Fishandchips.jpg' },
      { id: 107, title: "Burger", price: "$5", image: 'Burger.jpg' },
      { id: 108, title: "Bunny Chow", price: "$5", image: 'Bunnychow.jpg' },
    ],
    rating: 3.8,
  },
  // ... (Repeat for all other food trucks, using the appropriate FoodTruckImageData.truckX)
  {
    id: 3,
    title: 'Hangry Chef',
    description: 'Gourmet comfort eats to satisfy craving.',
    imageUrl: FoodTruckImageData.truck3,
    cuisineType: ['Comfort Food', 'Fast Food', 'Chips'],
    // ...
  },
  {
    id: 4,
    title: 'Sams Waffles',
    description: 'Local favourites with a tasty twist.',
    imageUrl: FoodTruckImageData.truck4,
    cuisineType: ['Smileys', 'Walkie Talkies', 'Kota'],
    // ...
  },
  // ... and so on for all food truck objects
  {
    id: 16,
    title: 'Chic-en-Chilli',
    description: 'Spicy chicken dishes and comfort meals.',
    imageUrl: FoodTruckImageData.truck16,
    cuisineType: ['Chicken', 'Comfort Food', 'Fast Food'],
    // ...
  },
];

export default foodTruckData;