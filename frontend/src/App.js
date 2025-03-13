import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;