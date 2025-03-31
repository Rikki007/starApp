import mainPage from "./mainPage.js";

const mainPageAction = () => {
    const logo = document.querySelector(".logo-container");
    const spinner = document.querySelector('.loader-container');
    logo.addEventListener('click', () => {
        mainPage();
        spinner.classList.toggle('loader-container_disable');
        setTimeout(() => {
            spinner.classList.toggle('loader-container_disable');
        }, 1200);
    });     
}

export default mainPageAction;