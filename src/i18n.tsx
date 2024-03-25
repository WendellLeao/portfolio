import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import englishFile from './localization/english/english.json';
import portugueseFile from './localization/portuguese/portuguese.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: englishFile,
            },
            pt: {
                translation: portugueseFile,
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;