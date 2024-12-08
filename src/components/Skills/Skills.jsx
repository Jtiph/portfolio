import React from 'react';
import './Skills.scss';
import IconCloudContainer from '../IconCloudContainer/IconCloudContainer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const {t} = useTranslation();
    
    return(
        <div className='skills-container'>
            <h2 className='skills-title'>{t("skills.title")}</h2>
            <IconCloudContainer/>
            <div>
                <p className='skills-text'>{t("skills.text")} <Link to="/projects" className='skills-text-link'>{t("skills.link-text")}</Link></p>         
            </div>
        </div>
    )
}