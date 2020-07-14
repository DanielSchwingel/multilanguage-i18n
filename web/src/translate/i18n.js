import i18next from 'i18next';
import { messages } from './languages';

i18next.init({
    fallbackLng : 'pt',
    resources : messages
});

module.exports = i18next;