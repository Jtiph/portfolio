import React from "react";
import './ProjectsPage.scss';
import SparklesText from "@/components/ui/sparkles-text";
import Gallery from "@/components/Gallery/Gallery";
import { useTranslation } from "react-i18next";

function ProjectsPage () {
const {t} = useTranslation();
    return (
    <div>
       <SparklesText
       text={t("projects.text")}
       className="ProjectsPage-title"
       colors={{ first: "#FFD700", second: "#FFD700" }}
       />
        <Gallery/>
    </div>
    )
    
}

export default ProjectsPage;