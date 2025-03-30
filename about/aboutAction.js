import about from "./about.js";

const aboutAction = () => {
    const aboutButton = document.querySelector('.about');
    const spinner = document.querySelector('.loader-container');
    aboutButton.addEventListener('click', () => {
        about();
        spinner.classList.toggle('loader-container_disable');
        setTimeout(() => {
            spinner.classList.toggle('loader-container_disable');
        }, 1200);
    });     
}

export default aboutAction;