import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import SearchBar from './components/SearchBar';
import FeaturedTrucks from './components/FeaturedTrucks';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Homepage />
      <SearchBar />
      <FeaturedTrucks />
      <Footer />
    </div>
  );
}

export default App;
