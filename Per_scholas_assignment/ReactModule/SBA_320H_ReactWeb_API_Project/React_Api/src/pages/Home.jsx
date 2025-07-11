import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import BookDetails from './pages/BookDetails'; // Create this component
import './index.css';

function Home() {
  return (
    <BrowserRouter>
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
}

export default Home;