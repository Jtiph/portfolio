import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './Navbar.scss';
import iconGit from '/assets/images/github.svg';
import iconLinkedin from '/assets/images/linkedin.svg';
import logoTJ from '/assets/images/logo-tj.png';
import LanguageSwitcher from "../languageSwitcher/languageSwitcher";
import { useTranslation } from "react-i18next";


export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToContact = () => {
        if (location.pathname === "/") {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({behavior: "smooth"});
            }
        } else {
            navigate("/#contact");
            setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                    contactSection.scrollIntoView({behavior: "smooth"});
                }
            },0);
        }
    };

    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <img className="navbar-logo" src={logoTJ} alt="logo TJ"/>
            <div className="navbar-elements">
                <ul className="navbar-elements-links">
                    <li><NavLink to="/" className="link">{t("navbar.home")}</NavLink></li>
                    <li><NavLink to="/projects" className="link">{t("navbar.projects")}</NavLink></li>
                    <li><span onClick={scrollToContact} className="link">{t("navbar.contact")}</span></li>
                </ul>
                <div className="nav-separateur"></div>
                <div className="navbar-elements-icons">
                <LanguageSwitcher/>
                <a href="https://github.com/Jtiph" target="_blank" rel="noopener noreferrer">
                <img className="icon-git" src={iconGit} alt="icon-git" /></a>
                <a href="https://www.linkedin.com/in/jantiphanie/" target="_blank" rel="noonpener noreferrer" >
                <img className="icon-linkedin" src={iconLinkedin} alt="icon-linkedin"/></a>
                </div>
            </div>
        </nav>
    )
}
