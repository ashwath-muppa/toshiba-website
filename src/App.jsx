import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import TheScience from './pages/TheScience';
import Impact from './pages/Impact';
import Bibliography from './pages/Bibliography';
import AboutUs from './pages/AboutUs';

// Placeholder components for pages not yet implemented
const Placeholder = ({ title }) => (
  <div className="pt-24 pb-12 px-6 text-center">
    <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
    <p className="text-gray-600">Coming soon...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/the-science" element={<TheScience />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/bibliography" element={<Bibliography />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
