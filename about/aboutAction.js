import openPage from "../mainPage/openPage.js";
import about from "./about.js";

const aboutAction = () => {
    const aboutButton = document.querySelector('.about');
    aboutButton.addEventListener('click', () => {
        openPage(about);
    });     
}

export default aboutAction;