import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import './index.css';
import './app.scss';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App () {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App; 