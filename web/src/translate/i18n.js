import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './languages';

i18next
    .use(LanguageDetector)
    .init({
        fallbackLng : 'pt',
        resources : messages
    });

export default i18next;