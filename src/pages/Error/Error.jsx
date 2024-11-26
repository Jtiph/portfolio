import React from "react";
import {Link} from "react-router-dom";
import './Error.scss';

export default function Error() {
    return(
        <div className="error">
            <p className="error-text">Ooops...</p>
            <h2 className="error-title">404</h2>
            <p className="error-text">Page introuvable</p>
            <button className="error-btn"><Link to="/" className="error-link">Retourner à l'accueil</Link></button>
        </div>
    )
}