import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message:'' 
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        emailjs.send(
            'service_zd7klsq',
            'template_hue9z1i',
            formData,
            'g9Yjyd4iIaSLuq-pc'
        )
        .then(() => {
            alert('Merci pour votre message!');
            setFormData({ firstName:'', lastName: '', company: '', email: '', message: '' });         
        })
        .catch((error) => {
            console.error("Erreur d'envoi :", error);
            alert("Une erreur est survenue lors de l'envoi du message.");
        });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-names'>
                <label>
                    <div className='label-firstName'>
                    {t("contact-form.label1")}
                        <span className='required-stars'>*</span>
                    </div>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <div>
                    {t("contact-form.label2")}
                        <span className='required-stars'>*</span>
                    </div>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className='form-details'>
                <label>
                    <div>
                    {t("contact-form.label3")}
                        <span className='required-stars'>*</span>
                    </div>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                </label>
                <label>
                    <div>{t("contact-form.label4")}</div>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </label>
            </div>
                <label>
                    <div>
                    {t("contact-form.label5")}
                        <span className='required-stars'>*</span>
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className='form-btnContainer'>
                    <button type="submit" className='form-btn'>{t("contact-form.btn-send")}</button>
                </div>
        </form>
    );
}

export default ContactForm;