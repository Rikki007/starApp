import updateLunarPhase from "./lunar.js";

const lunarAction = () => {
    const moonPositionButton = document.querySelector('.moon-position');
    moonPositionButton.addEventListener('click', updateLunarPhase);
}

export default lunarAction;