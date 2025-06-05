import openPage from "../mainPage/openPage.js";
import horoscope from "./horoscope.js";

const horoscopeAction = () => {
    const horoscopeButton = document.querySelector('.horoscope');
    horoscopeButton.addEventListener('click', () => {
        openPage(horoscope);
    });     
}

export default horoscopeAction;