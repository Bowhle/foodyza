# Foodyza Frontend

This directory contains the code for the Foodyza project's frontend. It is built using React and styled with CSS.

## Project Overview

The Foodyza frontend provides a user interface for discovering and exploring food trucks and cuisines in the Randburg, Gauteng, South Africa area. Key features include:

* **Homepage:** A landing page with a search bar to find food trucks.
* **Food Trucks Page:** Displays a grid of food trucks, allowing users to filter by cuisine and explore details.
* **Cuisine Page:** Showcases various cuisines with search and filtering capabilities.
* **User Login/Signup:** Provides authentication functionality for users.
* **Responsive Design:** Ensures a consistent experience across different devices.

## Getting Started

These instructions will guide you on how to get the project up and running on your local machine.

### Prerequisites

* Node.js (version 14 or higher)
* npm (Node Package Manager)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

### Available Scripts

In the project directory (frontend), you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Project Structure
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Homepage.js
│   │   ├── FoodTrucksPage.js
│   │   ├── CuisinePage.js
│   │   ├── AreaPage.js
│   │   ├── Layout.js
│   │   ├── UserLoginSignup.js
│   │   ├── FoodTruckCard.js
│   │   ├── CuisineCard.js
│   │   ├── StarRating.js
│   │   └── ...
│   ├── data/
│   │   ├── foodTruckData.js
│   │   ├── cuisineData.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── ...
├── package.json
├── README.md
└── ...

* **`public/`:** Contains static assets.
* **`src/components/`:** Contains React components.
* **`src/data/`:** Contains data files.
* **`App.js`:** The main application component.
* **`index.js`:** The entry point of the application.

## Dependencies

* React
* React Router DOM

## Development Notes

* Ensure that the backend API is running for full functionality.
* Use `npm start` to run the development server.
* CSS is used for styling, and styles are located within the component files.
* Data is stored in separate .js files within the data folder to improve code organization.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)