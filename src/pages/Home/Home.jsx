import React from "react";
import profileImg from '../../assets/images/profile-img.webp';
import './Home.scss';
import HomeBackground from "@/components/HomeBackground/HomeBackground";
import PreviewProjects from "@/components/PreviewProjects/PreviewProjects";
import Skills from "@/components/Skills/Skills";


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
            <button className="hero-btn">hello</button>
        </div>
        <section className="preview-project">
        <PreviewProjects/>  
        </section>
        <section className="skills-section">
            <h2>Compétences</h2>
            <Skills/>

            
        </section>   
        <section className="contact">
            {/* formulaire de contact ou bouton contactez-moi  */}
        </section>                  
        </div>
    )
}

export default Home;