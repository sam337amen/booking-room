// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home'; 
import About from './component/About';
import Contact from './component/Contact';
import Admin from './component/Admin';
import RoomDetail from './component/RoomDetail';
import Footer from './component/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/roomDetail" element={<RoomDetail />} />
            </Routes>
            <Footer /> 
        </Router>
    );
}

export default App;