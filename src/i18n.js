import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationHE from '../public/locales/he/translation.json';
import translationEN from '../public/locales/en/translation.json';
import translationRU from '../public/locales/ru/translation.json';

// the translations
const resources = {
  he: {
    translation: translationHE
  },
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "he",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;