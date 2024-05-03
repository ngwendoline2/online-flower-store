
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ThankyouPage from './pages/ThankyouPage';
import Nav from './components/Nav';
import Thankyou from './pages/ThankyouPage';

function App() {
  return (
    <>
    <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
      </>
  );
}

export default App;