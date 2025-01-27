import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import CarbonFootPrintPage from './Pages/CarbonFootPrintPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} /> {/* Home Page Route */}
        <Route path="/carbon-footprint" element={<CarbonFootPrintPage></CarbonFootPrintPage>} /> {/* Carbon Footprint Page Route */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
