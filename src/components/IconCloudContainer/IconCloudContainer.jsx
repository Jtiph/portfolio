import React from "react";
import IconCloud from "../ui/icon-cloud";
import './IconCloudContainer.scss';


const iconSlugs = [
    "javascript", "react", "sass", "notion", "html5", "css3", "git", 
    "github", "visualstudiocode", "figma", "tailwindcss",
];

export default function IconCloudContainer() {
    return (
        <div className="icon-cloud-container">
            <IconCloud iconSlugs={iconSlugs} />
        </div>
    );
}
