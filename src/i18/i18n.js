import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { tr } from "./locales/tr";
import { en } from "./locales/en";

const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  interpolation: {
    escapeValue: false,
  },
  preload: ["en", "tr"],
  fallbackLng: "en",
  initImmediate: false,
});

export default i18n;
