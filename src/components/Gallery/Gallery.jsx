// Gallery.jsx
import React from "react";
import projects from "../../data/projects.json";
import Card from "../Card/Card"; 

const Gallery = () => {
    return (
        <div className="gallery-projects">
            {projects.map((project) => {
                return (
                    <article  className="gallery-item" key={project.id}>
                        <Card date={project.date} image={project.image} alt={project.alt} title={project.title} link={project.link}/>
                    </article>
                );
            })}
        </div>
    );
};

export default Gallery;
