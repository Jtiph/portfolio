import React from 'react';
import projects from '../../data/projects.json'; 
import Card from '../../components/Card/Card';
import { TbFileBroken } from "react-icons/tb";
import './PreviewProject.scss';


export default function PreviewProjects() {
    const previewCards = projects.slice(4,7);

    return(
        
        <div className='preview-projects-container'>
            <div className="preview-card">
                {previewCards.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        alt={card.alt}
                        link={card.link}
                        icon={<TbFileBroken />}
                    />
                )
            )}
            </div>
        </div>
    )
}