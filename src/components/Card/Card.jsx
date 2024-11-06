import React from 'react';
import "./Card.scss";

export default function Card({ image, title, description, alt, link, icon }) {
    return (
        <div className="card">
            <img src={image} alt={alt} className="card__img" />
            <div className="card__overlay"></div>
            <div className='card__iconTitle'>
                <div className="card__icon">{icon}</div>
                <h2 className="card__title">{title}</h2>
            </div>
            <p className="card__description">{description}</p>
            <a href={link} className="card__link">Voir le projet</a>
        </div>
    );
}


