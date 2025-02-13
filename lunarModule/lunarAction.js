import preloader from "../preloader/preloader.js";
import updateLunarPhase from "./lunar.js";

const lunarAction = () => {
    const moonPositionButton = document.querySelector('.moon-position');
    moonPositionButton.addEventListener('click', () => {
        const spinner = document.querySelector('.loader-container');
        updateLunarPhase();
        spinner.classList.toggle('loader-container_disable');
        setTimeout(() => {
            spinner.classList.toggle('loader-container_disable');
        }, 1200);

    });
}

export default lunarAction;