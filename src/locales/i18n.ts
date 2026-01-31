import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ta from './ta';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ta: { translation: ta }
    },
    lng: 'ta', // Default language is Tamil
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
