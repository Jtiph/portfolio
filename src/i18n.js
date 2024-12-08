import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

i18n
  .use(initReactI18next) 
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .init({
    debug: true,
    fallbackLng: "fr", 
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: "/locales/{{lng}}/{{lng}}.json",
    },
    detection: {
        order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
        caches: ["cookie", "localStorage"],
    }
    });

  export default i18n;