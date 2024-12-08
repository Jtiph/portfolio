import React from 'react';
import './Contact.scss';
import ContactForm from '../ContactForm/ContactForm';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const {t} = useTranslation();
    return (
        <div className="contact-container">
            <div className='contact-content'>
                <h2 className="contact-title">{t("contact.title")}</h2>
                <p className="contact-description">
                {t("contact.description")}
                </p>
            </div>
        <div className='contact-form-container'><ContactForm/></div>
        </div>
    );
}
