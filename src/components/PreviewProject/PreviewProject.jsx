import React from 'react';
import projects from '../../data/projects.json'; 
import Card from '../../components/Card/Card';
import { TbFileBroken } from "react-icons/tb";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import './PreviewProject.scss';
import { Link } from 'react-router-dom';


export default function PreviewProjects() {
    const validProjects = projects.filter((project) => project.date);
    const sortedProjects = validProjects.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    const recentProjects = sortedProjects.slice(0, 3);

    return(
        
        <div className='preview-projects-container'>
             <h2 className='preview-projects-title'>Un aperçu de mon travail</h2>
            <div className="preview-card">
                {recentProjects.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        alt={card.alt}
                        link={card.link}
                        icon={<TbFileBroken />}
                        date={card.date}
                    />
                )
            )}
            </div>
            <Link to="/projects" className='preview-btn'>
                Voir plus 
                <div className='preview-btn-icon'>
                    <MdKeyboardDoubleArrowRight />
                </div>
            </Link>
        </div>
    )
}