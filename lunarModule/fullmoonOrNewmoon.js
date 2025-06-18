import getLanguage from "../localization/localizationUtils.js";
import translateMoonStatus from "./lunarProgressLanguageData.js";

const fullmoonOrNewmoon = (angel) => {
    const lang = getLanguage();
    let fullmoonNewmoon;
    if (angel > 354 || angel < 6) {
        fullmoonNewmoon = `${translateMoonStatus[lang].newMoon}`;
    } else if (angel > 174 && angel < 186) {
        fullmoonNewmoon = `${translateMoonStatus[lang].fullMoon}`;
    } else {
        fullmoonNewmoon = ' ';
    }
    return fullmoonNewmoon;
}

export default fullmoonOrNewmoon;