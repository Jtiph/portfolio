import React from "react";
import profileImg from '../../assets/images/profile-img.webp';
import './Home.scss';
import ShimmerButton from "@/components/ui/shimmer-button";

function Home () {
    return (
        <div>
        <header>

        </header>
        <section className="hero">
        <h2
        className="hero-title">
        <span>Hi, moi c'est</span>
        <span className="hero-name">Tiphanie Jan</span>
        <span>Intégrateur web - Passionnée de Front-end</span>
      </h2>
        <div className="hero-image-container">
        <img className="profile-img" src={profileImg} alt="Tiphanie Jan"/>
        </div>
        </section>
        <ShimmerButton>hello</ShimmerButton>
        <section className="preview-project">
            {/* aperçu projet mettre 3 projets en card avec image, description et titre             */}
        </section>
        <section className="skills">
            {/* mes compétences + bouton voir tout qui ramene à la page  */}
        </section>   
        <section className="contact">
            {/* formulaire de contact ou bouton contactez-moi  */}
        </section>                  
        </div>
    )
}

export default Home;