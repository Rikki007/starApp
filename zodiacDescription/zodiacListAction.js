import zodiacListCreate from "./zodiacList.js";
import { zodiacDescription } from "./zodiacDescription.js";
import zodiacItemCreate from "./zodiacItemCreate.js";

const zodiacListAction = () => {
    zodiacListCreate();
    const button = document.querySelectorAll('.sign-elements__item');
    button.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item.textContent)
            let signUnit = zodiacDescription.find((unit) => {
                return unit.name == item.textContent
            });
            const discriptionOfSigns = document.querySelector('.sign-description');
            discriptionOfSigns.innerHTML = zodiacItemCreate(signUnit);
        });
    });
}

export default zodiacListAction;