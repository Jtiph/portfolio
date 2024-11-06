import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';
import iconGit from '../../assets/images/github.svg';
import iconLinkedin from '../../assets/images/linkedin.svg'
export default function Navbar() {
    return (
        <nav className="navbar">
            <p>logo</p>
            <div className="navbar-elements">
                <ul className="navbar-elements-links">
                    <li><Link to="/" className="link">Accueil</Link></li>
                    <li><Link to="" className="link">Projets</Link></li>
                    <li><Link to="" className="link">Contact</Link></li>
                </ul>
                <div className="nav-separateur"></div>
                <div className="navbar-elements-icons">
                <a href="https://github.com/Jtiph" target="_blank" rel="noopener noreferrer">
                <img className="icon-git" src={iconGit} alt="icon-git" /></a>
                <a href="https://www.linkedin.com/in/jantiphanie/" target="_blank" rel="noonpener noreferrer" >
                <img className="icon-linkedin" src={iconLinkedin} alt="icon-linkedin"/></a>
                </div>
            </div>
        </nav>
    )
}
