import openPage from "../mainPage/openPage.js";
import updateLunarPhase from "./lunar.js";

const lunarAction = () => {
    const moonPositionButton = document.querySelector('.moon-position');
    moonPositionButton.addEventListener('click', () => {
        openPage(updateLunarPhase);
    });
}

export default lunarAction;