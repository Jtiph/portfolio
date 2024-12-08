import React from "react";
import profileImg from '/assets/images/profile-img.webp';
import './Home.scss';
import HomeBackground from "@/components/HomeBackground/HomeBackground";
import Skills from "@/components/Skills/Skills";
import PreviewProjects from "@/components/PreviewProject/PreviewProject";
import Contact from "@/components/Contact/Contact";
import { FaEnvelope, FaGithub, FaDownload } from 'react-icons/fa';
import ShimmerButton from "@/components/ui/shimmer-button";
import { useTranslation } from "react-i18next";



function Home () {
    const { t } = useTranslation();

    return (
        <div className="page-container">
            <div className="content">
                <HomeBackground/>
                <div className="hero-container">
                <section className="hero">
                    <h2 className="hero-title">
                        <span>{t("home.welcome-text")}</span>
                        <span className="hero-name">{t("home.my-name")}</span>
                        <span>{t("home.job-text")}</span>
                    </h2>
                    <div className="hero-image-container">
                        <img className="profile-img" src={profileImg} alt="Tiphanie Jan"/>
                    </div>
                </section>
                <div className="hero-buttons">
                        <div className="hero-mail-and-git">
                            <a href="mailto:jan.tiphanie@outlook.fr" className="hero-link-mail">
                                <ShimmerButton shimmerColor="#f0e68c" background="#4B4B4B"   className="hero-contactBtn">
                                <FaEnvelope /> {t("home.btn-writeMe")}
                                </ShimmerButton>
                        </a>
                        <a href="https://github.com/Jtiph" target="_blank" rel="noopener noreferrer" className="hero-link-git">
                            <ShimmerButton shimmerColor="#D9E9FF" className="hero-gitBtn">
                                <FaGithub /> {t("home.btn-git")}
                            </ShimmerButton>
                        </a>
                    </div>
                    <a href="https://drive.google.com/file/d/1bJqfZcUXOIFcqJqfOsxfOby1KgifQzn5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero-link-cv">
                        <ShimmerButton shimmerColor="#D9E9FF" className="hero-cvBtn">
                            <FaDownload />{t("home.btn-cv")}
                        </ShimmerButton>
                    </a>
                </div>
                        </div>
                        <section className="preview-project-section">
                        <PreviewProjects/>
                        </section>
                        <section className="skills-and-contact-section">
                <div className="skills-and-contact-section-container">
                    <div className="skills-section-part">
                        <Skills/>
                    </div>
                    <div id="contact" className="contact-section-part"><Contact/></div>
                </div>
                        </section>
            </div>      
        </div>
    )
}

export default Home;