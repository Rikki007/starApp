import zodiacListCreate from "./zodiacList.js";

const zodiacListAction = () => {
    const zodiacDescriptionButton = document.querySelector('.zodiac-description');
    const spinner = document.querySelector('.loader-container');
    zodiacDescriptionButton.addEventListener('click', () => {
        zodiacListCreate();
        spinner.classList.toggle('loader-container_disable');
        setTimeout(() => {
            spinner.classList.toggle('loader-container_disable');
        }, 1200);
    });
}

export default zodiacListAction;