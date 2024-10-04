// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AuthPage from './Pages/AuthPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<div><HomePage/></div>} />
          
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;