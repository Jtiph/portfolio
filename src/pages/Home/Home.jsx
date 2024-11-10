import React from "react";
import profileImg from '/assets/images/profile-img.webp';
import './Home.scss';
import HomeBackground from "@/components/HomeBackground/HomeBackground";
import Skills from "@/components/Skills/Skills";
import PreviewProjects from "@/components/PreviewProject/PreviewProject";
import Contact from "@/components/Contact/Contact";
import { FaEnvelope, FaGithub, FaDownload } from 'react-icons/fa';



function Home () {
    return (
        <div className="tw-relative tw-h-full tw-w-full">
            <HomeBackground/>
        <div className="tw-relative tw-z-10">
            <section className="hero">
                <h2 className="hero-title">
                    <span>Hi, moi c'est</span>
                    <span className="hero-name">Tiphanie Jan</span>
                    <span>Intégrateur web - Passionnée de Front-end</span>
                </h2>
        <div className="hero-image-container">
            <img className="profile-img" src={profileImg} alt="Tiphanie Jan"/>
        </div>
        </section>
            <div className="hero-buttons">
                <a href="mailto:jan.tiphanie@outlook.fr">
                    <button className="hero-contactBtn">
                        <FaEnvelope /> Écrivez-moi
                    </button>
                </a>
                <a href="https://github.com/Jtiph" target="_blank" rel="noopener noreferrer">
                    <button className="hero-gitBtn">
                        <FaGithub /> Découvrir sur GitHub
                    </button>
                </a>
                <button className="hero-cvBtn">
                    <FaDownload />Télécharger mon cv
                </button>           
            </div>
        </div>
        <section className="preview-project-section">
            <h2 className="home-section-title">Aperçu de mes projets</h2>
        <PreviewProjects/>
        </section>
        <section className="skills-section">
            <h2 className="home-section-title">Compétences</h2>
            <Skills/>       
        </section>   
        <section className="contact-section">
            {/* formulaire de contact ou bouton contactez-moi  */}
            <Contact/>
        </section>              
        </div>
    )
}

export default Home;