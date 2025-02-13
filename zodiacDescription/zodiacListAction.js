import zodiacListCreate from "./zodiacList.js";
import { zodiacDescription } from "./zodiacDescription.js";
import zodiacItemCreate from "./zodiacItemCreate.js";

const zodiacListAction = () => {
    const zodiacDescriptionButton = document.querySelector('.zodiac-description');
    const spinner = document.querySelector('.loader-container');
    zodiacDescriptionButton.addEventListener('click', () => {
        zodiacListCreate();
        spinner.classList.toggle('loader-container_disable');
        setTimeout(() => {
            spinner.classList.toggle('loader-container_disable');
        }, 1200);
        const button = document.querySelectorAll('.sign-elements__item');
        button.forEach((item) => {
            item.addEventListener('click', () => {
                spinner.classList.toggle('loader-container_disable');
                setTimeout(() => {
                    spinner.classList.toggle('loader-container_disable');
                    const discriptionOfSigns = document.querySelector('.sign-description');
                    discriptionOfSigns.innerHTML = zodiacItemCreate(signUnit);
                    discriptionOfSigns.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 1200);
                let signUnit = zodiacDescription.find((unit) => {
                    return unit.name == item.textContent
                });
                
            });
        });
    });
}

export default zodiacListAction;