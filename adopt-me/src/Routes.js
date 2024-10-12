// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AdultMalePage from './AdultMalePage'; // Import your pages

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/male-adult" element={<AdultMalePage />} /> {/* Define the route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
