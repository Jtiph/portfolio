import React from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

export default function Footer(){
    const {t} = useTranslation();
    return(
        <div className='footer-container'>
            <div className='footer-separateur'></div>
            <div className='footer-content'>
                <p>{t("footer.text")}</p>
            </div>
        </div>
    )
}