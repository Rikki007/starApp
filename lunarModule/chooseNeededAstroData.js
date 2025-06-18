import getAstroData from "./lunarRequest.js";
import fullmoonOrNewmoon from "./fullmoonOrNewmoon.js";
import lunarPositionSignDescription from "./lunarPositionSignDescripton.js";
import getLanguage from "../localization/localizationUtils.js";
import translateConstellation from "./constellationLanguageData.js";
import translateMoonStatus from "./lunarProgressLanguageData.js";

const chooseNeededAstroData = async () => {
    const lang = getLanguage();
    const data = await getAstroData();
    const constellation = data.data.table.rows[0].cells[0].position.constellation.name;
    const moonStatus = data.data.table.rows[0].cells[0].extraInfo.phase.string; 
    const angel = parseFloat(data.data.table.rows[0].cells[0].extraInfo.phase.angel, 10);
    const fullmoonNewmoon = fullmoonOrNewmoon(angel);
    const signDescription = data.data.table.rows[0].cells[0].position.constellation.name.toLowerCase();

    const moonInfoObject = {
        constel: translateConstellation[lang][constellation] || "Упс, ошибка в созвездии",
        moonSt: translateMoonStatus[lang][moonStatus] || "Упс, ошибка в фазе луны",
        fullmoon: fullmoonNewmoon || "Упс, ошибка при определении полнолуния-новолуния",
        signInteraction: lunarPositionSignDescription[lang][signDescription].description || "Упс, ошибка при получении данных о влиянии луны на знак зодиака",
    }
    return moonInfoObject;
}

export default chooseNeededAstroData;