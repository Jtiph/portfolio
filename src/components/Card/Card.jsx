import React from 'react';
import "./Card.scss";
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Card({ image, title, description, alt, link, icon, date, skills }) {
    const { t } = useTranslation();

    return (
        <div className="card">
            <img src={image} alt={alt} className="card__img" />
            <div className="card__overlay"></div>
            <p className="card__date">{new Date(date).toLocaleDateString('fr-FR')}</p>
            <div className='card__iconTitle'>
                <div className="card__icon">{icon}</div>
                <h2 className="card__title">{t(title)}</h2>
            </div>
            {description && <p className="card__description">{description}</p>}
            <a href={link} className="card__link"> <FaGithub className='card__link-icon'/> {t("card.link_text")}</a>
            <div className="card__skills">
                {skills && skills.map((skill, index) => (
                    <span key={index} className="card__badge">{skill}</span>
                ))}
            </div>
        </div>
    );
}


