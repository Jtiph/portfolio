import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Liste de langues
  const languages = [
    { code: "fr", name: "Français", flag: "/portfolio/assets/images/flags/fr.svg" },
    { code: "en", name: "English", flag: "/portfolio/assets/images/flags/en.svg" },
    { code: "kr", name: "한국어", flag: "/portfolio/assets/images/flags/kr.svg" },
  ];

  // Langues actuelles, exclure la langue active
  const currentLanguages = languages.filter(
    (lang) => lang.code !== i18n.language
  );

  // Fonction pour changer la langue
  const changeLanguage = (lang) => {
    console.log("Changement de langue :", lang);
    i18n.changeLanguage(lang); // Change la langue
    setOpen(false); // Fermer le menu déroulant
  };

  return (
    <div className="language-switcher">
      {/* Bouton pour la langue actuelle */}
      <button
        className="language-switcher__selected"
        onClick={() => setOpen(!open)}
      >
        {/* met le drapeau français par défault si aucun langue ou drapeau n'a été trouvé */}
        <img
          src={
            languages.find((lang) => lang.code === i18n.language)?.flag ||
            "/portfolio/assets/images/fr.svg"
          }
          alt="Current language flag"
        />
      </button>

      {/* Menu déroulant */}
      {open && (
        <ul className="language-switcher__menu">
          {currentLanguages.map((lang) => (
            <li key={lang.code}>
              <button
                className="language-switcher__menu-item"
                onClick={() => changeLanguage(lang.code)}
              >
                <img src={lang.flag} alt={`${lang.name} flag`} />
                <span>{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
