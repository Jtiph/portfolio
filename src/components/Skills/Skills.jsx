import React from 'react';
import logoReact from '../../assets/images/react.svg';
import logoJs from '../../assets/images/javascript-js.svg';
import logoSass from '../../assets/images/sass-original.svg';
import './Skills.scss';

export default function Skills() {
    return(
        <div className='skills'>
            <div>
                <img className="animation-spin" src={logoReact} alt='logo-react'/>
                <h2>React</h2>
                <p>description</p>
            </div>
            <div>
                <img className="logo-js" src={logoJs} alt='logo-js'/>
                <h2>JavaScript</h2>
                <p>description</p>
            </div>
            <div>
                <img className="logo-sass" src={logoSass} alt='logo-sass'/>
                <h2>Skills</h2>
                <p>description</p>
            </div>
        </div>
    )
}