import interaction from "./interaction.js";

const interactionAction = () => {
    const interactionButton = document.querySelector('.sign-interaction');
    const preloader = document.querySelector('.loader-container');
    interactionButton.addEventListener('click', () => {
        interaction();
        preloader.classList.toggle('loader-container_disable');
        setTimeout(() => {
            preloader.classList.toggle('loader-container_disable');
        }, 1200);
    });  
}

export default interactionAction;