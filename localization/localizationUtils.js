const availableLanguages = ['en', 'ru', 'cz'];
const defaultLang = 'en';

const getLanguage = () => {
    const systemLang = navigator.language.split('-')[0];
    return localStorage.getItem('language') ||
           (availableLanguages.includes(systemLang) ? systemLang : defaultLang);
}

export default getLanguage;