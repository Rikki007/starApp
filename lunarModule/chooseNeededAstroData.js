import getAstroData from "./lunarRequest.js";

const chooseNeededAstroData = async () => {
    const data = await getAstroData();
    const constellation = data.data.table.rows[0].cells[0].position.constellation.name;
    const moonStatus = data.data.table.rows[0].cells[0].extraInfo.phase.string;    

    const translateConstellation = {
        Aries: "Овна",
        Taurus: "Тельца",
        Gemini: "Близнецов",
        Cancer: "Рака",
        Leo: "Льва",
        Virgo: "Девы",
        Libra: "Весов",
        Scorpius: "Скорпиона",
        Sagittarius: "Стрелеца",
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
        "Waning Crescent": "убывающий серп",
    }

    const moonInfoObject = {
        constel: translateConstellation[constellation] || "Упс, ошибка в созвездии",
        moonSt: translateMoonStatus[moonStatus] || "Упс, ошибка в фазе луны",
    }

    return moonInfoObject;
}

export default chooseNeededAstroData;