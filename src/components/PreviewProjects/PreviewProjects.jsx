import React from 'react';
import projects from '../../data/projects.json'; 
import Card from '../../components/Card/Card';
import {IconFileBroken} from "@tabler/icons-react";

export default function PreviewProjects() {
    const previewCards = projects.slice(0,3);

    return(
        
        <div className='preview-projects-container'>
            <h2 className='preview-title'>Aperçu de mes projets</h2>
            <div className="card-list">
                {previewCards.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        alt={card.alt}
                        link={card.link}
                        icon={<IconFileBroken/>}
                    />
                )
            )}
            </div>
        </div>
    )
}