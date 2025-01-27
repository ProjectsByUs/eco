import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; // Adjust according to your file structure
import CarbonFootPrintPage from "./Pages/CarbonFootPrintPage"; // Adjust according to your file structure

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carbon-footprint" element={<CarbonFootPrintPage />} />
      </Routes>
    </Router>
  );
};

export default App;
