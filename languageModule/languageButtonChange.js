import getLanguage from "../localization/localizationUtils.js";

const languageButtonChange = () => {
    const lang = getLanguage();
    let languageSrc;

    if (lang === 'ru') {
        languageSrc = './assets/images/localization/ru.png'; 
    } else if (lang === 'en') {
        languageSrc = './assets/images/localization/eng.png'; 
    } else if (lang === 'cz') {
        languageSrc = './assets/images/localization/cz.png'; 
    }

    return languageSrc;
};

export default languageButtonChange;
