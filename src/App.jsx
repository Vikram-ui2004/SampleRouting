
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Admissions from './pages/Admissions.jsx';
import Academics from './pages/Academics.jsx';
import Navbar from './components/Navbar.jsx';


function App() {
  return (
    <Router>
     <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
    </Router>
  );
}

export default App;