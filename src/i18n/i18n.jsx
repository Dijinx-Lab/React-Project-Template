// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languages from "./languages";
import enGbTranslations from "./translations/en-gb";
import enUsTranslations from "./translations/en-us";

i18n.use(initReactI18next).init({
  resources: {
    'en-US': {
      translation: enUsTranslations,
    },
    'en-GB': {
      translation: enGbTranslations,
    },
    // Add other languages here
  },
  lng: languages.default,
  fallbackLng: languages.fallback, 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
