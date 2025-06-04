import zodiacDescription from "./zodiacDescription.js";
import zodiacItemCreate from "./zodiacItemCreate.js";

const zodiacButtons = () => {
    const button = document.querySelectorAll('.sign-elements__item');
    
    button.forEach((item) => {
        const spinner = document.querySelector('.loader-container');
        item.addEventListener('click', () => {
            spinner.classList.toggle('loader-container_disable');
            let signUnit = zodiacDescription.find((unit) => {
                return unit.className == item.dataset.sign;
            });
            setTimeout(() => {
                spinner.classList.toggle('loader-container_disable');
                const discriptionOfSigns = document.querySelector('.sign-description');
                discriptionOfSigns.innerHTML = zodiacItemCreate(signUnit);
                discriptionOfSigns.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 1200);                
        });
    });
}

export default zodiacButtons;