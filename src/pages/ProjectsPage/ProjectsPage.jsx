import React from "react";
import './ProjectsPage.scss';
import SparklesText from "@/components/ui/sparkles-text";
import Gallery from "@/components/Gallery/Gallery";


function ProjectsPage () {
    return (
    <div>
       <SparklesText
       text="Voir mes travaux"
       className="ProjectsPage-title"
       colors={{ first: "#FFD700", second: "#FFD700" }}
       />
        <Gallery/>
    </div>
    )
    
}

export default ProjectsPage;