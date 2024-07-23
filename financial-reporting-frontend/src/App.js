import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import FinancialReportingDashboard from './FinancialReportList';
import Navbar from './Navbar'; // Import the Navbar
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include the Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/financial-reporting-dashboard" element={<FinancialReportingDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
