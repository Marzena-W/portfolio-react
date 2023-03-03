import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> 
      </div>
    </Router>
  );
}

export default App;