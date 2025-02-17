import horoscope from "./horoscope.js";

const horoscopeAction = () => {
    const horoscopeButton = document.querySelector('.horoscope');
    const spinner = document.querySelector('.loader-container');
    horoscopeButton.addEventListener('click', () => {
        horoscope();
        spinner.classList.toggle('loader-container_disable');
        setTimeout(() => {
            spinner.classList.toggle('loader-container_disable');
        }, 1200);
    });     
}

export default horoscopeAction;