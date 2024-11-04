import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-tj.png';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">

                <img className="logo" src={logo} alt="logo TJ"/>
            <ul className="navbar-links">
                <li><Link to="/" className="link">Accueil</Link></li>
                <li><Link to="" className="link">Projets</Link></li>
                <li><Link to="" className="link">Contact</Link></li>
            </ul>
            <div className="navbar-icons">
            
            </div>

        </nav>
    )
}
