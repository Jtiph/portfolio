import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import './index.css';
import './app.scss';
import HomeBackground from "./components/ui/HomeBackground/HomeBackground";
import Navbar from "./components/Navbar/Navbar";


function App () {
  return (
    <Router>
      <div>
        <Navbar/>
      <HomeBackground/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App; 