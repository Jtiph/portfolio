import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss';

const ContactForm = () => {
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
            'template_k5g1gtu',
            formData,
            'u7elw5pafc5Q4lwGr'
        )
        .then((response) => {
            alert('Merci pour votre message, ${formData.firstName} ${formData.lastName} de ${formData.company}!');
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
                        Prénom
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
                        Nom
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
                        Email
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
                    <div>Société</div>
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
                        Message
                        <span className='required-stars'>*</span>
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className='form-btnContainer'><button type="submit" className='form-btn'>Envoyer</button></div>
        </form>
    );
}

export default ContactForm;