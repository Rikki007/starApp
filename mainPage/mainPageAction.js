import mainPage from "./mainPage.js";
import openPage from "./openPage.js";

const mainPageAction = () => {
    const logo = document.querySelector(".logo-container");
    const mainPageButton = document.querySelector(".main-page");
    logo.addEventListener('click', () => {
        openPage(mainPage);
    }); 
    mainPageButton.addEventListener('click', () => {
        openPage(mainPage);
    });    
}

export default mainPageAction;