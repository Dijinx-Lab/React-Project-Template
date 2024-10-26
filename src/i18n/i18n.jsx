// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languages from "./languages";
import englishTranslations from "./translations/en";
import spanishTranslations from "./translations/es";

i18n.use(initReactI18next).init({
  resources: {
    'es': {
      translation: spanishTranslations,
    },
    'en': {
      translation: englishTranslations,
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
