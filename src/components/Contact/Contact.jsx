import React from 'react';
import './Contact.scss';
import ContactForm from '../ContactForm/ContactForm';

export default function Contact() {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Prêt à discuter ?</h2>
            <p className="contact-description">
                    Des questions, des projets ou une opportunité d'emploi ?
                    Je serais ravie d'en discuter avec vous.
            </p>
        <ContactForm/>
        </div>
    );
}
