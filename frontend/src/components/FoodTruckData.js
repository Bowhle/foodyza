import FoodTruckImageData from './FoodTruckImageData';

const foodTruckData = [
  {
    id: 1,
    title: 'Braai on Wheels',
    description: 'Sizzling braai delights on the go.',
    imageUrl: FoodTruckImageData.truck1, 
    cuisineType: ['Shisa Nyama', 'Beef Stew', 'Pap and Steak'],
    menuItems: [
      { id: 101, title: "Shisa Nyama", price: "R80", image: 'ShisaNyama.jpg' },
      { id: 102, title: "Chips", price: "R5", image: 'Chips.jpg' },
      { id: 103, title: "Pap and Steak", price: "R5", image: 'Papandsteak.jpg' },
      { id: 104, title: "Beef Stew", price: "R5", image: 'Beefstew.jpg' },
      { id: 105, title: "Chicken", price: "R5", image: 'Chicken.jpg' },
      { id: 106, title: "Fish & Chips", price: "R5", image: 'Fishandchips.jpg' },
      { id: 107, title: "Burger", price: "R5", image: 'Burger.jpg' },
      { id: 108, title: "Bunny Chow", price: "R5", image: 'Bunnychow.jpg' },
    ],
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Tselanes Kitchen',
    description: 'Hearty home-style stews and sides.',
    imageUrl: FoodTruckImageData.truck2, 
    cuisineType: ['Beef Stew', 'Comfort Food', 'Vegetables'],
    menuItems: [
      { id: 101, title: "Shisa Nyama", price: "R80", image: 'ShisaNyama.jpg' },
      { id: 102, title: "Chips", price: "R5", image: 'Chips.jpg' },
      { id: 103, title: "Pap and Steak", price: "R5", image: 'Papandsteak.jpg' },
      { id: 104, title: "Beef Stew", price: "R5", image: 'Beefstew.jpg' },
      { id: 105, title: "Chicken", price: "R5", image: 'Chicken.jpg' },
      { id: 106, title: "Fish & Chips", price: "R5", image: 'Fishandchips.jpg' },
      { id: 107, title: "Burger", price: "R5", image: 'Burger.jpg' },
      { id: 108, title: "Bunny Chow", price: "R5", image: 'Bunnychow.jpg' },
    ],
    rating: 3.8,
  },
  
  {
    id: 3,
    title: 'Hangry Chef',
    description: 'Gourmet comfort eats to satisfy craving.',
    imageUrl: FoodTruckImageData.truck3,
    cuisineType: ['Comfort Food', 'Fast Food', 'Chips'],
    menuItems: [
      { id: 101, title: "Shisa Nyama", price: "R80", image: 'ShisaNyama.jpg' },
      { id: 102, title: "Chips", price: "R5", image: 'Chips.jpg' },
      { id: 103, title: "Pap and Steak", price: "R5", image: 'Papandsteak.jpg' },
      { id: 104, title: "Beef Stew", price: "R5", image: 'Beefstew.jpg' },
      { id: 105, title: "Chicken", price: "R5", image: 'Chicken.jpg' },
      { id: 106, title: "Fish & Chips", price: "R5", image: 'Fishandchips.jpg' },
      { id: 107, title: "Burger", price: "R5", image: 'Burger.jpg' },
      { id: 108, title: "Bunny Chow", price: "R5", image: 'Bunnychow.jpg' },
    ],
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Sams Waffles',
    description: 'Local favourites with a tasty twist.',
    imageUrl: FoodTruckImageData.truck4,
    cuisineType: ['Smileys', 'Walkie Talkies', 'Kota'],
    menuItems: [
      { id: 101, title: "Shisa Nyama", price: "R80", image: 'ShisaNyama.jpg' },
      { id: 102, title: "Chips", price: "R5", image: 'Chips.jpg' },
      { id: 103, title: "Pap and Steak", price: "R5", image: 'Papandsteak.jpg' },
      { id: 104, title: "Beef Stew", price: "R5", image: 'Beefstew.jpg' },
      { id: 105, title: "Chicken", price: "R5", image: 'Chicken.jpg' },
      { id: 106, title: "Fish & Chips", price: "R5", image: 'Fishandchips.jpg' },
      { id: 107, title: "Burger", price: "R5", image: 'Burger.jpg' },
      { id: 108, title: "Bunny Chow", price: "R5", image: 'Bunnychow.jpg' },
    ],
    rating: 4.5,
  },
  
  {
    id: 5,
    title: 'The Fish Shack',
    description: 'Fresh seafood on the move.',
    imageUrl: FoodTruckImageData.truck5,
    cuisineType: ['Fish & Chips', 'Light Meals'],
    menuItems: [
      { id: 501, title: 'Hake & Chips', price: 'R90', image: 'Fishandchips.jpg' },
      { id: 502, title: 'Calamari & Chips', price: 'R85', image: 'Fishandchips.jpg' },
      { id: 503, title: 'Prawn Salad', price: 'R110', image: 'LightMeals.jpg' },
      { id: 504, title: 'Fish Burger', price: 'R75', image: 'Burger.jpg' },
      { id: 505, title: 'Oyster Platter', price: 'R150', image: 'LightMeals.jpg' },
      { id: 506, title: 'Grilled Fish', price: 'R100', image: 'Fishandchips.jpg' },
      { id: 507, title: 'Seafood Soup', price: 'R80', image: 'LightMeals.jpg' },
      { id: 508, title: 'Lemonade', price: 'R30', image: 'LightMeals.jpg' },
    ],
    rating: 4.8,
  },

  {
    id: 7,
    title: 'Curry on Wheels',
    description: 'Authentic Indian curries and delights.',
    imageUrl: FoodTruckImageData.truck7,
    cuisineType: ['Indian', 'Curry', 'Spicy'],
    menuItems: [
      { id: 701, title: "Chicken Curry", price: "R90", image: 'Chickencurry.jpg' },
      { id: 702, title: "Lamb Curry", price: "R100", image: 'Lambcurry.jpg' },
      { id: 703, title: "Vegetable Curry", price: "R80", image: 'Veggiecurry.jpg' },
      { id: 704, title: "Samosas", price: "R40", image: 'Samosas.jpg' },
      { id: 705, title: "Naan Bread", price: "R25", image: 'Naan.jpg' },
      { id: 706, title: "Rice", price: "R20", image: 'Rice.jpg' },
      { id: 707, title: "Roti", price: "R20", image: 'Roti.jpg' },
      { id: 708, title: "Biryani", price: "R110", image: 'Biryani.jpg' },
    ],
    rating: 4.6,
  },
  {
    id: 8,
    title: 'Pasta La Vista',
    description: 'Fresh, Italian pasta dishes.',
    imageUrl: FoodTruckImageData.truck8,
    cuisineType: ['Italian', 'Pasta', 'Pizza'],
    menuItems: [
      { id: 801, title: "Spaghetti Bolognese", price: "R85", image: 'Spaghetti.jpg' },
      { id: 802, title: "Lasagna", price: "R95", image: 'Lasagna.jpg' },
      { id: 803, title: "Carbonara", price: "R90", image: 'Carbonara.jpg' },
      { id: 804, title: "Margherita Pizza", price: "R80", image: 'Pizza.jpg' },
      { id: 805, title: "Pepperoni Pizza", price: "R90", image: 'PepperoniPizza.jpg' },
      { id: 806, title: "Focaccia", price: "R30", image: 'Focaccia.jpg' },
       { id: 807, title: "Garlic Bread", price: "R25", image: 'Garlicbread.jpg' },
      { id: 808, title: "Salad", price: "R40", image: 'Salad.jpg' },
    ],
    rating: 4.3,
  },
  {
    id: 9,
    title: 'Taco Fiesta',
    description: 'Authentic Mexican tacos and treats.',
    imageUrl: FoodTruckImageData.truck9,
    cuisineType: ['Mexican', 'Tacos', 'Burritos'],
    menuItems: [
      { id: 901, title: "Chicken Tacos", price: "R70", image: 'Chickentacos.jpg' },
      { id: 902, title: "Beef Tacos", price: "R75", image: 'Beeftacos.jpg' },
      { id: 903, title: "Pork Tacos", price: "R75", image: 'Porktacos.jpg' },
      { id: 904, title: "Veggie Tacos", price: "R65", image: 'Veggietacos.jpg' },
      { id: 905, title: "Chicken Burrito", price: "R85", image: 'Chickenburrito.jpg' },
      { id: 906, title: "Beef Burrito", price: "R90", image: 'Beefburrito.jpg' },
      { id: 907, title: "Nachos", price: "R60", image: 'Nachos.jpg' },
      { id: 908, title: "Quesadilla", price: "R55", image: 'Quesadilla.jpg' },
    ],
    rating: 4.4,
  },
  {
    id: 10,
    title: 'Smoothie Operator',
    description: 'Healthy and refreshing smoothies.',
    imageUrl: FoodTruckImageData.truck10,
    cuisineType: ['Healthy', 'Smoothies', 'Juice'],
    menuItems: [
      { id: 1001, title: "Berry Blast", price: "R50", image: 'Berrysmoothie.jpg' },
      { id: 1002, title: "Tropical Twist", price: "R55", image: 'Tropicalsmoothie.jpg' },
      { id: 1003, title: "Green Machine", price: "R60", image: 'Greensmoothie.jpg' },
      { id: 1004, title: "Protein Power", price: "R65", image: 'Proteinsmoothie.jpg' },
      { id: 1005, title: "Orange Juice", price: "R40", image: 'Orangejuice.jpg' },
      { id: 1006, title: "Apple Juice", price: "R35", image: 'Applejuice.jpg' },
      { id: 1007, title: "Carrot Juice", price: "R45", image: 'Carrotjuice.jpg' },
      { id: 1008, title: "Ginger Shot", price: "R30", image: 'Gingershot.jpg' },
    ],
    rating: 4.7,
  },
  {
    id: 11,
    title: 'Pizza Paradise',
    description: 'Delicious pizzas with various toppings.',
    imageUrl: FoodTruckImageData.truck11,
    cuisineType: ['Pizza', 'Italian', 'Fast Food'],
    menuItems: [
      { id: 1101, title: "Margherita", price: "R80", image: 'Pizza.jpg' },
      { id: 1102, title: "Pepperoni", price: "R90", image: 'PepperoniPizza.jpg' },
      { id: 1103, title: "Hawaiian", price: "R85", image: 'Hawaiianpizza.jpg' },
      { id: 1104, title: "Vegetarian", price: "R85", image: 'Veggiepizza.jpg' },
      { id: 1105, title: "Meat Feast", price: "R100", image: 'Meatpizza.jpg' },
      { id: 1106, title: "BBQ Chicken", price: "R95", image: 'BBQpizza.jpg' },
      { id: 1107, title: "Garlic Bread", price: "R25", image: 'Garlicbread.jpg' },
      { id: 1108, title: "Salad", price: "R40", image: 'Salad.jpg' },
    ],
    rating: 4.4,
  },
  {
    id: 12,
    title: 'The Ice Cream Stop',
    description: 'Variety of ice cream flavors and treats.',
    imageUrl: FoodTruckImageData.truck12,
    cuisineType: ['Dessert', 'Ice Cream', 'Sweet'],
    menuItems: [
      { id: 1201, title: "Vanilla Scoop", price: "R30", image: 'Vanillascoop.jpg' },
      { id: 1202, title: "Chocolate Scoop", price: "R30", image: 'Chocolatescoop.jpg' },
      { id: 1203, title: "Strawberry Scoop", price: "R30", image: 'Strawberryscoop.jpg' },
      { id: 1204, title: "Ice Cream Cone", price: "R35", image: 'Icecreamcone.jpg' },
      { id: 1205, title: "Sundae", price: "R50", image: 'Sundae.jpg' },
      { id: 1206, title: "Milkshake", price: "R45", image: 'Milkshake.jpg' },
      { id: 1207, title: "Waffle Cone", price: "R40", image: 'Wafflecone.jpg' },
      { id: 1208, title: "Ice Cream Sandwich", price: "R40", image: 'Icecreamsandwich.jpg' },
    ],
    rating: 4.6,
  },
  {
    id: 13,
    title: 'The Coffee Shop',
    description: 'Your favorite coffee and pastry.',
    imageUrl: FoodTruckImageData.truck13,
    cuisineType: ['Coffee', 'Pastry', 'Breakfast'],
    menuItems: [
      { id: 1301, title: "Cappuccino", price: "R35", image: 'Cappuccino.jpg' },
      { id: 1302, title: "Latte", price: "R35", image: 'Latte.jpg' },
      { id: 1303, title: "Espresso", price: "R30", image: 'Espresso.jpg' },
      { id: 1304, title: "Muffin", price: "R25", image: 'Muffin.jpg' },
      { id: 1305, title: "Croissant", price: "R30", image: 'Croissant.jpg' },
      { id: 1306, title: "Scone", price: "R20", image: 'Scone.jpg' },
      { id: 1307, title: "Breakfast Sandwich", price: "R50", image: 'Breakfastsandwich.jpg' },
      { id: 1308, title: "Tea", price: "R25", image: 'Tea.jpg' },
    ],
    rating: 4.2,
  },
  {
    id: 14,
    title: 'The Wrap Station',
    description: 'Fresh and delicious wraps.',
    imageUrl: FoodTruckImageData.truck14,
    cuisineType: ['Wraps', 'Healthy', 'Lunch'],
    menuItems: [
      { id: 1401, title: "Chicken Wrap", price: "R60", image: 'Chickenwrap.jpg' },
      { id: 1402, title: "Beef Wrap", price: "R65", image: 'Beefwrap.jpg' },
      { id: 1403, title: "Veggie Wrap", price: "R55", image: 'Veggiewrap.jpg' },
      { id: 1404, title: "Falafel Wrap", price: "R60", image: 'Falafelwrap.jpg' },
      { id: 1405, title: "Salad Wrap", price: "R50", image: 'Saladwrap.jpg' },
      { id: 1406, title: "Breakfast Wrap", price: "R55", image: 'Breakfastwrap.jpg' },
      { id: 1407, title: "Hummus", price: "R30", image: 'Hummus.jpg' },
      { id: 1408, title: "Soup", price: "R40", image: 'Soup.jpg' },
    ],
    rating: 4.3,
  },
  {
    id: 15,
    title: 'The Seafood Spot',
    description: 'Fresh seafood dishes.',
    imageUrl: FoodTruckImageData.truck15,
    cuisineType: ['Seafood', 'Fish', 'Grill'],
    menuItems: [
      { id: 1501, title: "Grilled Fish", price: "R120", image: 'Grilledfish.jpg' },
      { id: 1502, title: "Fish and Chips", price: "R80", image: 'Fishandchips.jpg' },
      { id: 1503, title: "Calamari", price: "R90", image: 'Calamari.jpg' },
      { id: 1504, title: "Prawns", price: "R150", image: 'Prawns.jpg' },
      { id: 1505, title: "Sushi", price: "R130", image: 'Sushi.jpg' },
      { id: 1506, title: "Oysters", price: "R100", image: 'Oysters.jpg' },
       { id: 1507, title: "Seafood Platter", price: "R250", image: 'Seafoodplatter.jpg' },
      { id: 1508, title: "Clam Chowder", price: "R70", image: 'Clamchowder.jpg' },
    ],
    rating: 4.5,
  },

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