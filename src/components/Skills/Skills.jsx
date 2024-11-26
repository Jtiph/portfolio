import React from 'react';
import './Skills.scss';
import IconCloudContainer from '../IconCloudContainer/IconCloudContainer';
import { Link } from 'react-router-dom';

export default function Skills() {
    return(
        <div className='skills-container'>
            <h2 className='skills-title'>Compétences</h2>
            <IconCloudContainer/>
            <div>
                <p className='skills-text'>C'est bien beau, mais ça donne quoi dans la réalité ?  <Link to="/projects" className='skills-text-link'>Explorer mes projects</Link></p>         
            </div>
        </div>
    )
}