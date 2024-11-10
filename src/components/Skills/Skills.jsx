import React from 'react';
import logoReact from '/assets/images/react.svg';
import logoJs from '/assets/images/javascript-js.svg';
import logoSass from '/assets/images/sass-original.svg';
import logoTailwind from '/assets/images/tailwind-css.svg';
import './Skills.scss';

export default function Skills() {
    return(
        <div className='skills-container'>
            <div className='skills'>
                <img className="animation-spin" src={logoReact} alt='logo-react'/>
                <h2>React</h2>
            </div>
            <div className='skills'>
                <img className="logo-js" src={logoJs} alt='logo-js'/>
                <h2>JavaScript</h2>
            </div>
            <div className='skills'>
                <img className="logo-sass" src={logoSass} alt='logo-sass'/>
                <h2>Sass</h2>
            </div>
            <div className='skills'>
                <img className="logo-tailwind" src={logoTailwind} alt='logo-tailwind'/>
                <h2>Tailwind-css</h2>
            </div>
        </div>
    )
}