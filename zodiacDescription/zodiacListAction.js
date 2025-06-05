import openPage from "../mainPage/openPage.js";
import zodiacListCreate from "./zodiacList.js";


const zodiacListAction = () => {
    const zodiacDescriptionButton = document.querySelector('.zodiac-description');
    zodiacDescriptionButton.addEventListener('click', () => {
        openPage(zodiacListCreate)
    });
}

export default zodiacListAction;