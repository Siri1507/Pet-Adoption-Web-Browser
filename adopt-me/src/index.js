// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppRoutes from './Routes'; // Import the Routes component

// ReactDOM.render(
//   <React.StrictMode>
//     <AppRoutes /> {/* Use the Routes component */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AdultMalePage from './AdultMalePage'; // Import MaleAdultPage

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/male-adult" element={<AdultMalePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
