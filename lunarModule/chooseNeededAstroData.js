import getAstroData from "./lunarRequest.js";
import fullmoonOrNewmoon from "./fullmoonOrNewmoon.js";
import lunarPositionSignDescription from "./lunarPositionSignDescripton.js";

const chooseNeededAstroData = async () => {
    const data = await getAstroData();
    const constellation = data.data.table.rows[0].cells[0].position.constellation.name;
    const moonStatus = data.data.table.rows[0].cells[0].extraInfo.phase.string; 
    const angel = parseFloat(data.data.table.rows[0].cells[0].extraInfo.phase.angel, 10);
    const fullmoonNewmoon = fullmoonOrNewmoon(angel);
    const signDescription = data.data.table.rows[0].cells[0].position.constellation.name.toLowerCase();

    const translateConstellation = {
        Aries: "Овна",
        Taurus: "Тельца",
        Gemini: "Близнецов",
        Cancer: "Рака",
        Leo: "Льва",
        Virgo: "Девы",
        Libra: "Весов",
        Scorpius: "Скорпиона",
        Sagittarius: "Стрельца",
        Capricornus: "Козерога",
        Aquarius: "Водолея",
        Pisces: "Рыбы",
        Auriga: "Возничего",
        Ophiuchus: "Змееносца",
        Cetus: "Кита",
        Orion: "Ориона",
        Sextans: "Секстанта",
    }

    const translateMoonStatus = {
        "Waxing Crescent": "Растущий серп",
        "Waxing Gibbous": "Растущая луна",
        "Waning Gibbous": "Убывающая луна",
        "Waning Crescent": "Убывающий серп",
    }

    const moonInfoObject = {
        constel: translateConstellation[constellation] || "Упс, ошибка в созвездии",
        moonSt: translateMoonStatus[moonStatus] || "Упс, ошибка в фазе луны",
        fullmoon: fullmoonNewmoon || "Упс, ошибка при определении полнолуния-новолуния",
        signInteraction: lunarPositionSignDescription[signDescription].description || "Упс, ошибка при получении данных о влиянии луны на знак зодиака",
    }

    return moonInfoObject;
}

export default chooseNeededAstroData;