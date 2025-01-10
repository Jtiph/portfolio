import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import './index.css';
import './app.scss';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Error from "./pages/Error/Error";

function App () {
  return (
    <Router >
      <ScrollToTop/>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App; 