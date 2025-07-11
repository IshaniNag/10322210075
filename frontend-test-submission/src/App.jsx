// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShortenForm from "./components/ShortenForm";
import StatsPage from "./components/StatsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenForm />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
