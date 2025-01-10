import React from "react";
import {Link} from "react-router-dom";
import './Error.scss';
import { useTranslation } from "react-i18next";

export default function Error() {

    const { t } = useTranslation();

    return(
        <div className="error">
            <p className="error-text">Ooops...</p>
            <h2 className="error-title">404</h2>
            <p className="error-text">{t("error.text")}</p>
            <button className="error-btn"><Link to="/" className="error-link">{t("error.link")}</Link></button>
        </div>
    )
}