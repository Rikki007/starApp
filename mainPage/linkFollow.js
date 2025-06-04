import futureEvents from "../futureEvents/futureEvents.js";
import updateLunarPhase from "../lunarModule/lunar.js";
import zodiacListCreate from "../zodiacDescription/zodiacList.js";
import interaction from "../interaction/interaction.js";
import horoscope from "../horoscope/horoscope.js";
import openPage from "./openPage.js";

const linkFollow = (buttonDataSet) => {

    let passedFunc;

    if (buttonDataSet === "phase") {
        passedFunc = updateLunarPhase;
    }
    if (buttonDataSet === "events") {
        passedFunc = futureEvents;
    }
    if (buttonDataSet === "signs") {
        passedFunc = zodiacListCreate;
    }
    if (buttonDataSet === "interactions") {
        passedFunc = interaction;
    }
    if (buttonDataSet === "horoscope") {
        passedFunc = horoscope;
    }

    openPage(passedFunc)
}

export default linkFollow;